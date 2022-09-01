import { useState, useEffect } from "react";

const MapTrackPointer = ({ map }) => {
  const [coordinatPointer, setCoordinatPointer] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const handleCoordinate = (e) => {
      setCoordinatPointer(e.lngLat);
    };
    map.on("mousemove", handleCoordinate);

    return () => {
      map.off("mousemove", handleCoordinate);
    };
  }, []);

  let date = new Date();

  return (
    <div className='absolute bottom-0 right-0 z-0 flex items-center gap-2 text-xxs text-gray-700'>
      <pre className='text-gray-700 text-[10px] py-2'>
        {coordinatPointer.lat.toString()} {coordinatPointer.lng.toString()}
      </pre>
      {/* <img src='/images/row.svg' /> */}
      <p className='text-black-2 text-[10px] bg-white bg-opacity-80 p-2 rounded-tl-[4px]'>
        {`©${date.getFullYear()} Developed by Braga Technologies`}
      </p>
    </div>
  );
};

export default MapTrackPointer;
