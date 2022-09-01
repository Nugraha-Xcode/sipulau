import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import MapContext from "../../context/MapContext";
import AppContext from "../../context/AppContext";
import Skeleton from "../core/Skeleton";

const BasemapFeature = () => {
  const { map, fetchRBIStyle, setRefreshLayer } = useContext(MapContext);
  const { handleSetSnack } = useContext(AppContext);

  const [basemapItems, setBasemapItems] = useState([
    {
      label: "Rupabumi Indonesia",
      imgSrc: "/images/thumbnail-rupabumi.jpg",
      url: "",
    },
  ]);
  const [load, setLoad] = useState(false);
  const router = useRouter();

  useEffect(async () => {
    try {
      setLoad(true);
      const res = await fetch("/api/basemap", {
        method: "GET",
      });
      const resData = await res.json();
      if (router.locale === "en") {
        let items = resData.map((el) => ({
          label: el.label_eng,
          imgSrc: el.thumb_url,
          url: el.tile_url,
        }));
        setBasemapItems((prev) => [...prev, ...items]);
      } else {
        let items = resData.map((el) => ({
          label: el.label_idn,
          imgSrc: el.thumb_url,
          url: el.tile_url,
        }));
        setBasemapItems((prev) => [...prev, ...items]);
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    } finally {
      setLoad(false);
    }
  }, []);

  return (
    <div className='flex flex-col gap-3  max-h-[400px] overflow-y-scroll hide-scrollbar'>
      {load
        ? [1, 2, 3, 4, 5].map((el) => (
            <div
              key={el}
              className='flex gap-3 items-center'
              data-cy='basemap-feature-load'
            >
              <Skeleton style='w-16 h-8' shape='bar' />
              <Skeleton style='w-1/2 h-3' shape='bar' />
            </div>
          ))
        : basemapItems.map((el, index) => (
            <div
              data-cy='basemap-feature-list'
              key={el.label}
              className='flex items-center gap-3 cursor-pointer hover:bg-blue-2 rounded-md'
              onClick={
                el.label === "Rupabumi Indonesia"
                  ? async () => {
                      const rbiStyle = await fetchRBIStyle();
                      await map.setStyle(rbiStyle);
                      setTimeout(() => {
                        setRefreshLayer((prev) => !prev);
                      }, 500);
                    }
                  : async () => {
                      await map.setStyle(
                        {
                          version: 8,
                          sources: {
                            "raster-tiles": {
                              type: "raster",
                              tiles: [el.url],
                              tileSize: 256,
                              // attribution:
                              //   'Map tiles by <a target="_top" rel="noopener" href="http://stamen.com">Stamen Design</a>, under <a target="_top" rel="noopener" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>, under <a target="_top" rel="noopener" href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>',
                            },
                          },
                          layers: [
                            {
                              id: el.label,
                              type: "raster",
                              source: "raster-tiles",
                              minzoom: 0,
                              maxzoom: 22,
                            },
                          ],
                        }
                        // "https://api.maptiler.com/maps/topo/style.json?key=D7JUUxLv3oK21JM9jscD"
                      );

                      setTimeout(() => {
                        setRefreshLayer((prev) => !prev);
                      }, 500);
                    }
              }
            >
              <img
                src={el.imgSrc}
                alt={el.label}
                className='w-16 h-8 rounded-[4px] text-gray-800'
              />
              <p className='text-xs text-gray-800'>{el.label}</p>
            </div>
          ))}
    </div>
  );
};

export default BasemapFeature;
