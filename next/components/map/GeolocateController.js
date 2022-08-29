import Tippy from "@tippyjs/react";

const GeolocateController = ({ map }) => {
  return (
    <div
      className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-white text-gray-600 hover:bg-gray-50 hover:text-brand-400'
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
      <Tippy content='Geolocate' placement='right' delay={300}>
        <img src='/images/ic-location.svg' alt='icon' className='w-4 h-4' />
      </Tippy>
    </div>
  );
};

export default GeolocateController;
