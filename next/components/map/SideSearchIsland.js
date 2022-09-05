import React, { useContext, useCallback, useState } from "react";
import shallow from "zustand/shallow";
import AppContext from "../../context/AppContext";
import { useNav } from "../../hooks/useNav";
import { AboutContent, Searchbar, SearchResult } from "./sidebar-content";

const SideSearchIsland = () => {
  const { handleSetSnack, authToken } = useContext(AppContext);
  const [setActiveSideFeature, activeSideFeature] = useNav(
    (state) => [state.setActiveSideFeature, state.activeSideFeature],
    shallow
  );
  const [searchResult, setSearchResult] = useState([]);

  // this is for input value state
  const [value, setValue] = React.useState("");

  //   this is for dummy image
  const dummy = [
    { image: "/images/dummy-slider.png" },
    { image: "/images/thumbnail-rupabumi.jpg" },
    { image: "/images/dummy-slider.png" },
    { image: "/images/dummy-slider.png" },
  ];

  const getPulau = useCallback(async () => {
    try {
      const response = await fetch(
        "/api/titik-pulau?page=1&ordby=nammap&orddir=ASC&nammap=" + value,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + authToken,
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      if (response.status === 200) {
        setSearchResult(result);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  }, [value]);

  return (
    <div className='flex h-full flex-col px-4 pt-9 pb-6 dark:bg-gray-800'>
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
      <div className='flex flex-1 flex-col gap-2 overflow-y-auto'>
        {/* open the searchbar component for initialize the api and loop the suggestion component  */}
        <Searchbar value={value} setValue={setValue} onSearch={getPulau} />

        {/* loop this component  */}
        {searchResult.length > 0
          ? searchResult.map((el) => <SearchResult item={el} />)
          : null}
      </div>

      <div className='mt-2 rounded-[4px] bg-gray-50 p-2 dark:bg-gray-700'>
        {/* pass onClose props for button close  */}
        <AboutContent header='About Search'>
          You may search by a specific keyword or coordinate.
        </AboutContent>
      </div>
    </div>
  );
};

export default SideSearchIsland;
