import { useTranslation } from "next-i18next";
import React, { useCallback, useContext, useEffect } from "react";
import shallow from "zustand/shallow";
import MapContext from "../../../context/MapContext";
import { useDrawAoi, useNav, useTable } from "../../../hooks";
import MemoIcCursor from "../../core/icons/IcCursor";

const SelectAoi = () => {
  const { t } = useTranslation("attributetable");
  const { queryFilter, draw, map } = useContext(MapContext);
  const [deleteDataTable, setPage] = useTable(
    (state) => [state.deleteDataTable, state.setPage],
    shallow
  );

  const [setActiveSideFeature, setExpandSideNav] = useNav(
    (state) => [state.setActiveSideFeature, state.setExpandSideNav],
    shallow
  );
  const [isDrawAoi, setIsDrawAoi, aoiPoly, setAoiPoly] = useDrawAoi(
    (state) => [
      state.isDrawAoi,
      state.setIsDrawAoi,
      state.aoiPoly,
      state.setAoiPoly,
    ],
    shallow
  );

  useEffect(() => {
    const handleCreate = (e) => {
      setAoiPoly(e.features[0]);
      setIsDrawAoi(false);
      setPage(1);
      deleteDataTable();
    };
    if (map) {
      map.on("draw.create", handleCreate);
    }

    return () => {
      if (map) {
        map.off("draw.create", handleCreate);
      }
    };
  }, [map]);

  const handleStartDraw = useCallback(() => {
    if (isDrawAoi) {
      setIsDrawAoi(false);
      draw.trash();
    } else {
      setActiveSideFeature(null);
      setExpandSideNav(false);
      if (aoiPoly) {
        draw.delete(aoiPoly.id);
      }
      setIsDrawAoi(true);
      draw.changeMode("draw_polygon");
    }
  }, [draw, isDrawAoi, aoiPoly]);

  return (
    <button
      onClick={handleStartDraw}
      className={`flex items-center gap-2 border-2 py-2 px-5 rounded-lg h-10 ${
        isDrawAoi
          ? "bg-blue-50 border-blue-500 text-blue-500"
          : "border-gray-300 text-gray-900"
      }`}
    >
      <MemoIcCursor />
      <p className='text-xs'>{t("selectAoi")}</p>
    </button>
  );
};

export default SelectAoi;
