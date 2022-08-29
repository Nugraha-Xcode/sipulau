import { useTranslation } from "next-i18next";
import React, { useCallback } from "react";
import { useNetwork } from "../../../../../hooks";
import { Button, Searchbar } from "../../core";
import NetworkResults from "./NetworkResults";

const NetworkData = ({ getSimpulList }) => {
  const { t } = useTranslation("simpulJaringan");
  const [simpulList, page, setPage, totalData, daftarLayanan] = useNetwork(
    (state) => [
      state.simpulList,
      state.page,
      state.setPage,
      state.totalData,
      state.daftarLayanan,
    ]
  );
  console.log(simpulList);
  const [value, setValue] = React.useState("");

  //   this should be an array contains the boolean value of each item
  const [isActive, setIsActive] = React.useState(false);

  const buatThumbnailUrl = useCallback((layanan) => {
    let thumbnailUrl = null;
    const link = new URL(layanan.url);
    switch (layanan.format) {
      case "Esri REST":
        link.pathname += "/info/thumbnail";
        thumbnailUrl =
          link.protocol === "http:"
            ? "/api/proxy?proxy=" + encodeURIComponent(link.href)
            : link.href;
        break;
      case "WMS":
        link.search =
          "?service=WMS&version=1.1.0&request=GetMap&layers=" +
          layanan.nama +
          "&styles=&bbox=" +
          layanan.bbox +
          "&width=64&height=64&srs=" +
          layanan.srs +
          "&format=image%2Fpng";
        thumbnailUrl =
          link.protocol === "http:"
            ? "/api/proxy?proxy=" + encodeURIComponent(link.href)
            : link.href;
        break;
    }
    return thumbnailUrl;
  }, []);

  return (
    <div className='flex flex-col gap-3 border-t-[1px] my-2 py-2'>
      <div className='font-semibold text-[#4F4C4A]'>Select Network Data</div>
      <Searchbar value={value} setValue={setValue} hasSuggestion={false} />

      <div className='flex flex-col gap-2'>
        {daftarLayanan.length === 0 ? (
          <div className='flex flex-col items-center gap-3 w-full h-[180px] justify-center'>
            <img
              src='images/ic-warning.png'
              className='w-[fit-content] h-[fit-content]'
            />
            <div className='text-[#4F4C4A] font-semibold'>Data Not Found</div>
            <div className='text-[#B4B2AF] text-xs'>
              Please select the Category & Network Data first
            </div>
          </div>
        ) : (
          daftarLayanan.map((item, index) => (
            <NetworkResults
              thumbnailSource={buatThumbnailUrl(item)}
              isActive={isActive}
              setIsActive={setIsActive}
              item={item}
              key={index}
            />
          ))
        )}
        <div className='p-3 w-full flex justify-center gap-5'>
          <button
            onClick={() => {
              if (page !== 1) {
                getSimpulList(page - 1);
                setPage(page - 1);
              }
            }}
          >
            <img
              src='/images/ic-arrow-r.svg'
              alt='prev button'
              className='tranform rotate-180'
            />
          </button>

          <p className='text-center text-black-2 text-xs'>
            {(page - 1 === 0 ? page : (page - 1) * 10 + 1) +
              "-" +
              (page === Math.trunc(totalData / 10) + 1
                ? totalData
                : page * 10) +
              " " +
              t("from") +
              " " +
              (totalData || "-")}
          </p>
          <button
            onClick={() => {
              if (page !== Math.trunc(totalData / 10) + 1) {
                getSimpulList(page + 1);
                setPage(page + 1);
              }
            }}
          >
            <img src='/images/ic-arrow-r.svg' alt='next button' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetworkData;
