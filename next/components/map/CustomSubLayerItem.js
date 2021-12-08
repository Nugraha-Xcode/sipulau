import { useState, useContext, useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import MapContext from "../../context/MapContext";

const CustomSubLayerItem = ({ item, layerIndex, simpulIndex }) => {
  const { t } = useTranslation("sideBarRight");
  const { map, activeLayer, setActiveLayer, setActiveLegend } =
    useContext(MapContext);
  const sliderRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [layerOpacity, setLayerOpacity] = useState(
    map.getLayer(item.judul + item.nama)
      ? map.getPaintProperty(item.judul + item.nama, "raster-opacity") * 100
      : 100
  );
  const [layerVisibility, setLayerVisibility] = useState(
    map.getLayer(item.judul + item.nama)
      ? map.getLayoutProperty(item.judul + item.nama, "visibility") ===
        "visible"
        ? true
        : false
      : true
  );

  useEffect(() => {
    sliderRef.current.addEventListener("input", (e) => {
      map.setPaintProperty(
        item.judul + item.nama,
        "raster-opacity",
        parseInt(e.target.value, 10) / 100
      );
    });
  }, [map, sliderRef.current, item]);

  useEffect(() => {
    map.getLayer(item.judul + item.nama) &&
      map.setLayoutProperty(
        item.judul + item.nama,
        "visibility",
        layerVisibility ? "visible" : "none"
      );
  }, [layerVisibility, item]);

  const handleRemoveLayer = useCallback(() => {
    map.removeLayer(item.judul + item.nama);
    map.removeSource(item.judul + item.nama);
    if (
      activeLayer[activeLayer.findIndex((el) => el.simpul === item.simpul)]
        .layer.length === 1
    ) {
      setActiveLayer(activeLayer.filter((el) => el.simpul !== item.simpul));
    } else {
      setActiveLayer((prev) => {
        let newArr = [...prev];
        let filter = newArr[
          activeLayer.findIndex((el) => el.simpul === item.simpul)
        ].layer.filter(
          (el) => el.judul !== item.judul && el.nama !== item.nama
        );
        newArr[activeLayer.findIndex((el) => el.simpul === item.simpul)].layer =
          filter;
        return newArr;
      });
    }
    setActiveLegend((prev) => {
      let prevArr = [...prev];
      return prevArr.filter((el) => el.id !== item.judul + item.nama);
    });
  }, [activeLayer, map, item]);

  const handleLayerDown = useCallback(() => {
    if (layerIndex === 0) {
      console.log("already bottom");
    } else {
      map.moveLayer(
        activeLayer[simpulIndex].layer[layerIndex - 1].judul +
          activeLayer[simpulIndex].layer[layerIndex - 1].nama,
        item.judul + item.nama
      );
      setActiveLayer((prev) => {
        let prevArr = [...prev];
        prevArr[simpulIndex].layer.splice(layerIndex, 1);
        prevArr[simpulIndex].layer.splice(layerIndex - 1, 0, item);
        return prevArr;
      });
    }
  }, [layerIndex, simpulIndex, activeLayer, map]);

  const handleLayerUp = useCallback(() => {
    if (layerIndex === activeLayer[simpulIndex].layer.length - 1) {
      console.log("already top");
    } else {
      // map.moveLayer(
      //   item.judul + item.nama,
      //   activeLayer[simpulIndex].layer[layerIndex + 1].judul +
      //     activeLayer[simpulIndex].layer[layerIndex + 1].nama
      // );
      setActiveLayer((prev) => {
        let prevArr = [...prev];
        prevArr[simpulIndex].layer.splice(layerIndex, 1);
        prevArr[simpulIndex].layer.splice(layerIndex + 1, 0, item);
        return prevArr;
      });
    }
  }, [layerIndex, simpulIndex, activeLayer, map]);

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-3'>
        <p className='flex-1 truncate text-main-gray text-xs'>{item.judul}</p>
        <div className='flex gap-2'>
          <button
            onClick={() => {
              setLayerVisibility((prev) => !prev);
            }}
          >
            <img
              src={
                layerVisibility
                  ? "/images/ic-eye.svg"
                  : "/images/ic-eye-crossed.svg"
              }
              alt='see icon'
              className='w-4'
            />
          </button>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <img src='/images/ic-dots.svg' alt='dots icon' className='w-4' />
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "max-h-96 mb-2" : "max-h-0"
        } overflow-hidden transition-all duration-500 rounded-md`}
      >
        <div className='bg-blue-2 p-2 flex flex-col gap-3'>
          <button
            onClick={() => {
              map.fitBounds(
                [
                  [item.bbox.split(",")[0], item.bbox.split(",")[1]],
                  [item.bbox.split(",")[2], item.bbox.split(",")[3]],
                ],
                {
                  padding: { top: 100, bottom: 100, left: 100, right: 100 },
                }
              );
            }}
            className='flex gap-2 items-center'
          >
            <img src='/images/ic-arrow-extent.svg' />
            <p className='text-main-gray text-xs'>{t("optionLayer1")}</p>
          </button>
          <button onClick={handleLayerUp} className='flex gap-2 items-center'>
            <img src='/images/ic-arrow-t.svg' />
            <p className='text-main-gray text-xs'>{t("optionLayer2")}</p>
          </button>
          <button onClick={handleLayerDown} className='flex gap-2 items-center'>
            <img src='/images/ic-arrow-b.svg' />
            <p className='text-main-gray text-xs'>{t("optionLayer3")}</p>
          </button>
          <button
            onClick={handleRemoveLayer}
            className='flex gap-2 items-center'
          >
            <img src='/images/ic-trash.svg' />
            <p className='text-main-gray text-xs'>{t("optionLayer4")}</p>
          </button>
          <div className='flex gap-2 items-center'>
            <img src='/images/ic-brightness.svg' />
            <input
              type='range'
              className='flex-1'
              ref={sliderRef}
              min='0'
              max='100'
              value={layerOpacity}
              onChange={(e) => setLayerOpacity(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSubLayerItem;
