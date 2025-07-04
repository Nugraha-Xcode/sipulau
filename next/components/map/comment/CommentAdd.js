import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import MapContext from "../../../context/MapContext";
import AddCommentForm from "../popup/AddCommentForm";
import AppContext from "../../../context/AppContext";
import { useComment } from "../../../hooks";
import shallow from "zustand/shallow";
import { titikPulauMvt } from "../../../constant";

const CommentAdd = () => {
  const { t } = useTranslation("komentar");
  const [type, setType, coor, setCoor, setSelectedId] = useComment(
    (state) => [
      state.type,
      state.setType,
      state.coor,
      state.setCoor,
      state.setSelectedId,
    ],
    shallow
  );
  const { toggleLogin, isAuth } = useContext(AppContext);
  const { map } = useContext(MapContext);

  const comment = {
    titik: {
      text1: "commentPointmssg1",
      text2: "commentPointmssg2",
      imgSrc: "images/ph-comment-titik.jpg",
    },
    pulau: {
      text1: "commentIslandmssg1",
      text2: "commentIslandmssg2",
      imgSrc: "images/ph-comment-pulau.jpg",
    },
  };

  useEffect(() => {
    if (map && !map.getSource("comment-point")) {
      map.addSource("comment-point", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [],
          },
        },
      });
      map.loadImage("/images/marker-point.png", function (error, image) {
        if (error) throw error;
        map.addImage("marker-comment", image);
      });
      map.addLayer({
        id: "comment-point",
        type: "symbol",
        source: "comment-point",
        layout: {
          "icon-image": "marker-comment",
          "icon-size": 0.2,
        },
      });
    }

    return () => {
      if (map && window.location.pathname === "/map") {
        map.hasImage("marker-comment") && map.removeImage("marker-comment");
        map.getLayer("comment-point") && map.removeLayer("comment-point");
        map.getSource("comment-point") && map.removeSource("comment-point");
      }
    };
  }, [map]);

  useEffect(() => {
    const handleTitik = (e) => {
      map.getSource("comment-point").setData({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [e.lngLat.lng, e.lngLat.lat],
        },
      });
      setCoor(e.lngLat);
    };
    const handlePulau = (e) => {
      setSelectedId(e.features[0].id);
      setCoor({
        lng: e.features[0].geometry.coordinates[0],
        lat: e.features[0].geometry.coordinates[1],
      });
    };
    if (type === "titik") {
      map.on("click", handleTitik);
    } else if (type === "pulau") {
      map.on("click", titikPulauMvt, handlePulau);
    }
    return () => {
      if (type === "titik") {
        map.getCanvas().style.cursor = "";
        map.on("mouseleave", titikPulauMvt, function () {
          map.getCanvas().style.cursor = "";
        });
        map.off("click", handleTitik);
      } else if (type === "pulau") {
        map.off("click", titikPulauMvt, handlePulau);
      }
    };
  }, [type]);

  useEffect(() => {
    //cleanup
    return () => {
      setType(null);
      setCoor({});
      setSelectedId(null);
    };
  }, []);

  const handleCancelAddComment = () => {
    map.getSource("comment-point").setData({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [],
      },
    });
    map.getCanvas().style.cursor = "";
    map.on("mouseleave", titikPulauMvt, function () {
      map.getCanvas().style.cursor = "";
    });
    setType(null);
    setCoor({});
  };

  return (
    <div data-cy='comment-feature-add-comment-tab' className='w-full'>
      {!type ? (
        <div>
          <div className='p-3 flex flex-col items-center justify-center text-center gap-2'>
            <img src='/images/ic-empty-state.svg' alt='icon empty state' />
            <p className='text-sm font-semibold text-black-2'>
              {t("addComment")}
            </p>
            <p className='text-xs text-main-gray'>{t("messageCommentEmpty")}</p>
          </div>
          <div className='space-y-2'>
            <button
              data-cy='comment-feature-point-comment-button'
              onClick={() => {
                if (isAuth) {
                  map.getCanvas().style.cursor = "crosshair";
                  map.on("mouseleave", titikPulauMvt, function () {
                    map.getCanvas().style.cursor = "crosshair";
                  });
                  setType("titik");
                } else {
                  toggleLogin();
                }
              }}
              className='bg-white text-main-blue border border-main-blue text-sm w-full rounded-lg py-2'
            >
              {t("pointCommentButton")}
            </button>
            <div className='flex items-center'>
              <hr className='flex-1' />
              <p className='mx-3 text-xs text-gray-400'>{t("or")}</p>
              <hr className='flex-1' />
            </div>
            <button
              data-cy='comment-feature-island-comment-button'
              onClick={() => {
                if (isAuth) {
                  setType("pulau");
                } else {
                  toggleLogin();
                }
              }}
              className='bg-white text-main-blue border border-main-blue text-sm w-full rounded-lg py-2'
            >
              {t("commentButtonIsland")}
            </button>
          </div>
        </div>
      ) : Object.keys(coor).length === 0 ? (
        <div data-cy='comment-feature-add-comment'>
          <div className='p-3 flex flex-col items-center justify-center text-center gap-2'>
            <img
              src={comment[type].imgSrc}
              alt='icon empty state'
              className='w-2/3'
            />
            <p className='text-sm font-semibold text-black-2'>
              {t(comment[type].text1)}
            </p>
            <p className='text-xs text-main-gray'>{t(comment[type].text2)}</p>
          </div>
          <button
            data-cy='comment-feature-cancel-comment'
            onClick={handleCancelAddComment}
            className='border border-main-blue text-main-blue w-full rounded-lg py-2'
          >
            {t("downButtonCmmnt")}
          </button>
        </div>
      ) : null}
      {Object.keys(coor).length !== 0 && (
        <AddCommentForm onClose={handleCancelAddComment} />
      )}
    </div>
  );
};

export default CommentAdd;
