import React from "react";
import shallow from "zustand/shallow";
import { useNav } from "../../hooks/useNav";
import { AboutContent, Searchbar, SearchResult } from "./sidebar-content";

const SideSearchIsland = () => {
  const [setActiveSideFeature, activeSideFeature] = useNav(
    (state) => [state.setActiveSideFeature, state.activeSideFeature],
    shallow
  );

  // this is for input value state
  const [value, setValue] = React.useState("");

  //   this is for dummy image
  const dummy = [
    { image: "/images/dummy-slider.png" },
    { image: "/images/thumbnail-rupabumi.jpg" },
    { image: "/images/dummy-slider.png" },
    { image: "/images/dummy-slider.png" },
  ];

  return (
    <div className="flex h-full flex-col px-4 pt-9 pb-6 dark:bg-gray-800">
      <div>
        <div className="flex items-center justify-between ">
          <p className="text-gray-800 dark:text-gray-100">
            {activeSideFeature?.label || ""}
          </p>
          <button onClick={() => setActiveSideFeature(null)}>
            <img src="/images/ic-close.svg" alt="close button" className="" />
          </button>
        </div>
        <hr className="my-3 text-gray-200" />
      </div>
      <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
        {/* open the searchbar component for initialize the api and loop the suggestion component  */}
        <Searchbar value={value} setValue={setValue} />

        {/* loop this component  */}
        <SearchResult
          imageData={dummy}
          name="Pulau Seribu"
          geoInfo="-5.5999785, 106.5412452"
        />
      </div>

      <div className="mt-2 rounded-[4px] bg-gray-50 p-2 dark:bg-gray-700">
        {/* pass onClose props for button close  */}
        <AboutContent header="About Search">
          You may search by a specific keyword or coordinate.
        </AboutContent>
      </div>
    </div>
  );
};

export default SideSearchIsland;
