import { useContext, useState, useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";
import AppContext from "../../../context/AppContext";
import PopupContext from "../../../context/PopupContext";
import ImageCarousel from "./ImageCarousel";

const CommentList = () => {
  const observerRef = useRef(null);
  const rootObserver = useRef(null);
  const observer = useRef(null);
  const { handleSetSnack } = useContext(AppContext);
  const { infoPulau } = useContext(PopupContext);
  const [commentPulau, setCommentPulau] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);

  useEffect(async () => {
    try {
      setLoad(true);
      const response = await fetch(
        "/api/titik-pulau/" + infoPulau.id_toponim + "/komentar?page=" + page,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (response.status === 200) {
        if (result.length === 0) {
          observer.current.unobserve(observerRef.current);
        } else {
          setCommentPulau((prev) => [...prev, ...result]);
        }
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    } finally {
      setLoad(false);
    }
  }, [infoPulau, page]);

  useEffect(() => {
    if (observerRef.current) {
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setPage((prev) => prev + 1);
          }
        },
        {
          root: rootObserver.current,
          threshold: 0,
        }
      );
      observer.current.observe(observerRef.current);
    }
    return () => {
      if (observer.current && observerRef.current) {
        observer.current.unobserve(observerRef.current);
      }
    };
  }, [observerRef.current]);

  return (
    <div
      className='p-4 space-y-2 divide-y-2 overflow-y-scroll max-h-[30rem]'
      ref={rootObserver}
    >
      {commentPulau.length > 0 ? (
        commentPulau.map((el, index) => (
          <div className='flex flex-col gap-1 pt-2 text-main-gray' key={index}>
            <p className='font-semibold text-sm'>{el.user_created}</p>
            {el.gambar1 !== null ||
            el.gambar2 !== null ||
            el.gambar3 !== null ? (
              <ImageCarousel imageList={[el.gambar1, el.gambar2, el.gambar3]} />
            ) : null}
            <p className='text-xs'>{el.isi || "-"}</p>
            <p className='text-[10px]'>
              {new Date(el.date_created).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }) || "-"}
            </p>
          </div>
        ))
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <img
            src='/images/ic-empty-state.svg'
            alt='icon empty state'
            className='h-20'
          />
          <p className='text-main-gray'>Tidak ada komentar</p>
        </div>
      )}
      <div
        ref={observerRef}
        className='relative w-full flex justify-center h-2'
      >
        {load ? (
          <img
            src='/images/loader.svg'
            alt='loader'
            className='absolute w-10 h-10'
          />
        ) : null}
      </div>
    </div>
  );
};

export default CommentList;
