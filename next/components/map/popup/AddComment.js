import React, { useCallback, useState, useContext, useRef } from "react";

import { uploadFolderIds } from "../../../utils/constant";
import AppContext from "../../../context/AppContext";
import PopupContext from "../../../context/PopupContext";

const AddComment = ({ onClose, type, coor }) => {
  const { handleSetSnack } = useContext(AppContext);
  const { infoPulau } = useContext(PopupContext);
  const [imgFile, setImgFile] = useState([]);
  console.log(imgFile);
  const [docFile, setDocFile] = useState(null);
  console.log(docFile);
  const [isLoad, setIsLoad] = useState(false);
  const isiRef = useRef(null);

  const handleSubmit = useCallback(
    async (uploadedImgId, uploadedDocId) => {
      try {
        const res = await fetch(
          type === "pulau"
            ? "/api/titik-pulau/" + infoPulau.id_toponim + "/komentar"
            : "/api/komentar-titik",
          {
            method: "POST",
            body: JSON.stringify(
              type === "pulau"
                ? {
                    isi: isiRef.current.value,
                    gambar1: uploadedImgId ? uploadedImgId[0] : null,
                    gambar2: uploadedImgId ? uploadedImgId[1] : null,
                    gambar3: uploadedImgId ? uploadedImgId[2] : null,
                    dokumen: uploadedDocId ?? null,
                  }
                : {
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
              Authorization:
                "Bearer Yg4kL4kcxactkH6yYgPZU8ApF2RnhxwhVJaru896tf85YmzZrCGqXsS7vxE5bPwGtQpBxEwQnYwCWjGaNYLFv4rBU8gKc3z94T9TXfDUupffgtDeeDnYPtvvYZqZ8AVB",
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
    [infoPulau, type]
  );

  const handleUploadImage = useCallback(async () => {
    try {
      setIsLoad(true);
      let link = process.env.NEXT_PUBLIC_DIRECTUS_URL + "/files";
      let token =
        "Bearer Yg4kL4kcxactkH6yYgPZU8ApF2RnhxwhVJaru896tf85YmzZrCGqXsS7vxE5bPwGtQpBxEwQnYwCWjGaNYLFv4rBU8gKc3z94T9TXfDUupffgtDeeDnYPtvvYZqZ8AVB";
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
              headers: {
                Authorization: token,
              },
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
          headers: {
            Authorization: token,
          },
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
      <div className='flex items-center p-4'>
        <p className='flex-1 text-center text-black-2 font-semibold text-sm'>
          Komentar
        </p>
        <button
          type='button'
          className='text-2xl'
          data-dismiss='modal'
          aria-label='Close'
          onClick={onClose}
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
      <hr />
      <div className='p-4 flex flex-col gap-3'>
        <div className='space-y-2'>
          <p className='text-xs text-main-gray'>Komentar Anda :</p>
          <textarea
            ref={isiRef}
            className='text-xs border border-gray-5 rounded-lg p-4 w-full focus:ring-transparent focus:border-gray-5'
            rows='4'
            placeholder='Komentar Anda...'
          />
        </div>
        <div className='space-y-2'>
          <p className='text-xs text-main-gray'>Tambahkan Gambar :</p>
          <div className='flex gap-4'>
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
                  className='cursor-pointer flex flex-col items-center justify-center gap-3 border border-dashed border-gray-7 h-32 rounded-lg'
                >
                  <div className='p-2 border border-main-blue rounded-lg'>
                    <img src='/images/ic-picture.svg' alt='select image' />
                  </div>
                  <p className='text-gray-7 text-xs'>Maks. 10 Mb</p>
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
                  } flex flex-col items-center justify-center gap-3 border border-dashed border-gray-7 h-32 rounded-lg`}
                >
                  <div className='p-2 border border-main-blue rounded-lg'>
                    <img src='/images/ic-picture.svg' alt='select image' />
                  </div>
                  <p className='text-gray-7 text-xs'>Maks. 10 Mb</p>
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
                  } flex flex-col items-center justify-center gap-3 border border-dashed border-gray-7 h-32 rounded-lg`}
                >
                  <div className='p-2 border border-main-blue rounded-lg'>
                    <img src='/images/ic-picture.svg' alt='select image' />
                  </div>
                  <p className='text-gray-7 text-xs'>Maks. 10 Mb</p>
                </label>
              )}
            </div>
          </div>
        </div>

        <div className='space-y-2'>
          <p className='text-xs text-main-gray'>Tambahkan Dokumen :</p>

          <div className='flex gap-4'>
            <input
              className='hidden'
              accept='.xlsx,.xls,.doc,.docx,.ppt,.pptx,.txt,.pdf,.csv'
              type='file'
              id='doc'
              onChange={(e) => {
                setDocFile(e.target.files[0]);
              }}
            />
            <label
              htmlFor='doc'
              className='cursor-pointer flex-1 flex flex-col items-center justify-center gap-3 border border-dashed border-gray-7 h-32 rounded-lg'
            >
              <div className='p-2 border border-main-blue rounded-lg'>
                <img src='/images/ic-file.svg' alt='select image' />
              </div>
              <p className='text-gray-7 text-xs'>
                {docFile ? docFile.name : "Maks. 10 Mb"}
              </p>
            </label>
          </div>
        </div>
        <div className='flex gap-3 mt-5'>
          <button
            onClick={onClose}
            className='flex-1 text-main-blue border border-main-blue py-2 rounded-md'
          >
            Batal
          </button>
          <button
            onClick={handleUploadImage}
            className='flex-1 bg-main-blue text-white py-2 rounded-md'
          >
            Komentar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
