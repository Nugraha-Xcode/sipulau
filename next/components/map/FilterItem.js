import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import MapContext from "../../context/MapContext";
import Select from "../core/select";
import FilterRegion from "./FilterRegion";

const FilterItem = ({ idItem, initType, initValue }) => {
  const { t } = useTranslation("attributetable");
  const { setActiveFilter, setFilterArr } = useContext(MapContext);
  const [type, setType] = useState(initType || {});
  const [inputValue, setInputValue] = useState(initValue || "");

  const [column, setColumn] = useState([
    { label: t("column1"), value: "fid" },
    { label: t("column2"), value: "id_wilayah" },
    { label: t("column3"), value: "nammap" },
    { label: t("column4"), value: "artinam" },
    { label: t("column5"), value: "aslbhs" },
    { label: t("column6"), value: "sjhnam" },
    { label: t("column14"), value: "id_toponim" },
    { label: t("column15"), value: "luas" },
    { label: t("location"), value: "location" },
    { label: "Remark", value: "remark" },
    { label: "Status", value: "status" },
  ]);

  return (
    <>
      <div className='flex-1'>
        <Select
          value={type}
          placeholder={t("filter4")}
          items={column}
          onChange={(item) => {
            if (type.value) {
              setColumn((prev) => {
                return [...prev.filter((el) => el.value !== item.value), type];
              });
            } else {
              setColumn((prev) => prev.filter((el) => el.value !== item.value));
            }
            setActiveFilter((prev) =>
              prev.filter((el) => el.value !== type.value)
            );
            setInputValue("");
            setType(item);
          }}
        />
      </div>
      {type.value === "remark" ? (
        <div className='flex-1'>
          <Select
            value={
              typeof inputValue === "string"
                ? { label: inputValue, value: inputValue }
                : inputValue
            }
            placeholder='Pilih remark'
            items={[
              { label: "Berpenduduk", value: "Berpenduduk" },
              { label: "Tidak Berpenduduk", value: "Tidak Berpenduduk" },
              { label: "Lain-lain", value: "Lain-lain" },
            ]}
            onChange={(item) => {
              setInputValue(item);
              setActiveFilter((prev) => {
                if (prev.length > 0) {
                  if (prev.findIndex((el) => el.value === type.value) !== -1) {
                    let arr = [...prev];
                    arr[
                      prev.findIndex((el) => el.value === type.value)
                    ].content = item.value;
                    return arr;
                  } else {
                    let obj = type;
                    obj.content = item.value;
                    return [...prev, obj];
                  }
                } else {
                  let obj = type;
                  obj.content = item.value;
                  return [obj];
                }
              });
              setFilterArr((prev) => {
                let a = [...prev];
                let b = prev.findIndex((el) => el.id === idItem);
                a[b].content = item.value;
                a[b].selectObj = type;
                return [...a];
              });
            }}
          />
        </div>
      ) : type.value === "location" ? (
        <FilterRegion
          inputValue={inputValue}
          setInputValue={setInputValue}
          idItem={idItem}
          type={type}
        />
      ) : (
        <div className='flex-1 h-12'>
          <input
            value={inputValue}
            className='rounded-lg border h-full w-full p-4 focus:outline-none text-black-2 text-sm'
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={() => {
              setActiveFilter((prev) => {
                if (prev.length > 0) {
                  if (prev.findIndex((el) => el.value === type.value) !== -1) {
                    let arr = [...prev];
                    arr[
                      prev.findIndex((el) => el.value === type.value)
                    ].content = inputValue;
                    return arr;
                  } else {
                    let obj = type;
                    obj.content = inputValue;
                    return [...prev, obj];
                  }
                } else {
                  let obj = type;
                  obj.content = inputValue;
                  return [obj];
                }
              });
              setFilterArr((prev) => {
                let a = [...prev];
                let b = prev.findIndex((el) => el.id === idItem);
                a[b].content = inputValue;
                a[b].selectObj = type;
                return [...a];
              });
            }}
          />
        </div>
      )}
      {/* {type.value === "remark" ? (
        <input className='rounded-lg border p-4  h-full' />
      ) : (
        <div className='flex-1'>
          <FilterRegion />
        </div>
      )} */}
      <button
        onClick={() => {
          setFilterArr((prev) => prev.filter((el) => el.id !== idItem));
          setActiveFilter((prev) =>
            prev.filter((el) => el.value !== type.value)
          );
          setColumn((prev) => {
            if (type.value) {
              return [...prev, type].sort((a, b) =>
                a.label < b.label ? -1 : 1
              );
            } else {
              return [...prev];
            }
          });
        }}
        className='p-4 border rounded-lg h-12 flex items-center'
        // disabled={type.value && inputValue ? false : true}
      >
        <img
          src='/images/ic-trash.svg'
          alt='remove button'
          className='h-4 w-4'
        />
      </button>
    </>
  );
};

export default FilterItem;
