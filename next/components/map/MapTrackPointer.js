import { useState, useEffect } from "react";
import proj4 from "proj4";
import { useCrs } from "../../hooks";
import { dateToday } from "../../constant";

const MapTrackPointer = ({ map }) => {
  const crs = useCrs((state) => state.crs);
  const [coordinatPointer, setCoordinatPointer] = useState([0, 0]);

  useEffect(() => {
    const handleCoordinate = (e) => {
      if (crs !== "EPSG:4326") {
        let projected = proj4(crs, [e.lngLat.lng, e.lngLat.lat]);
        setCoordinatPointer(projected);
      } else {
        setCoordinatPointer([e.lngLat.lng, e.lngLat.lat]);
      }
    };
    map.on("mousemove", handleCoordinate);

    return () => {
      map.off("mousemove", handleCoordinate);
    };
  }, [crs]);

  return (
    <div className='absolute bottom-0 right-0 z-0 flex items-center gap-2 text-xxs text-gray-700'>
      <pre className='text-gray-700 text-[10px] py-2'>
        {coordinatPointer[0].toString()} {coordinatPointer[1].toString()}{" "}
        {crs !== "EPSG:3857" ? "degree" : "meter"}
      </pre>
      {/* <img src='/images/row.svg' /> */}
      <p className='text-black-2 text-[10px] bg-white bg-opacity-80 p-2 rounded-tl-[4px]'>
        {`©${dateToday.getFullYear()} Developed by Braga Technologies`}
      </p>
    </div>
  );
};

export default MapTrackPointer;
