import React from "react";
import shallow from "zustand/shallow";
import { useNav } from "../../hooks/useNav";
import {
  AboutContent,
  Accordion,
  AreaInterest,
  FileFormatDownload,
  LayerListDownload,
  Dropdown,
} from "./sidebar-content";

const SideDownload = () => {
  const [setActiveSideFeature, activeSideFeature] = useNav(
    (state) => [state.setActiveSideFeature, state.activeSideFeature],
    shallow
  );

  // dropdown value select by province
  const provinceValue = [
    { name: "Kepulauan Riau" },
    { name: "Lampung" },
    { name: "Maluku" },
    { name: "Maluku Utara" },
    { name: "Nusa Tenggara Barat" },
    { name: "Nusa Tenggara Timur" },
    { name: "Papua" },
  ];

  // selected value from dropdown
  const [selectedValue, setSelectedValue] = React.useState(null);

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
        <div className="flex flex-col h-full  justify-between">
          <div className="flex flex-col gap-2 h-full w-full">
            {/* pass children props for fill the content of the accordion & pass name for the name of accordion */}
            <Accordion name="Select by Province">
              {/* dropdown component should pass value props for the value of the dropdown and should pass the selected value instead */}
              <Dropdown
                value={provinceValue}
                onValueSelected={(item) => setSelectedValue(item)}
                valueSelected={selectedValue}
                label="Select Province"
                direction="down"
              />
            </Accordion>

            <Accordion name="Area of Interest">
              <AreaInterest />
            </Accordion>

            <Accordion name="Selected Layer">
              <LayerListDownload />
            </Accordion>
          </div>

          <FileFormatDownload />
        </div>
      </div>

      <div className="mt-2 rounded-[4px] bg-gray-50 p-2 dark:bg-gray-700">
        <AboutContent header="About Download">
          You may download based on Province, Area of Interest, or Selected
          Layer.
        </AboutContent>
      </div>
    </div>
  );
};

export default SideDownload;
