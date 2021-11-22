import React, { useContext, useCallback, useState } from "react";
import useToggle from "../../utils/useToggle";
import Select from "../core/select";
import Modal from "../modal";
import AppContext from "../../context/AppContext";
import MapContext from "../../context/MapContext";

// TODO use real token
const token =
  "Yg4kL4kcxactkH6yYgPZU8ApF2RnhxwhVJaru896tf85YmzZrCGqXsS7vxE5bPwGtQpBxEwQnYwCWjGaNYLFv4rBU8gKc3z94T9TXfDUupffgtDeeDnYPtvvYZqZ8AVB";

const MapTableDownload = ({ toggledRow, isSelectAll }) => {
  const { handleSetSnack } = useContext(AppContext);
  const { bbox, activeFilter } = useContext(MapContext);
  const [isShowing, toggle] = useToggle();
  const [isLoad, setIsLoad] = useState(false);
  const [type, setType] = useState("csv");

  const buildObjBody = useCallback(() => {
    let objBody = {};
    if (activeFilter.length > 0) {
      activeFilter.forEach((el) => {
        objBody[el.value] = el.content;
      });
    }
    if (toggledRow.length > 0) {
      if (isSelectAll) {
        objBody["unselected"] = toggledRow.map((el) => parseInt(el.id));
      } else {
        objBody["selected"] = toggledRow.map((el) => parseInt(el.id));
      }
    }
    if (bbox) {
      objBody.bbox = { ...bbox };
    }
    return objBody;
  }, [bbox, activeFilter, toggledRow, isSelectAll]);

  const handleDownloadCsv = useCallback(
    async (e) => {
      umami.trackEvent("from-table", "download");
      try {
        setIsLoad(true);
        const objBody = buildObjBody();
        // TODO use auth
        const response = await fetch("/api/titik-pulau/download/csv", {
          method: "POST",
          body: JSON.stringify(objBody),
        });

        const resData = await response.blob();
        let anchor = document.createElement("a");
        const href = window.URL.createObjectURL(resData);
        anchor.href = href;
        anchor.download = "titik-pulau.csv";
        anchor.click();
        window.URL.revokeObjectURL(href);
        anchor.remove()
      } catch (error) {
        handleSetSnack(error.message, "error");
      } finally {
        setIsLoad(false);
        toggle();
      }
    },
    [toggle]
  );

  const handleDownloadShp = useCallback(
    async (e) => {
      umami.trackEvent("from-table", "download");
      try {
        setIsLoad(true);
        const objBody = buildObjBody();
        // TODO use auth
        const response = await fetch("/api/titik-pulau/download/shp", {
          method: "POST",
          body: JSON.stringify(objBody),
        });

        const resData = await response.json();
        let anchor = document.createElement("a");
        // TODO use real token
        anchor.href = resData.url + "&access_token=" + token;
        anchor.click();
        anchor.remove()
      } catch (error) {
        handleSetSnack(error.message, "error");
      } finally {
        setIsLoad(false);
        toggle();
      }
    },
    [toggle]
  );

  return (
    <>
      <button
        onClick={toggle}
        className='flex items-center gap-2 border py-2 px-5 rounded-full'
      >
        <img src='/images/ic-download.svg' alt='button' className='h-4' />
        <p className='text-xs text-main-gray'>Download</p>
      </button>
      <Modal isShowing={isShowing} handleModal={toggle} size='sm'>
        <div className=''>
          <div className='flex items-center p-2'>
            <p className='flex-1 text-center text-xs font-semibold text-black-2'>
              Download Data
            </p>
            <button
              type='button'
              className='text-2xl'
              data-dismiss='modal'
              aria-label='Close'
              onClick={toggle}
            >
              <span aria-hidden='true' className='text-black-2'>
                &times;
              </span>
            </button>
          </div>
          <hr />
          <div className='p-4 space-y-4'>
            <div>
              <p className='text-xs mb-1 text-black-2'>Pilih Format File</p>
              <Select
                value={type}
                placeholder={"Pilih Format File"}
                items={[
                  { label: "csv", value: "csv" },
                  { label: "shp", value: "shp" },
                ]}
                onChange={(item) => {
                  setType(item);
                }}
              />
            </div>
            {isLoad ? (
              <div className='w-full flex items-center justify-center'>
                <img src='images/loader.svg' alt='loader' className='w-10' />
              </div>
            ) : (
              <button
                className='text-white bg-main-blue rounded-lg py-2 mx-auto w-full text-sm'
                onClick={() => {
                  type.value === "csv"
                    ? handleDownloadCsv()
                    : handleDownloadShp();
                }}
              >
                Download
              </button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MapTableDownload;
