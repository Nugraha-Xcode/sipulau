import React, { useEffect, useState, useRef, useContext } from "react";
import Image from "next/image";
import AppContext from "../../context/AppContext";
import ImageCarousel from "./popup/ImageCarousel";

const token =
  "Yg4kL4kcxactkH6yYgPZU8ApF2RnhxwhVJaru896tf85YmzZrCGqXsS7vxE5bPwGtQpBxEwQnYwCWjGaNYLFv4rBU8gKc3z94T9TXfDUupffgtDeeDnYPtvvYZqZ8AVB";

const CommentHistory = () => {
  const observerRef = useRef(null);
  const rootObserver = useRef(null);
  const observer = useRef(null);
  const { handleSetSnack } = useContext(AppContext);
  const [commentList, setCommentList] = useState([]);
  console.log(commentList);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);

  useEffect(async () => {
    try {
      setLoad(true);
      const res = await fetch("/api/user/komentar?page=" + page, {
        method: "GET",
        headers: {
          //todo get user token
          Authorization: "Bearer " + token,
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
  }, [page]);

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
      className='py-5 space-y-3 overflow-y-scroll max-h-96 hide-scrollbar'
      ref={rootObserver}
    >
      {commentList.length > 0 ? (
        commentList.map((el, index) => (
          <div className='flex flex-col gap-2 text-main-gray' key={index}>
            <div className='flex items-center gap-2'>
              <p className='font-semibold'>
                Komentar {el.jenis.charAt(0).toUpperCase() + el.jenis.slice(1)}
              </p>
              <div className='w-1 h-1 rounded-full bg-main-gray' />
              <p
                className={`${
                  el.status === "menunggu"
                    ? "bg-main-orange"
                    : el.status === "diterima"
                    ? "bg-main-green"
                    : "bg-main-red"
                } bg-opacity-60 px-2 text-white w-[fit-content] rounded-full`}
              >
                {el.status.charAt(0).toUpperCase() + el.status.slice(1)}
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
                  el.gambar1 ? el.gambar1 + "&access_token=" + token : null,
                  el.gambar2 ? el.gambar2 + "&access_token=" + token : null,
                  el.gambar3 ? el.gambar3 + "&access_token=" + token : null,
                ]}
              />
            ) : null}
            <p>{el.isi || "-"}</p>
            <p>
              {new Date(el.date_created).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }) || "-"}
            </p>
          </div>
        ))
      ) : (
        <div className='flex flex-col items-center justify-center mt-5'>
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

export default CommentHistory;
