import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { useTranslation } from "react-i18next";
import shallow from "zustand/shallow";
import MapContext from "../../../context/MapContext";
import { useDownloadAoi, useDrawAoi } from "../../../hooks";

const AreaInterest = () => {
  const { t } = useTranslation();
  const translatedText = (key) => {
    const params = { ns: ["sideBarRight", "map"] };
    return t(key, params);
  };
  const [drawItem, drawSelected, setDrawItem, setDrawSelected] = useDownloadAoi(
    (state) => [
      state.drawItem,
      state.drawSelected,
      state.setDrawItem,
      state.setDrawSelected,
    ],
    shallow
  );
  const [setType, type] = useDrawAoi(
    (state) => [state.setType, state.type],
    shallow
  );
  const { map, draw, drawPoly, setDrawPoly } = useContext(MapContext);
  const [isSelection, setSelection] = useState([]);
  const polygonRef = useRef(null);

  useEffect(() => {
    // polygonRef.current.addEventListener("click", () => {
    //   draw.changeMode("draw_polygon");
    // });
    if (type === "download") {
      const handleCreate = (e) => {
        setDrawItem([...drawItem, e.features[0]]);
        setDrawSelected([...drawSelected, e.features[0]]);
        setDrawPoly(false);
      };

      map.on("draw.create", handleCreate);
      map.on("draw.selectionchange", (e) => {
        setSelection(e.features);
      });

      const handleUpdate = (e) => {
        if (drawSelected.findIndex((el) => el.id === e.features[0].id) !== -1) {
          let a = [...drawSelected];
          a[a.findIndex((el) => el.id === e.features[0].id)] = e.features[0];
          setDrawSelected(a);
        }

        let a = [...drawItem];
        a[a.findIndex((el) => el.id === e.features[0].id)] = e.features[0];
        setDrawItem(a);
      };
      map.on("draw.update", handleUpdate);

      return () => {
        map.off("draw.create", handleCreate);
        map.off("draw.update", handleUpdate);
      };
    }
  }, [drawSelected, drawItem, type]);

  const handleDelete = useCallback(
    (id) => {
      draw.delete(id);
      setDrawItem([...drawItem.filter((el) => el.id !== id)]);
      setDrawSelected([...drawSelected.filter((el) => el.id !== id)]);
    },
    [drawItem, drawSelected]
  );

  const handleStartDraw = useCallback(() => {
    if (drawPoly) {
      setDrawPoly(false);
      draw.trash();
    } else {
      setDrawPoly(true);
      draw.changeMode("draw_polygon");
    }
    setType("download");
  }, [drawPoly]);

  const handleCheck = useCallback(
    (el) => {
      if (drawSelected.findIndex((item) => item.id === el.id) !== -1) {
        let a = [...drawSelected];
        a.splice([drawSelected.findIndex((item) => item.id === el.id)], 1);
        setDrawSelected(a);
      } else {
        setDrawSelected([
          ...drawSelected,
          {
            id: el.id,
            geometry: el.geometry,
          },
        ]);
      }
    },
    [drawSelected]
  );

  return (
    <div className='flex flex-col gap-2' s>
      <div className='flex flex-col bg-white rounded-[8px] p-3 text-[#4F4C4A] gap-2'>
        <p className='text-sm'>{translatedText("download.aoiList")}</p>
        {drawItem.length > 0 ? (
          drawItem.map((el, index) => (
            <div
              className={`flex ${
                isSelection.findIndex((elem) => elem.id === el.id) !== -1
                  ? "bg-main-blue/10"
                  : ""
              } p-1 rounded-md`}
              key={el.id}
            >
              <label className='flex items-center gap-2 container text-black-2 text-xs'>
                <input
                  type='checkbox'
                  className='focus:ring-main-blue cursor-pointer text-main-blue rounded-md w-5 h-5'
                  checked={
                    drawSelected.findIndex((item) => item.id === el.id) !== -1
                      ? true
                      : false
                  }
                  onChange={() => handleCheck(el)}
                />
                {el.geometry.type}
              </label>
              <button
                onClick={() => {
                  handleDelete(el.id);
                }}
              >
                <img src='/images/ic-trash.svg' />
              </button>
            </div>
          ))
        ) : (
          <div className='flex justify-center w-full h-full p-5 border-dotted border-[1px] items-center text-center text-sm text-[#B4B2AF]'>
            {translatedText("download.noAoi")}
          </div>
        )}
      </div>
      <button
        data-cy='download-feature-add-aoi-button'
        onClick={handleStartDraw}
        className={`p-1 ${
          drawPoly
            ? "bg-white border border-main-blue text-main-blue"
            : "bg-main-blue text-white"
        } w-full  text-sm rounded-lg py-2`}
        ref={polygonRef}
      >
        <p>
          {drawPoly
            ? translatedText("cancelSelector")
            : translatedText("addSelector")}
        </p>
      </button>
    </div>
  );
};

export default AreaInterest;
