import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import IcAccordion from "./icons/icAccordion";

const DropdownMenu = ({
  label,
  menu,
  onSelect,
  initialValue = null,
  maxH = "max-h-72",
}) => {
  const [selected, setSelected] = useState(initialValue);

  return (
    <Popover className='relative'>
      {({ open }) => (
        <>
          <Popover.Button
            className={clsx([
              "flex w-full gap-2 h-[40px] rounded-lg text-gray-600 border-[1px] border-gray-600 items-center px-4 py-2 justify-between bg-white text-left text-xs",
              { "rounded-lg": !open, "rounded-b-none border-b-0": open },
            ])}
          >
            {selected?.label || label}
            <IcAccordion variant={open ? "up" : "down"} />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 -translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-300'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 -translate-y-1'
          >
            <Popover.Panel
              className={`absolute w-full z-10 flex flex-col border-gray-500 border-[1px] overflow-auto hide-scrollbar mb-[-8px] bg-white ${maxH} rounded-b-[8px]`}
            >
              {({ close }) =>
                menu.map((el) => (
                  <button
                    key={el.value}
                    value={el}
                    onClick={() => {
                      setSelected(el);
                      onSelect(el);
                      close();
                    }}
                    className={clsx([
                      "cursor-pointer text-sm hover:bg-[#F2F2F2] py-1 px-2 transition-all text-gray-600 text-left",
                      { "bg-[#F2F2F2]": selected?.value === el.value },
                    ])}
                  >
                    {el.label}
                  </button>
                ))
              }
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default DropdownMenu;
