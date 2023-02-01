import { useTranslation } from "next-i18next";
import React from "react";

const ComponentToPrint = React.forwardRef(({ resumeProvince }, ref) => {
  const { t } = useTranslation();
  const translatedText = (key) => {
    const params = { ns: ["map"] };
    return t(key, params);
  };
  return (
    <div ref={ref} className='relative'>
      <div className='w-full min-h-screen backgroundStyle'>
        <div className='flex flex-col gap-5 mx-44 py-10'>
          <p className='text-xl text-gray-600'>
            {resumeProvince.nama_provinsi}
          </p>
          <img
            src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/[${
              resumeProvince.xmin +
              "," +
              resumeProvince.ymin +
              "," +
              resumeProvince.xmax +
              "," +
              resumeProvince.ymax
            }]/1280x960?access_token=pk.eyJ1IjoiaGFmaXphbmFkbGkiLCJhIjoiY2s0M3pxdmtnMGRmODNkcG11a2RkdGEyNiJ9.zJ_0jcPOGZko34FBrPxDRA`}
            className='w-full rounded-lg'
          />
          <div className='flex flex-col gap-1 w-1/2'>
            {[
              {
                label: translatedText("resume.numberIslands"),
                value: resumeProvince.total_island,
              },
              {
                label: translatedText("resume.area"),
                value: resumeProvince.total_area,
              },
              {
                label: translatedText("resume.coastlineLength"),
                value: resumeProvince.total_coastline,
              },
              {
                label: translatedText("resume.largestIsland"),
                value: resumeProvince.largest_island,
              },
              {
                label: translatedText("resume.smallestIsland"),
                value: resumeProvince.smallest_island,
              },
              {
                label: translatedText("resume.inhabitedIsland"),
                value: resumeProvince.total_inhabited,
              },
              {
                label: translatedText("resume.uninhabitedIsland"),
                value: resumeProvince.total_uninhabited,
              },
            ].map((el) => (
              <div
                key={el.label}
                className='flex items-center text-gray-600 text-sm gap-1'
              >
                <div className='w-1/2 flex items-center justify-between'>
                  <p>{el.label}</p>
                  <p>:</p>
                </div>
                <div className='w-1/2 overflow-x-scroll whitespace-nowrap hide-scrollbar'>
                  {el.value || "-"}
                </div>
              </div>
            ))}
          </div>
          <p className='text-gray-600 text-sm'>
            {resumeProvince.deskripsi || "-"}
          </p>
        </div>
      </div>
      <div className='absolute bottom-0 w-full h-screen backgroundStyleBottom' />
      <style jsx>{`
        .backgroundStyle {
          background: url("/images/bg-doc-print.svg") no-repeat;
          background-size: contain;
        }
        .backgroundStyleBottom {
          background: url("/images/bg-doc-print-bottom.svg") no-repeat;
          background-size: contain;
          background-position: bottom right;
        }
      `}</style>
    </div>
  );
});

export default ComponentToPrint;
