import React, { useContext, useState, useEffect } from "react";
import MapContext from "../../context/MapContext";
import Modal from "../modal";
import AddComment from "./popup/AddComment";
import useToggle from "../../utils/useToggle";

const CommentAdd = () => {
  const { map } = useContext(MapContext);
  const [type, setType] = useState(null);
  const [coor, setCoor] = useState({});
  const [isAddComment, openAddComment] = useToggle();

  const comment = {
    titik: {
      text1: "Komentar Tambah Titik",
      text2:
        "Tentukan titik terlebih dahulu, kemudian tambah komentar pada form komentar",
      imgSrc: "images/ph-comment-titik.jpg",
    },
    pulau: {
      text1: "Komentar di Titik Pulau",
      text2:
        "Pilih titik pulau yang sudah ada, kemudian tambahkan komnetar pada titik pulau tersebut.",
      imgSrc: "images/ph-comment-pulau.jpg",
    },
  };

  useEffect(() => {
    map.on("click", (e) => {
      setCoor(e.lngLat);
      openAddComment();
    });
    return () => {
      map.getCanvas().style.cursor = "";
      map.on("mouseleave", "titikPulauMvt", function () {
        map.getCanvas().style.cursor = "";
      });
      setType(null);
    };
  }, []);

  return (
    <div>
      {!type ? (
        <div>
          <div className='p-3 flex flex-col items-center justify-center text-center gap-2'>
            <img src='/images/ic-empty-state.svg' alt='icon empty state' />
            <p className='text-sm font-semibold text-black-2'>
              Tambah Komentar
            </p>
            <p className='text-xs text-main-gray'>
              Anda dapat memberikan komentar dengan menabah titik atau di titik
              pulau yang sudah ada
            </p>
          </div>
          <div className='space-y-2'>
            <button
              onClick={() => {
                map.getCanvas().style.cursor = "pointer";
                map.on("mouseleave", "titikPulauMvt", function () {
                  map.getCanvas().style.cursor = "pointer";
                });
                setType("titik");
              }}
              className='bg-main-blue text-white w-full rounded-lg py-2'
            >
              Komentar dengan Tambah Titik
            </button>
            <div className='flex items-center'>
              <hr className='flex-1' />
              <p className='mx-3 text-xs'>Atau</p>
              <hr className='flex-1' />
            </div>
            <button
              onClick={() => setType("pulau")}
              className='bg-main-blue text-white w-full rounded-lg py-2'
            >
              Komentar di Titik Pulau
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className='p-3 flex flex-col items-center justify-center text-center gap-2'>
            <img
              src={comment[type].imgSrc}
              alt='icon empty state'
              className='w-2/3'
            />
            <p className='text-sm font-semibold text-black-2'>
              {comment[type].text1}
            </p>
            <p className='text-xs text-main-gray'>{comment[type].text2}</p>
          </div>
          <button
            onClick={() => {
              map.getCanvas().style.cursor = "";
              map.on("mouseleave", "titikPulauMvt", function () {
                map.getCanvas().style.cursor = "";
              });
              setType(null);
            }}
            className='border border-main-blue text-main-blue w-full rounded-lg py-2'
          >
            Batal
          </button>
        </div>
      )}
      <Modal isShowing={isAddComment} handleModal={openAddComment} size='lg'>
        <AddComment onClose={openAddComment} type='titik' coor={coor} />
      </Modal>
    </div>
  );
};

export default CommentAdd;
