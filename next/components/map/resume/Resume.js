import React, { useCallback, useEffect, useState } from "react";
import shallow from "zustand/shallow";
import { useNav } from "../../../hooks";
import { AboutContent } from "../sidebar-content";
import DropdownMenu from "../../core/DropdownMenu";
import Button from "../../core/Button";

const Resume = () => {
  const [setActiveSideFeature, activeSideFeature] = useNav(
    (state) => [state.setActiveSideFeature, state.activeSideFeature],
    shallow
  );
  const [listProvince, setListProvince] = useState([]);

  const getProvince = useCallback(async () => {
    try {
      const response = await fetch("/api/titik-pulau/provinsi", {
        method: "GET",
      });

      const resData = await response.json();
      if (resData.length) {
        let list = [];
        for (const item of resData) {
          list.push({ label: item, value: item });
        }
        setListProvince(list);
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

  const people = [
    { value: 1, label: "Durward Reynolds" },
    { value: 2, label: "Kenton Towne" },
    { value: 3, label: "Therese Wunsch" },
    { value: 4, label: "Benedict Kessler" },
    { value: 5, label: "Katelyn Rohan" },
  ];

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
          onSelect={(value) => {
            console.log(value);
          }}
        />
        <div className='border border-gray-500 p-2 rounded-[8px]'>
          <div
            className={`h-40 w-full bg-no-repeat bg-cover rounded-[8px]`}
            style={{
              backgroundImage: `url(${"/images/dummy-popup.jpg"})`,
            }}
          />
        </div>
        <div className='flex flex-col gap-1'>
          {[
            { label: "Uninhabited Island", value: "85 Islands" },
            { label: "Area", value: "5.636,66 Km2" },
            { label: "Coastline Length", value: "633,35 Km" },
            { label: "Largest Island", value: "island" },
            { label: "Smallest Island", value: "island" },
            { label: "Inhabited Island", value: "island" },
            { label: "Uninhabited Island", value: "island" },
          ].map((el) => (
            <div className='flex items-center text-gray-600 text-sm gap-1'>
              <div className='w-1/2 flex items-center justify-between'>
                <p>{el.label}</p>
                <p>:</p>
              </div>
              <div className='w-1/2 overflow-x-scroll whitespace-nowrap hide-scrollbar'>
                {el.value}
              </div>
            </div>
          ))}
        </div>
        <p className='text-gray-600 text-sm'>
          Bali is known as the Pulau Dewata (Island of the Gods). Located
          between the island of Java and the island of Lombok. Bali was
          previously part of the Smaller Sunda Province along with Lombok,
          Sumbawa, Sumba, Flores and Timor. In 1958 Bali officially became its
          own province with the capital Singaraja. Then in 1960 moved to
          Denpasar. The province of Bali consists of the island of Bali and the
          surrounding small islands, including Nusa Penida, Nusa.
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

      <div className='mt-2 rounded-[4px] bg-gray-50 p-2 dark:bg-gray-700'>
        <AboutContent header='About Upload'>
          You may upload datasets in the Shapefile format.
        </AboutContent>
      </div>
    </div>
  );
};

export default Resume;
