// import { Transition } from "@headlessui/react";
import React, { useState, useContext, useEffect, useCallback } from "react";
import shallow from "zustand/shallow";
import { UploadLayerStore } from "../../../constant";
import MapContext from "../../../context/MapContext";
import { useIndexedDB, useNetwork } from "../../../hooks";
// import IcAccordion from "../../core/icons/icAccordion";

// import IcEye from "../../core/icons/IcEye";
import CustomTransition from "../sidebar-content/core/CustomTransition";
import OpacityController from "./OpacityController";

const LayerManagementItem = ({ item, index }) => {
  const { map } = useContext(MapContext);

  const [isShowOpacity, setIsShowOpacity] = React.useState(false);
  const [layerVisibility, setLayerVisibility] = useState(true);

  useEffect(() => {
    if (
      map.getLayoutProperty(item.judul + item.nama, "visibility") === "none"
    ) {
      setLayerVisibility(false);
    } else {
      setLayerVisibility(true);
    }
  }, [item]);

  const [setDb, db] = useIndexedDB((state) => [state.setDb, state.db], shallow);

  const [activeLayer, setActiveLayer, activeLegend, setActiveLegend] =
    useNetwork(
      (state) => [
        state.activeLayer,
        state.setActiveLayer,
        state.activeLegend,
        state.setActiveLegend,
      ],
      shallow
    );

  useEffect(() => {
    map.getLayer(item.judul + item.nama) &&
      map.setLayoutProperty(
        item.judul + item.nama,
        "visibility",
        layerVisibility ? "visible" : "none"
      );
  }, [layerVisibility, item]);

  const handleLayerDown = useCallback(() => {
    setIsShowOpacity(false);
    if (index !== 0) {
      map.moveLayer(
        activeLayer[index].judul + activeLayer[index].nama,
        activeLayer[index - 1].judul + activeLayer[index - 1].nama
      );
      let prevArr = [...activeLayer];
      prevArr.splice(index, 1);
      prevArr.splice(index - 1, 0, item);
      setActiveLayer(prevArr);
    }
  }, [index, activeLayer]);

  const handleLayerUp = useCallback(() => {
    setIsShowOpacity(false);
    if (index !== activeLayer.length - 1) {
      map.moveLayer(
        activeLayer[index + 1].judul + activeLayer[index + 1].nama,
        activeLayer[index].judul + activeLayer[index].nama
      );
      let prevArr = [...activeLayer];
      prevArr.splice(index, 1);
      prevArr.splice(index + 1, 0, item);
      setActiveLayer(prevArr);
    }
  }, [index, activeLayer]);

  const handleRemoveLayer = useCallback(() => {
    setIsShowOpacity(false);
    if (item.source === "simpul") {
      map.removeLayer(item.judul + item.nama);
      map.removeSource(item.judul + item.nama);
      setActiveLayer(
        activeLayer.filter(
          (el) => el.nama !== item.nama && el.judul !== item.judul
        )
      );
    } else if (item.source === "upload") {
      const txn = db.transaction(UploadLayerStore, "readwrite");

      const store = txn.objectStore(UploadLayerStore);
      //
      let query = store.delete(item.judul + item.nama);

      query.onsuccess = function (event) {
        map.removeLayer(item.judul + item.nama);
        map.removeSource(item.judul + item.nama);
        setActiveLayer(
          activeLayer.filter(
            (el) => el.nama !== item.nama && el.judul !== item.judul
          )
        );
      };

      query.onerror = function (event) {
        console.log(event.target.errorCode);
      };
    }
    // if (
    //   activeLayer[activeLayer.findIndex((el) => el.simpul === item.simpul)]
    //     .layer.length === 1
    // ) {
    //   setActiveLayer(activeLayer.filter((el) => el.simpul !== item.simpul));
    // } else {
    //   setActiveLayer((prev) => {
    //     let newArr = [...prev];
    //     let filter = newArr[
    //       activeLayer.findIndex((el) => el.simpul === item.simpul)
    //     ].layer.filter(
    //       (el) => el.judul !== item.judul && el.nama !== item.nama
    //     );
    //     newArr[activeLayer.findIndex((el) => el.simpul === item.simpul)].layer =
    //       filter;
    //     return newArr;
    //   });
    // }

    let prevArrLegend = [...activeLegend];
    setActiveLegend(
      prevArrLegend.filter((el) => el.id !== item.judul + item.nama)
    );
  }, [activeLayer, map, item, activeLegend]);

  return (
    <div className='flex flex-col border-[1px] w-full h-[fit-content] relative pl-5 pr-3 py-3 rounded-[4px] shadow-style-1 gap-3'>
      <div className='flex justify-between w-full h-full relative cursor-pointer gap-2'>
        <div className='absolute w-[5px] rounded-xl h-full top-0 -left-3 bottom-0 m-auto bg-[#FFCE1E]' />

        <div
          className='flex flex-col overflow-hidden'
          onClick={() => {
            setIsShowOpacity((prevState) => !prevState);
          }}
        >
          <div className='font-semibold text-xs truncate'>{item.judul}</div>
          <div className='text-gray-3 text-[10px]'>{item.simpul}</div>
        </div>

        <div className='flex gap-2 h-full items-center w-10 min-w-10'>
          <button onClick={() => setLayerVisibility((prev) => !prev)}>
            <img
              src={`${
                layerVisibility
                  ? "/images/ic-eye.svg"
                  : "/images/ic-eye-crossed.svg"
              }`}
              alt='icon'
              className='w-4 h-4'
            />
          </button>

          <button onClick={handleLayerUp}>
            <img
              src='/images/ic-arrow-reg.svg'
              alt='icon'
              className='w-3 h-3'
            />
          </button>

          <button onClick={handleLayerDown}>
            <img
              src='/images/ic-arrow-reg.svg'
              alt='icon'
              className='w-3 h-3 rotate-180'
            />
          </button>
        </div>
      </div>
      {/* open OpacityController component for manage the logic and API implementation */}
      <CustomTransition show={isShowOpacity} variant='fade-down'>
        <OpacityController handleDelete={handleRemoveLayer} item={item} />
      </CustomTransition>
    </div>
  );
};

export default LayerManagementItem;
