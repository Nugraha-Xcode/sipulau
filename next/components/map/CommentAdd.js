import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import MapContext from "../../context/MapContext";
import Modal from "../modal";
import AddComment from "./popup/AddComment";
import useToggle from "../../utils/useToggle";
import AppContext from "../../context/AppContext";

const CommentAdd = () => {
  const { t } = useTranslation("komentar");
  const { toggleLogin, isAuth } = useContext(AppContext);
  const { map } = useContext(MapContext);
  const [type, setType] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const [coor, setCoor] = useState({});
  const [isAddComment, openAddComment] = useToggle();

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
    const handleTitik = (e) => {
      setCoor(e.lngLat);
      openAddComment();
    };
    const handlePulau = (e) => {
      setSelectedId(e.features[0].id);
      setCoor(e.lngLat);
      openAddComment();
    };
    if (type === "titik") {
      map.on("click", handleTitik);
    } else if (type === "pulau") {
      map.on("click", "titikPulauMvt", handlePulau);
    }
    return () => {
      if (type === "titik") {
        map.off("click", handleTitik);
      } else if (type === "pulau") {
        map.off("click", "titikPulauMvt", handlePulau);
      }
    };
  }, [type]);

  return (
    <div data-cy='comment-feature-add-comment-tab'>
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
                  map.on("mouseleave", "titikPulauMvt", function () {
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
      ) : (
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
            onClick={() => {
              map.getCanvas().style.cursor = "";
              map.on("mouseleave", "titikPulauMvt", function () {
                map.getCanvas().style.cursor = "";
              });
              setType(null);
            }}
            className='border border-main-blue text-main-blue w-full rounded-lg py-2'
          >
            {t("downButtonCmmnt")}
          </button>
        </div>
      )}
      <Modal isShowing={isAddComment} handleModal={openAddComment} size='lg'>
        <AddComment
          onClose={openAddComment}
          type={type}
          coor={coor}
          selectedId={selectedId}
        />
      </Modal>
    </div>
  );
};

export default CommentAdd;
