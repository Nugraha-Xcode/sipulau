import React, { useCallback, useContext, useEffect, useState } from "react";
import shallow from "zustand/shallow";
import { useNav } from "../../../hooks";
import { AboutContent } from "../sidebar-content";
import DropdownMenu from "../../core/DropdownMenu";
import Button from "../../core/Button";
import AppContext from "../../../context/AppContext";

const Resume = () => {
  const { handleSetSnack } = useContext(AppContext);
  const [setActiveSideFeature, activeSideFeature] = useNav(
    (state) => [state.setActiveSideFeature, state.activeSideFeature],
    shallow
  );
  const [listProvince, setListProvince] = useState([
    { label: "Seluruh Indonesia", value: "all" },
  ]);
  const [resumeProvince, setResumeProvince] = useState(null);

  const getResume = useCallback(async (selected) => {
    const params = new URLSearchParams({
      prov: selected,
    });
    try {
      const response = await fetch(
        "/api/titik-pulau/prov-summary?" + (selected !== "all" ? params : ""),
        {
          method: "GET",
        }
      );

      const resData = await response.json();
      if (response.status === 200) {
        setResumeProvince(resData);
      } else {
        throw Error(resData.message);
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  }, []);

  const getProvince = useCallback(async () => {
    try {
      const response = await fetch("/api/titik-pulau/prov-summary/list", {
        method: "GET",
      });

      const resData = await response.json();
      if (resData.length) {
        let list = [];
        for (const item of resData) {
          list.push({ label: item, value: item });
        }
        setListProvince((prev) => [...prev, ...list]);
      }
      if (response.status !== 200) {
        throw Error(resData.message);
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  }, []);

  useEffect(() => {
    getProvince();
  }, []);

  return (
    <div
      id='side-feature-content'
      className='flex h-full flex-col px-4 pt-20 pb-6 dark:bg-gray-800'
    >
      <div>
        <div className='flex items-center justify-between '>
          <p className='text-gray-800 dark:text-gray-100'>
            {activeSideFeature?.label || ""}
          </p>
          <button onClick={() => setActiveSideFeature(null)}>
            <img src='/images/ic-close.svg' alt='close button' className='' />
          </button>
        </div>
        <hr className='my-3 text-gray-200' />
      </div>
      <div className='flex flex-1 flex-col gap-3 overflow-y-auto hide-scrollbar'>
        <DropdownMenu
          label='Select Province'
          menu={listProvince}
          onSelect={(selectedItem) => {
            getResume(selectedItem.value);
          }}
        />
        {resumeProvince && (
          <div className='flex flex-col gap-2'>
            <div className='border border-gray-500 p-2 rounded-[8px]'>
              {/* <div
                className={`h-40 w-full bg-no-repeat bg-cover rounded-[8px]`}
                style={{
                  backgroundImage: `url(${"/images/dummy-popup.jpg"})`,
                }}
              /> */}
              <img
                src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/[${
                  resumeProvince.xmin +
                  "," +
                  resumeProvince.ymin +
                  "," +
                  resumeProvince.xmax +
                  "," +
                  resumeProvince.ymax
                }]/1280x1280?access_token=pk.eyJ1IjoiaGFmaXphbmFkbGkiLCJhIjoiY2s0M3pxdmtnMGRmODNkcG11a2RkdGEyNiJ9.zJ_0jcPOGZko34FBrPxDRA`}
                className='w-full rounded-lg'
              />
            </div>
            <div className='flex flex-col gap-1'>
              {[
                {
                  label: "Number of Islands",
                  value: resumeProvince.total_island,
                },
                { label: "Area", value: resumeProvince.total_area },
                {
                  label: "Coastline Length",
                  value: resumeProvince.total_coastline,
                },
                {
                  label: "Largest Island",
                  value: resumeProvince.largest_island,
                },
                {
                  label: "Smallest Island",
                  value: resumeProvince.smallest_island,
                },
                {
                  label: "Inhabited Island",
                  value: resumeProvince.total_inhabited,
                },
                {
                  label: "Uninhabited Island",
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
            <Button
              className='text-sm'
              variant='normal'
              onClick={() => {
                console.log("test");
              }}
              isActive={true}
            >
              Download as PDF
            </Button>
          </div>
        )}
      </div>

      <div className='mt-2 rounded-[4px] bg-gray-50 p-2 dark:bg-gray-700'>
        <AboutContent header='About Upload'>
          You may upload datasets in the Shapefile format.
        </AboutContent>
      </div>
    </div>
  );
};

export default Resume;
