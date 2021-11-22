import React, { useState, useCallback, useEffect, useRef } from "react";
import SelectItem from "./SelectItem";

const Select = (props) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [backPos, setBackPos] = useState({ x: 0, y: 0 });
  const [filterItems, setFilterItems] = useState([]);
  const parentRef = useRef(null);
  const searchRef = useRef(null);
  const itemsRef = useRef(null);
  const backRef = useRef(null);
  const [isBottom, setIsBottom] = useState(false);
  const [focusIndex, setFocusIndex] = useState(-2);
  const handleOpen = useCallback(
    (event) => {
      let toBottom =
        window.innerHeight - parentRef.current.getBoundingClientRect().y;
      let nItems = props.items.length;
      if (props.items.length > 6) {
        nItems = 6;
      }
      let dif = toBottom - nItems * 48;
      if (dif < 0) {
        setIsBottom(true);
      }
      setOpen(true);
    },
    [props.items]
  );
  const handleKey = useCallback((event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setFocusIndex((prev) => {
        if (prev > -1) return prev - 1;
        else return prev;
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

  useEffect(() => {
    if (!search.length) {
      setFilterItems(props.items);
    } else {
      let filter = props.items.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase())
      );
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
        setFocusIndex(0);
      }
      itemsRef.current.scrollTo(0, 0);
      itemsRef.current.addEventListener("keydown", handleKey);
      const { x, y } = backRef.current.getBoundingClientRect();
      if (x !== 0 || y !== 0) {
        setTimeout(() => {
          setBackPos({ x: x, y: y });
        }, 10);
      }
    } else {
      if (props.isSearch) {
        setFocusIndex(-2);
        setSearch("");
      }
      itemsRef.current.removeEventListener("keydown", handleKey);
    }
  }, [open]);

  return (
    <>
      <div className='w-full h-full relative'>
        <button
          className={`w-full h-12 px-3 focus:outline-none rounded-lg bg-white flex justify-between relative items-center space-x-2 ${
            props.disabled ? "cursor-not-allowed" : ""
          } border `}
          onClick={(e) => {
            handleOpen(e);
          }}
          ref={parentRef}
          disabled={props.disabled}
        >
          <div className='text-left'>
            {/* <p
              className={`font-paragraph ${
                props.value.label
                  ? "text-tiny -mt-2 text-text-placeholder"
                  : "text-sm text-gray-400"
              } `}
            >
              {props.placeholder}
            </p> */}
            {/* {props.value.label ? ( */}
            <p
              className={`font-paragraph ${
                props.value.label ? "text-black-2" : "text-gray-400"
              } leading-none mt-0.5 text-sm desc`}
            >
              {props.value.label || props.placeholder}
            </p>
            {/* ) : null} */}
          </div>
          <img
            src='/images/ic-arrow-b.svg'
            className='w-4 h-4'
            alt='button down'
          />
        </button>
        <div
          className={`${
            open
              ? "max-h-72 shadow-md p-2 overflow-y-auto"
              : "max-h-0 overflow-y-hidden"
          } ease-in transition-all duration-200 w-full h-auto absolute rounded-md  flex flex-col ${
            isBottom ? "bottom-0" : "top-0"
          } z-20 bg-white hide-scrollbar`}
          ref={itemsRef}
        >
          {props.isSearch ? (
            <input
              className='w-full bg-white h-12 my-2 flex-shrink-0 focus:outline-none text-base text-text-black leading-none font-paragraph px-3 rounded-md ring-gray-200 ring-1 focus:ring-main-red'
              placeholder={"Cari " + props.placeholder}
              ref={searchRef}
              type='text'
              value={search}
              onInput={(event) => setSearch(event.target.value)}
            />
          ) : null}
          <div className='w-full flex flex-col space-y-2'>
            {open
              ? filterItems.map((item, i) => (
                  <SelectItem
                    key={item.value}
                    index={i}
                    value={item.value}
                    label={item.label}
                    highlight={item.highlight}
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
      </div>
      {open && (
        <div
          className='w-screen h-screen top-0 left-0 fixed z-10 transform'
          onClick={() => {
            setOpen(false);
          }}
          ref={backRef}
          style={{
            transform:
              backPos.x !== 0 || backPos.y !== 0
                ? `translate(-${backPos.x}px, -${backPos.y}px)`
                : "none",
          }}
        ></div>
      )}
      <style>
        {`.desc {
            display: block;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          `}
      </style>
    </>
  );
};

export default Select;
