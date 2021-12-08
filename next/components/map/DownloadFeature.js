import React, {
  useContext,
  useEffect,
  useRef,
  useCallback,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import MapContext from "../../context/MapContext";
import MapTableDownload from "./MapTableDownload";

const DownloadFeature = ({
  setDrawItem,
  drawItem,
  drawSelected,
  setDrawSelected,
}) => {
  const { t } = useTranslation("sideBarRight");
  const { map, draw } = useContext(MapContext);
  const [isDraw, setIsDraw] = useState(false);
  const [isSelection, setSelection] = useState([]);
  const polygonRef = useRef(null);

  useEffect(() => {
    // polygonRef.current.addEventListener("click", () => {
    //   draw.changeMode("draw_polygon");
    // });

    const handleCreate = (e) => {
      setDrawItem((prev) => {
        return [...prev, e.features[0]];
      });
      setDrawSelected((prev) => {
        return [...prev, e.features[0]];
      });
      setIsDraw(false);
    };

    map.on("draw.create", handleCreate);
    map.on("draw.selectionchange", (e) => {
      setSelection(e.features);
    });

    const handleUpdate = (e) => {
      if (drawSelected.findIndex((el) => el.id === e.features[0].id) !== -1) {
        setDrawSelected((prev) => {
          let a = [...prev];
          a[a.findIndex((el) => el.id === e.features[0].id)] = e.features[0];
          return a;
        });
      }
      setDrawItem((prev) => {
        let a = [...prev];
        a[a.findIndex((el) => el.id === e.features[0].id)] = e.features[0];
        return a;
      });
    };
    map.on("draw.update", handleUpdate);

    return () => {
      map.off("draw.create", handleCreate);
      map.off("draw.update", handleUpdate);
    };
  }, [drawSelected]);

  const handleDelete = useCallback((id) => {
    draw.delete(id);
    setDrawItem((prev) => {
      let a = [...prev];
      return [...a.filter((el) => el.id !== id)];
    });
    setDrawSelected((prev) => {
      let a = [...prev];
      return [...a.filter((el) => el.id !== id)];
    });
  }, []);

  const handleStartDraw = useCallback(() => {
    if (isDraw) {
      setIsDraw(false);
      draw.trash();
    } else {
      setIsDraw(true);
      draw.changeMode("draw_polygon");
    }
  }, [isDraw]);

  const handleCheck = useCallback(
    (el) => {
      drawSelected.findIndex((item) => item.id === el.id) !== -1
        ? setDrawSelected((prev) => {
            let a = [...prev];
            a.splice([drawSelected.findIndex((item) => item.id === el.id)], 1);
            return a;
          })
        : setDrawSelected((prev) => {
            return [
              ...prev,
              {
                id: el.id,
                geometry: el.geometry,
              },
            ];
          });
    },
    [drawSelected]
  );

  return (
    <div className='flex flex-col gap-3'>
      <div>
        <div className='space-y-2 mb-3'>
          <p className='text-xs text-black-2'>{t("aoi")}:</p>
          <div className='space-x-2'>
            <button
              onClick={handleStartDraw}
              className={`p-1 ${
                isDraw
                  ? "bg-white border border-main-blue text-main-blue"
                  : "bg-main-blue text-white"
              } w-full  text-sm rounded-lg py-2`}
              ref={polygonRef}
            >
              <p>{isDraw ? t("cancelSelector") : t("addSelector")}</p>
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-3 border rounded-lg p-2'>
          <p className='text-xs text-black-2'>{t("listAoi")} :</p>
          <div className='flex flex-col gap-2'>
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
                        drawSelected.findIndex((item) => item.id === el.id) !==
                        -1
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
              <div className='flex items-center justify-center h-16 border rounded-lg border-dashed'>
                <p className='text-xs text-main-gray'>{t("emptyState")}</p>
              </div>
            )}
          </div>
        </div>
        <MapTableDownload source='from-aoi' drawItem={drawSelected} />
      </div>
    </div>
  );
};

export default DownloadFeature;
