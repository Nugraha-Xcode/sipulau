import { useTranslation } from "next-i18next";
import React, { useContext, useState, useCallback } from "react";
import shallow from "zustand/shallow";
import AppContext from "../../../../../context/AppContext";
import { useNetwork } from "../../../../../hooks";
import { mapListCategory } from "../../../../../utils/constant";

import { Button, Dropdown } from "../../core";
import style from "./CategoryNetworkSection.module.css";
// drop down data value
import { value } from "./dropdownData";

const CategoryNetworkSection = ({
  onSubmit,
  getOrganizationList,
  getSimpulList,
}) => {
  const { t } = useTranslation("simpulJaringan");
  const { handleSetSnack } = useContext(AppContext);
  const [
    organizationList,
    category,
    setCategory,
    setTotalData,
    selectOrganization,
    selectedOrganization,
  ] = useNetwork(
    (state) => [
      state.organizationList,
      state.category,
      state.setCategory,
      state.setTotalData,
      state.selectOrganization,
      state.selectedOrganization,
    ],
    shallow
  );
  // value for condition the button category state
  const [isActive, setIsActive] = React.useState({
    ministries: false,
    province: false,
    city: false,
  });

  // value selected
  const [valueSelected, setValueSelected] = React.useState("");
  console.log(valueSelected);

  // state for button proceed
  const [proceedActive, setProceedActive] = React.useState(false);

  // this useEffect for button proceed
  React.useEffect(() => {
    // check if there is a true state in isActive value
    const someIsActive = Object.values(isActive).some((val) => val === true);

    // check if valueSelected is not empty
    if (someIsActive && valueSelected !== "") {
      return setProceedActive(true);
    } else {
      return setProceedActive(false);
    }
  }, [isActive, valueSelected]);

  // handle button set active
  const handleButton = (value) => {
    const stateCopy = { ...isActive };

    const stateValue = !stateCopy[value];

    Object.keys(stateCopy).forEach((key) => (stateCopy[key] = false));
    stateCopy[value] = stateValue;

    setIsActive(stateCopy);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>Select Category</div>
      <Button
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
        {t("button1")}
      </Button>
      <div className={style.container_button}>
        <Button
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
          {t("button2")}
        </Button>
        <Button
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
          {t("button3")}
        </Button>
      </div>

      {organizationList.length > 0 && category ? (
        <Dropdown
          value={organizationList.filter((el) => el.category === category)}
          direction='down'
          styleOptions={{
            height: "450px",
            gap: "20px",
            position: "absolute",
            top: "201px",
          }}
          label='Select Network Category'
          valueSelected={selectedOrganization}
          onValueSelected={(item) => selectOrganization(item)}
        />
      ) : null}

      <Button
        variant='normal'
        isActive={selectedOrganization}
        onClick={() => getSimpulList(1)}
      >
        Proceed
      </Button>
    </div>
  );
};

export default CategoryNetworkSection;
