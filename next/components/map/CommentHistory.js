import React, { useEffect, useState, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import AppContext from "../../context/AppContext";
import ImageCarousel from "./popup/ImageCarousel";

const CommentHistory = () => {
  const { t } = useTranslation("komentar");
  const observerRef = useRef(null);
  const rootObserver = useRef(null);
  const observer = useRef(null);
  const { handleSetSnack, isAuth, authToken } = useContext(AppContext);
  const [commentList, setCommentList] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);

  useEffect(async () => {
    try {
      setLoad(true);
      const res = await fetch("/api/user/komentar?page=" + page, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + authToken,
        },
      });
      const result = await res.json();
      if (res.status === 200) {
        if (result.length === 0) {
          observer.current.unobserve(observerRef.current);
        } else {
          setCommentList((prev) => [...prev, ...result]);
        }
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    } finally {
      setLoad(false);
    }
  }, [page, authToken]);

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
      data-cy='comment-feature-comment-history-tab'
      className={`py-5 flex flex-col gap-2 w-full ${
        commentList.length > 0
          ? "divide-y divide-gray-400 divide-opacity-60"
          : ""
      }`}
      ref={rootObserver}
    >
      {commentList.length > 0 ? (
        commentList.map((el, index) => (
          <div className='flex flex-col gap-2 text-main-gray pt-3' key={index}>
            <div className='flex items-center gap-2'>
              <p className='font-semibold text-xs'>
                {t("modalTitle") + " " + t(el.jenis)}
              </p>
              <div className='w-1 h-1 rounded-full bg-main-gray' />
              <p
                className={`${
                  el.status === "menunggu"
                    ? "bg-[#FFCE1E]"
                    : el.status === "diterima"
                    ? "bg-[#A4D21C]"
                    : el.status === "ditolak"
                    ? "bg-[#B33A2A]"
                    : "bg-[#ebd037]"
                } text-xs px-3 py-1 text-white w-[fit-content] rounded-lg`}
              >
                {t(el.status)}
              </p>
            </div>
            {/* <div className='relative h-24 w-full'>
              <Image
                src='/images/bg-hero-section1.jpg'
                alt='dummy images'
                layout='fill'
                objectFit='cover'
                className='rounded-xl'
              />
            </div> */}
            {el.gambar1 !== null ||
            el.gambar2 !== null ||
            el.gambar3 !== null ? (
              <ImageCarousel
                imageList={[
                  el.gambar1 ? el.gambar1 + "&access_token=" + authToken : null,
                  el.gambar2 ? el.gambar2 + "&access_token=" + authToken : null,
                  el.gambar3 ? el.gambar3 + "&access_token=" + authToken : null,
                ]}
              />
            ) : null}
            <p className='text-xs'>{el.isi || "-"}</p>
            <p className='text-xs text-gray-400'>
              {new Date(el.date_created).toLocaleDateString(t("dateLocales"), {
                year: "numeric",
                month: "long",
                day: "numeric",
              }) || "-"}
            </p>
          </div>
        ))
      ) : (
        <div className='flex flex-col items-center justify-center w-full'>
          <img
            src='/images/ic-empty-state.svg'
            alt='icon empty state'
            className='h-20'
          />
          <p className='text-main-gray'>{t("historyEmptyState")}</p>
        </div>
      )}
      <div
        ref={observerRef}
        className='relative w-full flex justify-center h-10'
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

export default CommentHistory;
