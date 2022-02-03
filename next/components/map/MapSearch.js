import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import { useTranslation } from "react-i18next";
// import { MdSearch } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import AppContext from "../../context/AppContext";
import MapContext from "../../context/MapContext";
import SearchTag from "./SearchTag";
import { mapListCategory } from "../../utils/constant";
import Skeleton from "../core/Skeleton";

const DEFAULT_BASEMAP_IMAGE =
  "https://tanahair.indonesia.go.id/arcgis_js_api/library/4.15/esri/themes/base/images/basemap-toggle-64.svg";

const MapSearch = ({ category, setCategory }) => {
  const { t } = useTranslation("simpulJaringan");
  const { handleSetSnack } = useContext(AppContext);
  const {
    merc,
    setActiveLegend,
    setIsOpenFeature,
    setActiveFeature,
    activeFeature,
    setActiveLayer,
    activeLayer,
  } = useContext(MapContext);
  const textSearchRef = useRef(null);
  const [isResult, setIsResult] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [isFetch, setIsFetch] = useState(false);
  const [organizationList, setOrganizationList] = useState([]);
  const [simpulList, setSimpulList] = useState([]);
  const [daftarLayanan, setDaftarLayanan] = useState([]);
  const [organization, setOrganization] = useState("");
  const [totalData, setTotalData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(async () => {
    try {
      setIsLoad(true);
      const res = await fetch(
        "https://tanahair.indonesia.go.id/api/3/action/organization_list?all_fields=true&include_extras=true",
        {
          method: "GET",
        }
      );
      const resData = await res.json();
      if (resData.result.length > 0) {
        let a = resData.result.filter((el) => {
          if (el.extras[1]) {
            return el;
          }
        });

        setOrganizationList(
          a.map((el) => {
            return {
              label: el.title,
              value: el.name,
              category: el.extras[1].value,
            };
          })
        );
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    } finally {
      setIsLoad(false);
    }
  }, []);

  useEffect(() => {
    const daftarLayananArr = [];
    for (let index in simpulList) {
      const extras = simpulList[index].extras;
      let minX = 0;
      let minY = 0;
      let maxX = 0;
      let maxY = 0;
      let srs = null;
      for (let row in extras) {
        switch (extras[row].key) {
          case "bbox-east-long":
            maxX = extras[row].value;
            break;
          case "bbox-north-lat":
            maxY = extras[row].value;
            break;
          case "bbox-south-lat":
            minY = extras[row].value;
            break;
          case "bbox-west-long":
            minX = extras[row].value;
            break;
          case "spatial-reference-system":
            srs = extras[row].value.replace("urn:ogc:def:crs:", "");
            break;
        }
      }
      const resources = simpulList[index].resources;
      for (let row in resources) {
        if (resources[row].format === "Esri REST") {
          const layanan = {
            judul: simpulList[index].title,
            nama: resources[row].name,
            url: resources[row].url,
            format: resources[row].format,
            simpul: simpulList[index].organization.title,
            bbox: minX + "," + minY + "," + maxX + "," + maxY,
            srs: srs,
          };
          daftarLayananArr.push(layanan);
        } else if (
          resources[row].format === "WMS" &&
          resources[row].resource_locator_protocol === "OGC:WMS"
        ) {
          const layanan = {
            judul: simpulList[index].title,
            nama: resources[row].name,
            url: resources[row].url,
            format: resources[row].format,
            simpul: simpulList[index].organization.title,
            bbox: minX + "," + minY + "," + maxX + "," + maxY,
            srs: srs,
          };
          daftarLayananArr.push(layanan);
        } else if (
          resources[row].format === "" &&
          resources[row].resource_locator_protocol === "OGC:WMS"
        ) {
          const layanan = {
            judul: simpulList[index].title,
            nama: resources[row].name,
            url: resources[row].url,
            format: "WMS",
            simpul: simpulList[index].organization.title,
            bbox: minX + "," + minY + "," + maxX + "," + maxY,
            srs: srs,
          };
          daftarLayananArr.push(layanan);
        }
      }
    }
    setDaftarLayanan(daftarLayananArr);
  }, [simpulList]);

  const getSimpulList = useCallback(
    async (currentPage) => {
      setIsFetch(true);
      try {
        const res = await fetch(
          "https://tanahair.indonesia.go.id/api/3/action/package_search?fq=organization:" +
            organization +
            "&start=" +
            (currentPage - 1) * 10 +
            "&q=" +
            textSearchRef.current.value,
          {
            method: "GET",
          }
        );
        const resData = await res.json();
        if (res.status === 200) {
          setSimpulList(resData.result.results);
          setTotalData(resData.result.count);
          setIsResult(true);
        }
      } catch (error) {
        handleSetSnack(error.message, "error");
      } finally {
        setIsFetch(false);
      }
    },
    [organization, page, setSimpulList, setTotalData, setIsResult]
  );

  const buatThumbnailUrl = useCallback((layanan) => {
    let thumbnailUrl = null;
    const link = new URL(layanan.url);
    switch (layanan.format) {
      case "Esri REST":
        link.pathname += "/info/thumbnail";
        thumbnailUrl =
          link.protocol === "http:"
            ? "/api/proxy?proxy=" + encodeURIComponent(link.href)
            : link.href;
        break;
      case "WMS":
        link.search =
          "?service=WMS&version=1.1.0&request=GetMap&layers=" +
          layanan.nama +
          "&styles=&bbox=" +
          layanan.bbox +
          "&width=64&height=64&srs=" +
          layanan.srs +
          "&format=image%2Fpng";
        thumbnailUrl =
          link.protocol === "http:"
            ? "/api/proxy?proxy=" + encodeURIComponent(link.href)
            : link.href;
        break;
    }
    return thumbnailUrl;
  }, []);

  const getLegendList = useCallback(async (item) => {
    try {
      const link = new URL(item.url);

      if (item.format === "WMS") {
        link.search =
          "?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=" +
          item.nama;
        setActiveLegend((prev) => {
          let arr = [...prev];
          arr.push({
            id: item.judul + item.nama,
            label: item.simpul,
            judul: item.judul,
            legendImageUrl:
              link.protocol === "http:"
                ? "/api/proxy?proxy=" + encodeURIComponent(link.href)
                : link.href,
          });
          return arr;
        });
      } else {
        link.pathname += "/legend";
        link.search = "?f=json";
        let url =
          link.protocol === "http:"
            ? "/api/proxy?proxy=" + encodeURIComponent(link.href)
            : link.href;
        const res = await fetch(url);
        const resData = await res.json();
        setActiveLegend((prev) => {
          let arr = [...prev];
          arr.push({
            id: item.judul + item.nama,
            label: item.nama,
            legendList: resData.layers,
          });
          return arr;
        });
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  }, []);

  const handleTambahLayer = useCallback(
    async (el) => {
      if (el.format === "Esri REST") {
        try {
          const link = new URL(el.url);
          link.search = "?f=json";
          let url =
            link.protocol === "http:"
              ? "/api/proxy?proxy=" + encodeURIComponent(link.href)
              : link.href;
          let res = await fetch(url);
          if (res.status === 200) {
            let resJson = await res.json();
            let { fullExtent } = resJson;
            if (fullExtent?.spatialReference?.wkid === 4326) {
              el.bbox = `${fullExtent.xmin},${fullExtent.ymin},${fullExtent.xmax},${fullExtent.ymax}`;
            } else if (
              [900913, 54004, 41001, 102113, 102100, 3785].includes(
                fullExtent?.spatialReference?.wkid
              )
            ) {
              let boundsLonLat = merc.convert([
                fullExtent.xmin,
                fullExtent.ymin,
                fullExtent.xmax,
                fullExtent.ymax,
              ]);
              el.bbox = boundsLonLat.join(",");
            }
          }
        } catch (error) {
          console.error(error);
        }
      }
      if (activeFeature !== "layer") {
        setIsOpenFeature(false);

        setTimeout(() => {
          setActiveFeature("layer");
          setIsOpenFeature(true);
        }, 500);
      }
      let a = [...activeLayer];
      if (activeLayer.findIndex((item) => item.simpul === el.simpul) === -1) {
        a.push({
          simpul: el.simpul,
          layer: [el],
        });
        setActiveLayer(a);
        getLegendList(el);
      } else {
        if (
          activeLayer[
            activeLayer.findIndex((item) => item.simpul === el.simpul)
          ].layer.findIndex(
            (item) => item.judul === el.judul && item.nama === el.nama
          ) === -1
        ) {
          let b = [
            ...a[a.findIndex((item) => item.simpul === el.simpul)].layer,
          ];
          b.push(el);
          a[a.findIndex((item) => item.simpul === el.simpul)].layer = b;
          setActiveLayer(a);
          getLegendList(el);
        } else {
          handleSetSnack("Layer sudah ditambahkan", "warning");
        }
      }

      // setActiveLayer((prev) => {
      //   let a = [...prev];
      //   if (a.findIndex((item) => item.simpul === el.simpul) === -1) {
      //     a.unshift({
      //       simpul: el.simpul,
      //       layer: [el],
      //     });
      //   } else {
      //     if (
      //       a[a.findIndex((item) => item.simpul === el.simpul)].layer.findIndex(
      //         (item) => item.judul === el.judul && item.nama === el.nama
      //       ) === -1
      //     ) {
      //       let b = [
      //         ...a[a.findIndex((item) => item.simpul === el.simpul)].layer,
      //       ];
      //       b.unshift(el);
      //       a[a.findIndex((item) => item.simpul === el.simpul)].layer = b;
      //     } else {
      //       handleSetSnack("Layer sudah ditambahkan", "warning");
      //     }
      //   }
      //   return a;
      // });
    },
    [activeFeature, activeLayer]
  );

  return (
    <>
      <div className='fixed md:absolute top-16 md:top-24 left-0 md:left-6 z-20 font-map'>
        <div className='relative shadow-map-2 w-screen md:w-[27.5rem] py-2 md:py-4 bg-white md:rounded-xl'>
          <div className='px-3'>
            <p
              className='text-black-2 font-semibold text-xs'
              data-cy='network-card-title'
            >
              {t("simpulTitle")}
            </p>
            {isLoad ? (
              <div
                className='mt-3 flex gap-2'
                data-cy='network-button-skeleton'
              >
                <Skeleton style='w-5/12 h-8 rounded-full' shape='bar' />
                <Skeleton style='w-3/12 h-8 rounded-full' shape='bar' />
                <Skeleton style='w-4/12 h-8 rounded-full' shape='bar' />
              </div>
            ) : (
              <div
                className='flex space-x-2 mt-3 overflow-x-scroll hide-scrollbar'
                data-cy='network-button-category'
              >
                {mapListCategory.map((item) => (
                  <SearchTag
                    key={item.value}
                    isLoad={isLoad}
                    label={t(item.label)}
                    value={item.value}
                    isActive={category === item.value}
                    onClick={() => {
                      if (window.innerWidth >= 768) {
                        setCategory((prev) => {
                          if (prev !== item.value) {
                            return item.value;
                          } else {
                            return "";
                          }
                        });
                      } else {
                        setIsResult(() => {
                          if (category !== item.value) {
                            return true;
                          } else {
                            return false;
                          }
                        });
                        setCategory((prev) => {
                          if (prev !== item.value) {
                            return item.value;
                          } else {
                            return "";
                          }
                        });
                      }
                    }}
                  />
                ))}
              </div>
            )}
          </div>
          <div
            className={`${
              category !== "" ? "max-h-32" : "max-h-0"
            } transition-[max-h] duration-300 overflow-y-hidden ease-in-out`}
            data-cy='network-card-select-section'
          >
            <hr className='mt-3' />
            <div className='flex flex-col gap-3 px-3 pt-3'>
              <select
                className='text-xs max-h-20 text-black-2 rounded-lg focus:ring-transparent focus:border-gray-5 border-gray-5 cursor-pointer'
                onChange={(e) => setOrganization(e.target.value)}
                data-cy='network-card-selector'
              >
                <option value=''>{t("chooseSimpul")}</option>
                {organizationList.map((el) => {
                  if (el.category === category) {
                    return (
                      <option value={el.value} key={el.value}>
                        {el.label}
                      </option>
                    );
                  }
                })}
              </select>
              {!isFetch ? (
                <button
                  data-cy='network-card-process-button'
                  disabled={isLoad}
                  onClick={() => {
                    setPage(1);
                    getSimpulList(1);
                  }}
                  className={`${
                    isFetch ? "cursor-disable" : ""
                  } bg-main-blue text-white w-full py-2 rounded-lg text-sm`}
                >
                  {t("buttonProcess")}
                </button>
              ) : (
                <div className='w-full flex justify-center items-center'>
                  <img
                    src='images/loader.svg'
                    alt='loader'
                    className='w-10 h-10'
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          data-cy='choose-network-card'
          className={`mt-2 shadow-map-2 w-screen md:w-[27.5rem] bg-white rounded-xl ${
            isResult ? "max-h-[75vh] md:max-h-[30rem]" : "max-h-0"
          } overflow-y-hidden transition-all duration-500 ease-in-out fixed md:relative bottom-0`}
        >
          <div className='flex justify-between items-center px-3 py-3 relative '>
            <p className='text-black-2 font-semibold text-xs'>
              {t("simpulTitle2")}
            </p>
            <button onClick={() => setIsResult(false)}>
              <CgClose className='text-main-gray w-5 h-5' />
            </button>
          </div>
          <div className='px-3 pb-2'>
            <input
              ref={textSearchRef}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setPage(1);
                  getSimpulList(1);
                }
              }}
              className='rounded-lg border h-full w-full px-3 py-2 focus:outline-none text-black-2 text-xs'
              placeholder={t("chooseSimpul")}
            />
          </div>
          <hr className='text-gray-4 border-t-2 opacity-40' />

          {daftarLayanan.length > 0 ? (
            <div
              className='p-3 space-y-2 overflow-y-scroll max-h-[40vh] md:max-h-80 mt-3 hide-scrollbar'
              data-cy='network-list'
            >
              {daftarLayanan.map((el, index) => {
                const thumbnailSource = buatThumbnailUrl(el);
                return (
                  <div
                    className='border border-gray-6 rounded-xl p-3 flex gap-4'
                    key={index}
                  >
                    <div className='bg-gray-3 w-20 h-16 rounded-lg overflow-hidden'>
                      <img
                        //  src='https://tanahair.indonesia.go.id/arcgis_js_api/library/4.15/esri/themes/base/images/basemap-toggle-64.svg'
                        // src='https://tanahair.indonesia.go.id/proxy/proxy.php?http://jakartasatu.jakarta.go.id/server/rest/services/UTILITAS/Data_Utilitas_View/MapServer/info/thumbnail'
                        src={thumbnailSource}
                        alt='thumbnail'
                        className='object-cover w-20 h-16 '
                        onError={(event) => {
                          event.target.src = DEFAULT_BASEMAP_IMAGE;
                          event.onerror = null;
                        }}
                      />
                    </div>

                    <div className='flex flex-col justify-between'>
                      <p className='text-main-gray text-xs'>{el.judul}</p>
                      <div className='flex items-center gap-3'>
                        <button
                          data-cy={`add-layer-button-${index}`}
                          onClick={() => handleTambahLayer(el)}
                          className='bg-main-blue text-white py-1 px-3 rounded-full'
                        >
                          {t("buttonAddLayer")}
                        </button>
                        <div className='w-1 h-1 rounded-full bg-main-gray' />
                        <a
                          data-cy='detail-link'
                          href={el.url}
                          target='_blank'
                          className='text-main-gray'
                        >
                          {t("detail")}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className='p-12 flex flex-col gap-2 items-center'>
              <img
                src='images/ph-nolayer.png'
                alt='placeholder'
                className='w-32'
              />
              <p className='text-black-2 font-semibold text-sm'>
                {t("noLayer")}
              </p>
              <p className='text-main-gray text-xs'>{t("noLayerText")}</p>
            </div>
          )}
          <div className='p-3 w-full flex justify-center gap-5'>
            <button
              onClick={() => {
                if (page !== 1) {
                  getSimpulList(page - 1);
                  setPage((prev) => prev - 1);
                }
              }}
            >
              <img
                src='/images/ic-arrow-r.svg'
                alt='prev button'
                className='tranform rotate-180'
              />
            </button>

            <p className='text-center text-black-2 text-xs'>
              {(page - 1 === 0 ? page : (page - 1) * 10 + 1) +
                "-" +
                (page === Math.trunc(totalData / 10) + 1
                  ? totalData
                  : page * 10) +
                " " +
                t("from") +
                " " +
                (totalData || "-")}
            </p>
            <button
              onClick={() => {
                if (page !== Math.trunc(totalData / 10) + 1) {
                  getSimpulList(page + 1);
                  setPage((prev) => prev + 1);
                }
              }}
            >
              <img src='/images/ic-arrow-r.svg' alt='next button' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapSearch;
