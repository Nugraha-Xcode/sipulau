import React, { useCallback, useState, useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import { uploadFolderIds } from "../../../utils/constant";
import AppContext from "../../../context/AppContext";
import PopupContext from "../../../context/PopupContext";
import { useAuth, useComment } from "../../../hooks";
import shallow from "zustand/shallow";

const AddCommentForm = ({ onClose }) => {
  const { t } = useTranslation("popupPulau");
  const [type, coor, selectedId] = useComment(
    (state) => [state.type, state.coor, state.selectedId],
    shallow
  );
  const { handleSetSnack } = useContext(AppContext);
  const authToken = useAuth((state) => state.authToken);
  const { infoPulau } = useContext(PopupContext);
  const [imgFile, setImgFile] = useState([]);
  const [docFile, setDocFile] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const isiRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = useCallback(
    async (uploadedImgId, uploadedDocId) => {
      try {
        const res = await fetch(
          type === "pulau"
            ? "/api/titik-pulau/" +
                (infoPulau ? infoPulau.id_toponim : selectedId) +
                "/komentar"
            : "/api/komentar-titik",
          {
            method: "POST",
            body: JSON.stringify(
              type === "pulau"
                ? {
                    email: emailRef.current.value,
                    isi: isiRef.current.value,
                    gambar1: uploadedImgId ? uploadedImgId[0] : null,
                    gambar2: uploadedImgId ? uploadedImgId[1] : null,
                    gambar3: uploadedImgId ? uploadedImgId[2] : null,
                    dokumen: uploadedDocId ?? null,
                  }
                : {
                    email: emailRef.current.value,
                    isi: isiRef.current.value,
                    gambar1: uploadedImgId ? uploadedImgId[0] : null,
                    gambar2: uploadedImgId ? uploadedImgId[1] : null,
                    gambar3: uploadedImgId ? uploadedImgId[2] : null,
                    dokumen: uploadedDocId ?? null,
                    lon: coor.lng,
                    lat: coor.lat,
                  }
            ),
            headers: {
              Authorization: "Bearer " + authToken,
              "Content-Type": "application/json",
            },
          }
        );
        const resData = await res.json();
        if (res.status === 201) {
          handleSetSnack(resData.message, "success");
          onClose();
        } else {
          throw new Error(resData.message);
        }
      } catch (error) {
        handleSetSnack(error.message, "error");
      } finally {
        setIsLoad(false);
      }
    },
    [infoPulau, type, selectedId]
  );

  const handleUploadImage = useCallback(async () => {
    try {
      setIsLoad(true);
      let link = process.env.NEXT_PUBLIC_DIRECTUS_URL + "/files";
      let uploadedImgId;
      let uploadedDocId;
      if (imgFile.length > 0) {
        await Promise.all(
          imgFile.map(async (file) => {
            const formData = new FormData();
            formData.append("title", file.name);
            formData.append(
              "folder",
              type === "pulau"
                ? uploadFolderIds.island.img
                : uploadFolderIds.point.img
            );
            formData.append("file", file);
            const res = await fetch(link, {
              method: "POST",
              body: formData,
              headers: { Authorization: "Bearer " + authToken },
            });
            const result = await res.json();
            if (res.status === 200) {
              return result.data.id;
            } else {
              throw new Error("Upload Foto Gagal");
            }
          })
        ).then(async (res) => {
          uploadedImgId = await res;
        });
      }
      if (docFile) {
        const formData = new FormData();
        formData.append("title", docFile.name);
        formData.append(
          "folder",
          type === "pulau"
            ? uploadFolderIds.island.doc
            : uploadFolderIds.point.doc
        );
        formData.append("file", docFile);
        const res = await fetch(link, {
          method: "POST",
          body: formData,
          headers: { Authorization: "Bearer " + authToken },
        });
        const result = await res.json();
        if (res.status === 200) {
          uploadedDocId = await result.data.id;
        } else {
          throw new Error("Upload Foto Gagal");
        }
      }
      handleSubmit(uploadedImgId, uploadedDocId);
    } catch (error) {
      handleSetSnack(error.message, "error");
      setIsLoad(false);
    }
  }, [imgFile, docFile, type]);

  return (
    <div className='relative'>
      {isLoad ? (
        <div className='absolute bg-black-2/25 w-full h-full flex items-center justify-center'>
          <img src='/images/loader.svg' alt='loader' className='h-20' />
        </div>
      ) : null}
      <div className='py-4 flex flex-col gap-3'>
        <div>
          <p className='text-xs text-gray-500'>Point of Interest:</p>
          <p className='text-xs text-gray-900'>{`${coor.lat.toFixed(
            7
          )}, ${coor.lng.toFixed(7)}`}</p>
        </div>
        <div className='space-y-2'>
          <p className='text-xs text-gray-500'>Email :</p>
          <input
            ref={emailRef}
            type='email'
            className='text-xs border border-gray-5 rounded-lg p-4 w-full focus:ring-transparent focus:border-gray-5'
            placeholder={t("commentModal8")}
          />
        </div>
        <div className='space-y-2'>
          <p className='text-xs text-gray-500'>{t("commentModal2")} :</p>
          <textarea
            ref={isiRef}
            className='text-xs border border-gray-5 rounded-lg p-4 w-full focus:ring-transparent focus:border-gray-5'
            rows='4'
            placeholder={t("commentModal2")}
          />
        </div>
        <div className='space-y-2'>
          <p className='text-xs text-gray-500'>{t("commentModal3")} :</p>
          <div className='flex flex-col gap-4'>
            <div className='flex-1'>
              <input
                className='hidden'
                type='file'
                id='foto1'
                accept='image/*'
                onChange={(e) => {
                  if (imgFile[0]) {
                    setImgFile((prev) => {
                      let a = [...prev];
                      a[0] = e.target.files[0];
                      return a;
                    });
                  } else {
                    setImgFile([e.target.files[0]]);
                  }
                }}
              />

              {imgFile[0] ? (
                <label
                  htmlFor='foto1'
                  className='cursor-pointer flex flex-col items-center justify-center gap-3 border border-dashed border-gray-7 h-32 rounded-lg'
                >
                  <img
                    src={URL.createObjectURL(imgFile[0])}
                    alt='select image'
                  />
                </label>
              ) : (
                <label
                  htmlFor='foto1'
                  className='cursor-pointer flex flex-col items-center justify-center gap-3 border border-dashed border-gray-7 h-20 rounded-lg'
                >
                  <div className='p-2 border border-main-blue rounded-lg'>
                    <img
                      src='/images/ic-picture.svg'
                      alt='select image'
                      className='w-4 h-4'
                    />
                  </div>
                  <p className='text-gray-7 text-xs'>
                    {t("commentModal4")}. 1Mb
                  </p>
                </label>
              )}
            </div>
            <div className='flex-1'>
              <input
                disabled={imgFile[0] ? false : true}
                className='hidden'
                type='file'
                id='foto2'
                accept='image/*'
                onChange={(e) => {
                  if (imgFile[1]) {
                    setImgFile((prev) => {
                      let a = [...prev];
                      a[1] = e.target.files[0];
                      return a;
                    });
                  } else {
                    setImgFile((prev) => {
                      let a = [...prev];
                      a.push(e.target.files[0]);
                      return a;
                    });
                  }
                }}
              />

              {imgFile[1] ? (
                <label
                  htmlFor='foto2'
                  className='cursor-pointer flex flex-col items-center justify-center gap-3 border border-dashed border-gray-7 h-32 rounded-lg'
                >
                  <img
                    src={URL.createObjectURL(imgFile[1])}
                    alt='select image'
                  />
                </label>
              ) : (
                <label
                  htmlFor='foto2'
                  className={`${
                    imgFile[0] ? "cursor-pointer" : "cursor-disable"
                  } flex flex-col items-center justify-center gap-3 border border-dashed border-gray-7 h-20 rounded-lg`}
                >
                  <div className='p-2 border border-main-blue rounded-lg'>
                    <img
                      src='/images/ic-picture.svg'
                      alt='select image'
                      className='w-4 h-4'
                    />
                  </div>
                  <p className='text-gray-7 text-xs'>
                    {t("commentModal4")}. 1Mb
                  </p>
                </label>
              )}
            </div>
            <div className='flex-1'>
              <input
                disabled={imgFile[1] ? false : true}
                className='hidden'
                type='file'
                id='foto3'
                accept='image/*'
                onChange={(e) => {
                  if (imgFile[2]) {
                    setImgFile((prev) => {
                      let a = [...prev];
                      a[2] = e.target.files[0];
                      return a;
                    });
                  } else {
                    setImgFile((prev) => {
                      let a = [...prev];
                      a.push(e.target.files[0]);
                      return a;
                    });
                  }
                }}
              />

              {imgFile[2] ? (
                <label
                  htmlFor='foto3'
                  className='cursor-pointer flex flex-col items-center justify-center gap-3 border border-dashed border-gray-7 h-32 rounded-lg'
                >
                  <img
                    src={URL.createObjectURL(imgFile[2])}
                    alt='select image'
                  />
                </label>
              ) : (
                <label
                  htmlFor='foto3'
                  className={`${
                    imgFile[1] ? "cursor-pointer" : "cursor-disable"
                  } flex flex-col items-center justify-center gap-3 border border-dashed border-gray-7 h-20 rounded-lg`}
                >
                  <div className='p-2 border border-main-blue rounded-lg'>
                    <img
                      src='/images/ic-picture.svg'
                      alt='select image'
                      className='w-4 h-4'
                    />
                  </div>
                  <p className='text-gray-7 text-xs'>
                    {t("commentModal4")}. 1Mb
                  </p>
                </label>
              )}
            </div>
          </div>
        </div>

        <div className='space-y-2'>
          <p className='text-xs text-gray-500'>{t("commentModal5")} :</p>

          <div className='flex gap-4'>
            <input
              className='hidden'
              accept='.pdf'
              type='file'
              id='doc'
              onChange={(e) => {
                setDocFile(e.target.files[0]);
              }}
            />
            <label
              htmlFor='doc'
              className='cursor-pointer flex-1 flex flex-col items-center justify-center gap-3 border border-dashed border-gray-7 h-20 rounded-lg'
            >
              <div className='p-2 border border-main-blue rounded-lg'>
                <img
                  src='/images/ic-file.svg'
                  alt='select image'
                  className='h-4'
                />
              </div>
              <p className='text-gray-7 text-[10px]'>
                {docFile ? docFile.name : t("commentDoc")}
              </p>
            </label>
          </div>
        </div>
        <div className='flex gap-3 mt-5'>
          <button
            onClick={onClose}
            className='flex-1 text-main-blue border border-main-blue py-2 rounded-md text-sm'
          >
            {t("commentModal6")}
          </button>
          <button
            onClick={handleUploadImage}
            className='flex-1 bg-main-blue text-white py-2 rounded-md text-sm'
          >
            {t("commentModal7")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCommentForm;
