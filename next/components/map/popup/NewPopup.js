import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

const NewPopup = ({
  layername,
  setFeatureId,
  setFeatureGeom,
  children,
  map,
  mapLoad,
}) => {
  const contentRef = useRef(null);

  useEffect(() => {
    let popup = { remove: () => {} };
    if (mapLoad)
      try {
        map.on("click", layername, function (e) {
          popup = new maplibregl.Popup({ closeButton: false })
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
    return popup.remove;
  }, [mapLoad]);

  return (
    <div className='hidden'>
      <div ref={contentRef} className='font-map'>
        {children}
      </div>
    </div>
  );
};

export default NewPopup;
