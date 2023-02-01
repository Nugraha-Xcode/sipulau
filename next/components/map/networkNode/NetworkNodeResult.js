import { useTranslation } from "next-i18next";
import shallow from "zustand/shallow";
import React, { useCallback, useContext } from "react";
import AppContext from "../../../context/AppContext";
import { useNetwork } from "../../../hooks";
import Loader from "../../core/Loader";
import { Button, Searchbar } from "../sidebar-content/core";
import NetworkNodeResultItem from "./NetworkNodeResultItem";

const NetWorkNodeResult = ({ getSimpulList, isFetch }) => {
  const { t } = useTranslation();
  const translatedText = (key) => {
    const params = { ns: ["simpulJaringan"] };
    return t(key, params);
  };
  const { handleSetSnack } = useContext(AppContext);
  const [
    page,
    setPage,
    totalData,
    daftarLayanan,
    activeLayer,
    setActiveLayer,
    setActiveLegend,
    activeLegend,
  ] = useNetwork(
    (state) => [
      state.page,
      state.setPage,
      state.totalData,
      state.daftarLayanan,
      state.activeLayer,
      state.setActiveLayer,
      state.setActiveLegend,
      state.activeLegend,
    ],
    shallow
  );

  const [value, setValue] = React.useState("");

  //   this should be an array contains the boolean value of each item
  const [isActive, setIsActive] = React.useState(false);

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

  const getLegendList = useCallback(
    async (item) => {
      try {
        const link = new URL(item.url);

        if (item.format === "WMS") {
          link.search =
            "?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=" +
            item.nama;

          let arr = [...activeLegend];
          arr.push({
            id: item.judul + item.nama,
            label: item.simpul,
            judul: item.judul,
            legendImageUrl:
              link.protocol === "http:"
                ? "/api/proxy?proxy=" + encodeURIComponent(link.href)
                : link.href,
          });
          setActiveLegend(arr);
        } else {
          link.pathname += "/legend";
          link.search = "?f=json";
          let url =
            link.protocol === "http:"
              ? "/api/proxy?proxy=" + encodeURIComponent(link.href)
              : link.href;
          const res = await fetch(url);
          const resData = await res.json();
          let arr = [...activeLegend];
          arr.push({
            id: item.judul + item.nama,
            label: item.nama,
            legendList: resData.layers,
          });
          setActiveLegend(arr);
        }
      } catch (error) {
        handleSetSnack(error.message, "error");
      }
    },
    [activeLegend]
  );

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
      el.source = "simpul";
      el.visibility = "visible";
      let currentActiveLayer = [...activeLayer];
      if (
        currentActiveLayer.findIndex(
          (item) => item.judul === el.judul && item.nama === el.nama
        ) === -1
      ) {
        currentActiveLayer.push(el);
        setActiveLayer(currentActiveLayer);
        getLegendList(el);
      } else {
        handleSetSnack("Layer sudah ditambahkan", "warning");
      }

      // if (activeLayer.findIndex((item) => item.simpul === el.simpul) === -1) {
      //   a.push({
      //     simpul: el.simpul,
      //     layer: [el],
      //   });
      //   setActiveLayer(a);
      //   // getLegendList(el);
      // } else {
      //   if (
      //     activeLayer[
      //       activeLayer.findIndex((item) => item.simpul === el.simpul)
      //     ].layer.findIndex(
      //       (item) => item.judul === el.judul && item.nama === el.nama
      //     ) === -1
      //   ) {
      //     let b = [...a[a.findIndex((item) => item.simpul === el.simpul)].layer];
      //     b.push(el);
      //     a[a.findIndex((item) => item.simpul === el.simpul)].layer = b;
      //     setActiveLayer(a);
      //     // getLegendList(el);
      //   } else {
      //     handleSetSnack("Layer sudah ditambahkan", "warning");
      //   }
      // }

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
    [activeLayer, getLegendList]
  );

  return (
    <div className='flex flex-col gap-3 border-t-[1px] my-2 py-2'>
      <div className='font-semibold text-[#4F4C4A]'>
        {translatedText("selectNetworkData")}
      </div>
      <Searchbar value={value} setValue={setValue} />

      <div className='flex flex-col gap-2 relative'>
        <Loader show={isFetch} />
        {daftarLayanan.length === 0 ? (
          <div className='flex flex-col items-center gap-3 w-full h-[180px] justify-center'>
            <img
              src='images/ic-warning.png'
              className='w-[fit-content] h-[fit-content]'
            />
            <div className='text-[#4F4C4A] font-semibold'>
              {translatedText("dataNotFound")}
            </div>
            <div className='text-[#B4B2AF] text-xs'>
              {translatedText("networkInstruction")}
            </div>
          </div>
        ) : (
          daftarLayanan.map((item, index) => (
            <NetworkNodeResultItem
              handleTambahLayer={() => handleTambahLayer(item)}
              thumbnailSource={buatThumbnailUrl(item)}
              isActive={isActive}
              setIsActive={setIsActive}
              item={item}
              key={index}
            />
          ))
        )}
        <div className='p-3 w-full flex justify-center gap-5'>
          <button
            onClick={() => {
              if (page !== 1) {
                getSimpulList(page - 1);
                setPage(page - 1);
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
              translatedText("from") +
              " " +
              (totalData || "-")}
          </p>
          <button
            onClick={() => {
              if (page !== Math.trunc(totalData / 10) + 1) {
                getSimpulList(page + 1);
                setPage(page + 1);
              }
            }}
          >
            <img src='/images/ic-arrow-r.svg' alt='next button' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetWorkNodeResult;
