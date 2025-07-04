import { useTranslation } from "next-i18next";
import React from "react";
import shallow from "zustand/shallow";
import { useNetwork } from "../../../hooks";
import Button from "../../core/Button";
import Loader from "../../core/Loader";

import { Dropdown } from "../sidebar-content/core";

const NetworkNodeCategorySelection = ({
  getOrganizationList,
  getSimpulList,
  isLoad,
}) => {
  const { t } = useTranslation();
  const translatedText = (key) => {
    const params = { ns: ["common", "simpulJaringan"] };
    return t(key, params);
  };
  const [
    organizationList,
    category,
    setCategory,
    selectOrganization,
    selectedOrganization,
  ] = useNetwork(
    (state) => [
      state.organizationList,
      state.category,
      state.setCategory,
      state.selectOrganization,
      state.selectedOrganization,
    ],
    shallow
  );

  return (
    <div className='flex flex-col w-full h-[fit-content] gap-3 relative'>
      <Loader show={isLoad} />
      <div className='font-semibold text-[#4F4C4A] py-2 text-base'>
        {translatedText("selectCategory")}
      </div>
      <Button
        className='text-sm'
        variant='outline'
        isActive={"Kementerian/Lembaga" === category}
        onClick={() => {
          if (!organizationList.length) {
            getOrganizationList();
          }
          if (category === "Kementerian/Lembaga") {
            setCategory("");
          } else {
            setCategory("Kementerian/Lembaga");
          }
        }}
      >
        {translatedText("button1")}
      </Button>
      <div className='flex gap-2'>
        <Button
          className='text-sm'
          variant='outline'
          isActive={"Provinsi" === category}
          onClick={() => {
            if (!organizationList.length) {
              getOrganizationList();
            }
            if (category === "Provinsi") {
              setCategory("");
            } else {
              setCategory("Provinsi");
            }
          }}
        >
          {translatedText("button2")}
        </Button>
        <Button
          className='text-sm'
          variant='outline'
          isActive={"Kabupaten/Kota" === category}
          onClick={() => {
            if (!organizationList.length) {
              getOrganizationList();
            }
            if (category === "Kabupaten/Kota") {
              setCategory("");
            } else {
              setCategory("Kabupaten/Kota");
            }
          }}
        >
          {translatedText("button3")}
        </Button>
      </div>

      {organizationList.length > 0 && category ? (
        <Dropdown
          value={organizationList.filter((el) => el.category === category)}
          direction='down'
          styleOptions={{
            height: "450px",
            gap: "0px",
            position: "absolute",
            top: "190px",
          }}
          label={translatedText("selectNetworkCategory")}
          valueSelected={selectedOrganization}
          onValueSelected={(item) => selectOrganization(item)}
        />
      ) : null}

      <Button
        className='text-sm'
        variant='normal'
        isActive={selectedOrganization}
        onClick={() => getSimpulList(1)}
      >
        {translatedText("proceed")}
      </Button>
    </div>
  );
};

export default NetworkNodeCategorySelection;
