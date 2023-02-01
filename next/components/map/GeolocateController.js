import Tippy from "@tippyjs/react";
import { useTranslation } from "next-i18next";

const GeolocateController = ({ map }) => {
  const { t } = useTranslation();
  const translatedText = (key) => {
    const params = { ns: ["map"] };
    return t(key, params);
  };
  return (
    <div
      className='flex h-10 w-10 mt-2 cursor-pointer items-center justify-center rounded-[4px] bg-white text-gray-600 hover:bg-gray-50 hover:text-brand-400'
      onClick={() => {
        navigator.geolocation.getCurrentPosition((position) => {
          if (!map.getSource("geolocate-points"))
            map.addSource("geolocate-points", {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [
                        position.coords.longitude,
                        position.coords.latitude,
                      ],
                    },
                  },
                ],
              },
            });
          map.addLayer({
            id: "geolocate-points",
            type: "symbol",
            source: "geolocate-points",
            layout: {
              "icon-image": "pulsing-dot",
            },
          });
          map.flyTo({
            center: [position.coords.longitude, position.coords.latitude],
            zoom: 20,
          });
        });
      }}
    >
      <Tippy
        content={translatedText("geolocate")}
        placement='right'
        delay={300}
      >
        <img src='/images/ic-location.svg' alt='icon' className='w-4 h-4' />
      </Tippy>
    </div>
  );
};

export default GeolocateController;
