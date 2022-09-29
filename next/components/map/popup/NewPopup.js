import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

const NewPopup = ({
  layername,
  setFeatureId,
  setFeatureGeom,
  children,
  map,
  mapLoad,
  title,
}) => {
  const contentRef = useRef(null);
  const popRef = useRef(null);

  useEffect(() => {
    // let popup = { remove: () => {} };
    if (mapLoad)
      try {
        map.on("click", layername, function (e) {
          popRef.current = new maplibregl.Popup({ closeButton: false })
            .setMaxWidth("300px")
            .setLngLat(e.lngLat)
            .setDOMContent(contentRef.current)
            .addTo(map);

          setFeatureId(e.features[0].id);
          setFeatureGeom(e.features[0].geometry);
        });

        map.on("mouseenter", layername, function () {
          map.getCanvas().style.cursor = "pointer";
        });

        map.on("mouseleave", layername, function () {
          map.getCanvas().style.cursor = "";
        });
      } catch (error) {
        console.error(error);
      }
    return () => {
      popRef.current = null;
    };
  }, [mapLoad]);

  return (
    <div className='hidden'>
      <div ref={contentRef} className='font-map'>
        <div className='flex items-center justify-between px-2 pt-2'>
          <p className='text-black-2 font-semibold'>{title}</p>
          <button
            onClick={() => {
              popRef.current && popRef.current.remove();
            }}
          >
            <img src='/images/ic-close.svg' alt='close' />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default NewPopup;
