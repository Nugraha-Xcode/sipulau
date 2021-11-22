import React, { useContext, useEffect, useRef, useCallback } from "react";
import maplibregl from "maplibre-gl";
import MapContext from "../../context/MapContext";
import Checkbox from "../core/Checkbox";

const DownloadFeature = ({
  setDrawItem,
  drawItem,
  drawSelected,
  setDrawSelected,
}) => {
  const { map, draw } = useContext(MapContext);
  const polygonRef = useRef(null);
  useEffect(() => {
    polygonRef.current.addEventListener("click", () => {
      draw.changeMode("draw_polygon");
    });

    const handleCreate = (e) => {
      setDrawItem((prev) => {
        return [
          ...prev,
          { id: e.features[0].id, geometry: e.features[0].geometry },
        ];
      });
    };

    map.on("draw.create", handleCreate);
    // map.on("draw.delete", (e) => {
    //   console.log(e);
    // });
    const handleUpdate = (e) => {
      if (drawSelected.findIndex((el) => el.id === e.features[0].id) !== -1) {
        setDrawSelected((prev) => {
          let a = [...prev];
          a[a.findIndex((el) => el.id === e.features[0].id)] = {
            id: e.features[0].id,
            geometry: e.features[0].geometry,
          };
          return a;
        });
      }
      setDrawItem((prev) => {
        let a = [...prev];
        a[a.findIndex((el) => el.id === e.features[0].id)] = {
          id: e.features[0].id,
          geometry: e.features[0].geometry,
        };
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
  }, []);

  return (
    <div className='flex flex-col gap-3'>
      <div className='space-y-2'>
        <p>Area of Interest:</p>
        <div className='space-x-2'>
          <button className='border rounded-sm p-1'>
            <img
              src='/images/ic-shape-3.svg'
              alt='icon shape'
              className='w-4 h-4'
            />
          </button>
          <button className='border rounded-sm p-1'>
            <img
              src='/images/ic-shape-2.svg'
              alt='icon shape'
              className='w-4 h-4'
            />
          </button>
          <button className='border rounded-sm p-1' ref={polygonRef}>
            <img
              src='/images/ic-shape-1.svg'
              alt='icon shape'
              className='w-4 h-4'
            />
          </button>
          <button className='border rounded-sm p-1'>
            <img
              src='/images/ic-shape-4.svg'
              alt='icon shape'
              className='w-4 h-4'
            />
          </button>
        </div>
        <div className='flex flex-col gap-3 border rounded-lg p-2'>
          <p>Daftar Area of Interest :</p>
          <div className='flex flex-col gap-2'>
            {drawItem.length > 0
              ? drawItem.map((el, index) => (
                  <div className='flex' key={el.id}>
                    {/* <Checkbox value={el.geometry.type} /> */}
                    <label className='flex items-center gap-2 container'>
                      <input
                        type='checkbox'
                        checked={
                          drawSelected.findIndex(
                            (item) => item.id === el.id
                          ) !== -1
                            ? true
                            : false
                        }
                        onChange={() => {
                          drawSelected.findIndex(
                            (item) => item.id === el.id
                          ) !== -1
                            ? setDrawSelected((prev) => {
                                let a = [...prev];
                                a.splice(
                                  [
                                    drawSelected.findIndex(
                                      (item) => item.id === el.id
                                    ),
                                  ],
                                  1
                                );
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
                        }}
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
              : null}
            {/* <div className='flex'>
              <Checkbox value='freehand polygon 1' />
              <button>
                <img src='/images/ic-trash.svg' />
              </button>
            </div>
            <div className='flex'>
              <Checkbox value='rectangle 1' />
              <button>
                <img src='/images/ic-trash.svg' />
              </button>
            </div> */}
          </div>
        </div>
        {/* <div className='flex flex-col items-center justify-center gap-3 border border-dashed rounded-lg p-2 h-24'>
          <p>Belum Terdapat Area of Interest </p>
        </div> */}
      </div>
    </div>
  );
};

export default DownloadFeature;
