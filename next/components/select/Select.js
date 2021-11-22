import React, { useState, useCallback, useEffect, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import SelectItem from "./SelectItem";
// import arrow from "../../assets/arrowWhite.svg";

// import "../../index.css";

const Select = (props) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterItems, setFilterItems] = useState([]);
  const parentRef = useRef(null);
  const searchRef = useRef(null);
  const itemsRef = useRef(null);
  const [mT, setMt] = useState(0);
  const [focusIndex, setFocusIndex] = useState(-2);
  const handleOpen = useCallback((event) => {
    let toBottom =
      window.innerHeight - parentRef.current.getBoundingClientRect().y;
    let nItems = props.items.length;
    if (props.items.length > 6) {
      nItems = 6;
    }
    let dif = toBottom - nItems * 40 - 30;
    if (dif > 0) {
      setMt(0);
    } else {
      setMt(dif);
    }
    setOpen(true);
  }, []);
  const handleKey = useCallback((event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setFocusIndex((prev) => {
        if (prev == -1) {
          return 0;
        } else if (prev > -1) {
          return prev - 1;
        } else return prev;
      });
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setFocusIndex((prev) => {
        if (prev < props.items.length - 1) return prev + 1;
        else return prev;
      });
    }
  }, []);
  const handleSearch = useCallback((event) => {
    if (event.target instanceof HTMLInputElement) {
      setSearch(event.target.value);
    }
  }, []);

  useEffect(() => {
    if (!search.length) {
      setFilterItems(props.items);
    } else {
      let filter = props.items.filter((item) => item.label.includes(search));
      setFocusIndex(-1);
      setFilterItems(filter);
    }
  }, [search, props.items]);

  useEffect(() => {
    if (searchRef.current) {
      if (focusIndex === -1) {
        searchRef.current.focus();
      }
    }
  }, [focusIndex]);
  useEffect(() => {
    if (open) {
      if (props.isSearch) {
        setTimeout(() => {
          setFocusIndex(-1);
        }, 300);
      } else {
        setFocusIndex(-1);
      }
      itemsRef.current.scrollTo(0, 0);
      document.addEventListener("keydown", handleKey);
    } else {
      if (props.isSearch) {
        setFocusIndex(-2);
        setSearch("");
      }

      document.removeEventListener("keydown", handleKey);
    }
  }, [open]);

  return (
    <div
      className={`w-full flex-1 relative ${
        props.dark ? "text-white" : "text-soft-black"
      }`}
    >
      <button
        type='button'
        className={`w-full py-3 px-8 h-full focus:outline-none flex justify-between relative items-center space-x-2 border-2 border-main-blue border-opacity-90 rounded-full ${
          props.disabled ? "cursor-not-allowed" : ""
        }`}
        onClick={(e) => {
          handleOpen(e);
        }}
        ref={parentRef}
        disabled={props.disabled}
      >
        <div className='flex flex-col '>
          <label
            className='text-xs text-dark-blue text-opacity-60'
            htmlFor='institution_name'
          >
            Kategori Lembaga
          </label>

          <p
            className={`${
              props.fontSize ? props.fontSize : "text-sm"
            } truncate text-left text-main-blue`}
          >
            {props.value.label ? props.value.label : props.placeholder}
          </p>
        </div>
        <IoMdArrowDropdown />
      </button>
      <div
        className={`${
          open
            ? "max-h-64 shadow-md overflow-auto p-2 border-2 border-main-blue border-opacity-90 rounded-2xl"
            : "max-h-0 overflow-hidden"
        } hide-scrollbar ease-in transform duration-300 w-full h-auto absolute flex flex-col top-20 z-50  bg-white`}
        ref={itemsRef}
      >
        {props.isSearch ? (
          <input
            className='w-full bg-white h-10 my-2 flex-shrink-0 focus:outline-none leading-none font-main px-3 rounded-md ring-gray-200 ring-1 focus:ring-main-red'
            placeholder={"Cari " + props.placeholder}
            ref={searchRef}
            type='text'
            value={search}
            onInput={handleSearch}
          />
        ) : null}
        <div className='w-full space-y-2'>
          {open
            ? filterItems.map((item, i) => (
                <SelectItem
                  dark={props.dark}
                  currentValue={
                    props.value.label ? props.value.label : props.placeholder
                  }
                  key={i}
                  index={i}
                  value={item.value}
                  label={item.label}
                  //   highlight={item.highlight}
                  onClick={({ value, label }) => {
                    props.onChange({ value: value, label: label });
                    setOpen(false);
                  }}
                  focusIndex={focusIndex}
                />
              ))
            : null}
        </div>
      </div>
      {open && (
        <div
          className='w-screen h-screen top-0 left-0 bg-transparent fixed z-10'
          onClick={() => {
            setOpen(false);
          }}
        ></div>
      )}
    </div>
  );
};

export default Select;
