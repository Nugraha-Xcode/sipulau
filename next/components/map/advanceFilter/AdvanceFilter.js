import { Popover } from "@headlessui/react";
import { useTranslation } from "next-i18next";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import shallow from "zustand/shallow";
import { useAdvanceFilter } from "../../../hooks";
import Button from "../../core/Button";
import FilterItem from "./FilterItem";
import FilterGroupItem from "./FilterGroupItem";

const AdvanceFilter = ({ handleClose }) => {
  const { t } = useTranslation("attributetable");
  const [filterItem, setFilterItem] = useAdvanceFilter(
    (state) => [state.filterItem, state.setFilterItem],
    shallow
  );

  const columnsList = [
    { label: t("column1"), value: "fid" },
    { label: t("column14"), value: "id_toponim" },
    { label: t("column2"), value: "id_wilayah" },
    { label: t("column3"), value: "nammap" },
    { label: t("column13"), value: "alias" },
    { label: t("column17"), value: "beforename" },
    { label: t("column4"), value: "artinam" },
    { label: t("column5"), value: "aslbhs" },
    { label: t("column6"), value: "sjhnam" },
    { label: t("column8"), value: "wadmkd" },
    { label: t("column7"), value: "wadmkc" },
    { label: t("column9"), value: "wadmkk" },
    { label: t("column10"), value: "wadmpr" },
    { label: t("column11"), value: "status" },
    { label: t("column12"), value: "remark" },
    { label: t("column15"), value: "luas" },
    { label: t("column16"), value: "pjg_gp" },
  ];

  const groupList = [
    { label: "AND", value: "_and" },
    { label: "OR", value: "_or" },
  ];

  // const a = {
  //   _and: [
  //     { berita_id: { _eq: null } },
  //     { _and: [{ _or: [] }, { berita_id: { _eq: null } }] },
  //   ],
  // };

  const a = {
    _and: [{ berita_id: { _eq: "1" } }, { berita_id: { _eq: "2" } }],
  };

  // const b = {
  //   _and: [
  //     { judul_eng: { _contains: "Mapping" } },
  //     { _and: [] },
  //     { judul_idn: { _contains: "Mapping natur" } },
  //   ],
  // };

  // const d = {
  //   _and: [
  //     { date_updated: { _contains: null } },
  //     {
  //       _and: [
  //         { pratinjau_isi_idn: { _contains: null } },
  //         { user_created: { _eq: null } },
  //       ],
  //     },
  //   ],
  // };

  //advance filter testing

  const myObject = {
    aaaaa: {
      value: 1,
      group: "AND",
      members: {
        ddddd: {
          column: { label: "dddd", value: "dddd" },
          operator: { label: "dddd", value: "dddd" },
          value: 2,
          parents: ["aaaaa"],
        },
        eeee: {
          group: "AND",
          members: {
            kkkk: {
              column: { label: "kkkk", value: "kkkk" },
              operator: { label: "kkkk", value: "kkkk" },
              value: 2,
              parents: ["aaaaa", "eeee"],
            },
            fffff: {
              group: "AND",
              members: {
                ggggg: {
                  column: { label: "gggg", value: "gggg" },
                  operator: { label: "gggg", value: "gggg" },
                  value: 2,
                },
                hhhhh: {
                  column: { label: "hhhh", value: "hhhh" },
                  operator: { label: "hhhh", value: "hhhh" },
                  value: 2,
                },
              },
            },
          },
        },
      },
    },
    pppp: {
      group: "OR",
      members: {
        kkkk: {
          column: { label: "kkkk", value: "kkkk" },
          operator: { label: "kkkk", value: "kkkk" },
          value: 2,
        },
      },
      value: 2,
    },
    bbbbb: {
      column: { label: "bbbb", value: "bbbb" },
      operator: { label: "bbbb", value: "bbbb" },
      value: 2,
    },
    ccccc: {
      column: { label: "cccc", value: "cccc" },
      operator: { label: "cccc", value: "cccc" },
      value: 2,
    },
  };

  // useEffect(() => {
  //   setFilterItem(myObject);
  // }, []);

  console.log(filterItem);
  const get = (obj, ...selectors) =>
    [...selectors].map((s) =>
      s
        .replace(/\[([^\[\]]*)\]/g, ".$1.")
        .split(".")
        .filter((t) => t !== "")
        .reduce((prev, cur) => prev && prev[cur], obj)
    );

  // const handleGroup = (groupId, members) => {
  //   return Object.entries(members).map((membersEl) => {
  //     if (membersEl[1]["group"]) {
  //       return (
  //         <div style={{ marginLeft: "10px" }}>
  //           <div>{membersEl[1]["group"]}</div>
  //           {handleGroup(membersEl[0], membersEl[1]["members"])}
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div
  //           className=''
  //           style={{ marginLeft: "10px" }}
  //           onClick={() => {
  //             const newFilterItem = { ...filterItem };
  //             let a = [];
  //             membersEl[1]["parents"].forEach((el) => a.push(el, "members"));
  //             const b = get(newFilterItem, a.toString().replace(/,/g, "."));
  //             b[0][membersEl[0]]["column"] = {
  //               label: "test",
  //               value: "test",
  //             };
  //             setFilterItem({ ...newFilterItem });
  //           }}
  //         >
  //           {membersEl[0]}
  //         </div>
  //       );
  //     }
  //   });
  // };

  // const display = () =>
  //   Object.entries(filterItem).map((filterItemEl) => {
  //     if (filterItemEl[1]["group"]) {
  //       return (
  //         <>
  //           <div>{filterItemEl[1]["group"]}</div>
  //           {handleGroup(filterItemEl[0], filterItemEl[1]["members"])}
  //         </>
  //       );
  //     } else {
  //       return (
  //         <div
  //           onClick={() => {
  //             const newFilterItem = { ...filterItem };
  //             newFilterItem[filterItemEl[0]]["column"] = {
  //               label: "test",
  //               value: "test",
  //             };
  //             setFilterItem({ ...newFilterItem });
  //           }}
  //         >
  //           {filterItemEl[0]}
  //         </div>
  //       );
  //     }
  //   });

  const handleGroupFilter = (groupId, members) => (
    <div className='flex flex-col'>
      {Object.entries(members).map((membersEl) => {
        let memberId = membersEl[0];
        let memberValue = membersEl[1];
        if (memberValue["group"]) {
          return (
            <div style={{ marginLeft: "16px" }}>
              <div className='flex items-center gap-2'>
                <div className='text-gray-600'>
                  {memberValue["group"]["label"]}
                </div>
                <Popover className='relative flex items-center'>
                  <Popover.Button className='text-blue-500 text-[10px] focus:outline-none'>
                    + Add Filter
                  </Popover.Button>
                  <Popover.Panel className='absolute z-10'>
                    {({ close }) => (
                      <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll rounded-[8px] py-2 text-gray-600 border text-xs border-gray-600 bg-white'>
                        {columnsList.map((columnEl) => (
                          <button
                            className='text-left hover:bg-[#F2F2F2] px-4 py-2'
                            onClick={() => {
                              let current = { ...filterItem };
                              let generateId = uuidv4();
                              let objectPathArray = [];
                              memberValue["parents"].forEach((el) =>
                                objectPathArray.push(el, "members")
                              );
                              const objectPath = get(
                                current,
                                objectPathArray.toString().replace(/,/g, ".")
                              );
                              if (objectPath[0][memberId]["members"]) {
                                let currentMembers = {
                                  ...objectPath[0][memberId]["members"],
                                };

                                currentMembers[generateId] = {};
                                currentMembers[generateId]["column"] = columnEl;
                                currentMembers[generateId]["parents"] = [
                                  ...memberValue["parents"],
                                  memberId,
                                ];

                                objectPath[0][memberId]["members"] = {
                                  ...currentMembers,
                                };
                                setFilterItem({ ...current });
                              } else {
                                objectPath[0][memberId]["members"] = {};
                                objectPath[0][memberId]["members"][generateId] =
                                  {};
                                objectPath[0][memberId]["members"][generateId][
                                  "column"
                                ] = columnEl;
                                objectPath[0][memberId]["members"][generateId][
                                  "parents"
                                ] = [...memberValue["parents"], memberId];
                                setFilterItem({ ...current });
                              }
                              close();
                            }}
                          >
                            {columnEl.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </Popover.Panel>
                </Popover>
                <Popover className='relative flex items-center'>
                  <Popover.Button className='text-blue-500 text-[10px] focus:outline-none'>
                    + Add Group
                  </Popover.Button>
                  <Popover.Panel className='absolute z-10'>
                    {({ close }) => (
                      <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll rounded-[8px] py-2 text-gray-600 border text-xs border-gray-600 bg-white'>
                        {groupList.map((el) => (
                          <button
                            className='text-left hover:bg-[#F2F2F2] px-4 py-2'
                            onClick={() => {
                              let current = { ...filterItem };
                              let generateId = uuidv4();
                              let objectPathArray = [];
                              memberValue["parents"].forEach((el) =>
                                objectPathArray.push(el, "members")
                              );
                              const objectPath = get(
                                current,
                                objectPathArray.toString().replace(/,/g, ".")
                              );

                              if (objectPath[0][memberId]["members"]) {
                                console.log("udah ada");
                                let currentMembers = {
                                  ...objectPath[0][memberId]["members"],
                                };

                                currentMembers[generateId] = {};
                                currentMembers[generateId]["group"] = el;
                                currentMembers[generateId]["parents"] = [
                                  ...memberValue["parents"],
                                  memberId,
                                ];

                                objectPath[0][memberId]["members"] = {
                                  ...currentMembers,
                                };
                                setFilterItem({ ...current });
                              } else {
                                objectPath[0][memberId]["members"] = {};
                                objectPath[0][memberId]["members"][generateId] =
                                  {};
                                objectPath[0][memberId]["members"][generateId][
                                  "group"
                                ] = el;
                                objectPath[0][memberId]["members"][generateId][
                                  "parents"
                                ] = [...memberValue["parents"], memberId];
                                setFilterItem({ ...current });
                              }
                              close();
                            }}
                          >
                            {el.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </Popover.Panel>
                </Popover>
                <button
                  className='text-blue-500 text-[10px] focus:outline-none'
                  onClick={() => {
                    let current = { ...filterItem };

                    let objectPathArray = [];
                    memberValue["parents"].forEach((el) =>
                      objectPathArray.push(el, "members")
                    );
                    const objectPath = get(
                      current,
                      objectPathArray.toString().replace(/,/g, ".")
                    );
                    delete objectPath[0][memberId];

                    setFilterItem({ ...current });
                  }}
                >
                  Delete
                </button>
              </div>
              {memberValue["members"] &&
                handleGroupFilter(memberId, memberValue["members"])}
            </div>
          );
        } else {
          return (
            <div style={{ marginLeft: "16px" }}>
              <FilterGroupItem
                key={memberId}
                id={memberId}
                item={memberValue}
              />
            </div>
          );
        }
      })}
    </div>
  );

  const renderFilterItem = () => (
    <div className='flex flex-col mt-5'>
      {Object.entries(filterItem).map((filterItemEl) => {
        let filterItemId = filterItemEl[0];
        let filterItemValue = filterItemEl[1];
        if (filterItemValue["group"]) {
          return (
            <>
              <div className='flex items-center gap-2'>
                <p className='text-gray-600'>
                  {filterItemValue["group"]["label"]}
                </p>
                <Popover className='relative flex items-center'>
                  <Popover.Button className='text-blue-500 text-[10px] focus:outline-none'>
                    + Add Filter
                  </Popover.Button>
                  <Popover.Panel className='absolute z-10'>
                    {({ close }) => (
                      <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll rounded-[8px] py-2 text-gray-600 border text-xs border-gray-600 bg-white'>
                        {columnsList.map((columnEl) => (
                          <button
                            className='text-left hover:bg-[#F2F2F2] px-4 py-2'
                            onClick={() => {
                              let current = { ...filterItem };
                              let generateId = uuidv4();
                              if (current[filterItemId]["members"]) {
                                let currentMembers = {
                                  ...current[filterItemId]["members"],
                                };
                                currentMembers[generateId] = {};
                                currentMembers[generateId]["column"] = columnEl;
                                currentMembers[generateId]["parents"] = [
                                  filterItemId,
                                ];
                                current[filterItemId]["members"] = {
                                  ...currentMembers,
                                };
                                setFilterItem({ ...current });
                              } else {
                                current[filterItemId]["members"] = {};

                                current[filterItemId]["members"][generateId] =
                                  {};
                                current[filterItemId]["members"][generateId][
                                  "column"
                                ] = columnEl;
                                current[filterItemId]["members"][generateId][
                                  "parents"
                                ] = [filterItemId];
                                setFilterItem({ ...current });
                              }

                              close();
                            }}
                          >
                            {columnEl.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </Popover.Panel>
                </Popover>
                <Popover className='relative flex items-center'>
                  <Popover.Button className='text-blue-500 text-[10px] focus:outline-none'>
                    + Add Group
                  </Popover.Button>

                  <Popover.Panel className='absolute z-10'>
                    {({ close }) => (
                      <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll rounded-[8px] py-2 text-gray-600 border text-xs border-gray-600 bg-white'>
                        {groupList.map((el) => (
                          <button
                            className='text-left hover:bg-[#F2F2F2] px-4 py-2'
                            onClick={() => {
                              let current = { ...filterItem };
                              let generateId = uuidv4();

                              if (current[filterItemId]["members"]) {
                                let currentMembers = {
                                  ...current[filterItemId]["members"],
                                };

                                currentMembers[generateId] = {};
                                currentMembers[generateId]["group"] = el;
                                currentMembers[generateId]["parents"] = [
                                  filterItemId,
                                ];
                                current[filterItemId]["members"] = {
                                  ...currentMembers,
                                };
                                setFilterItem({ ...current });
                              } else {
                                current[filterItemId]["members"] = {};

                                current[filterItemId]["members"][generateId] =
                                  {};
                                current[filterItemId]["members"][generateId][
                                  "group"
                                ] = el;
                                current[filterItemId]["members"][generateId][
                                  "parents"
                                ] = [filterItemId];
                                setFilterItem({ ...current });
                              }
                              close();
                            }}
                          >
                            {el.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </Popover.Panel>
                </Popover>
                <button
                  className='text-blue-500 text-[10px] focus:outline-none'
                  onClick={() => {
                    const newFilterItem = { ...filterItem };

                    delete newFilterItem[filterItemId];

                    setFilterItem({ ...newFilterItem });
                  }}
                >
                  Delete
                </button>
              </div>
              {filterItemValue["members"] &&
                handleGroupFilter(filterItemId, filterItemValue["members"])}
            </>
          );
        } else {
          return (
            <FilterItem
              key={filterItemId}
              id={filterItemId}
              item={filterItemValue}
            />
          );
        }
      })}
    </div>
  );

  return (
    <div className='py-3 px-6 min-h-[18rem]'>
      <div className='flex items-center justify-between'>
        <p>Filter</p>
        <button className='focus:outline-none' onClick={handleClose}>
          <img src='/images/ic-close.svg' alt='close' />
        </button>
      </div>
      <hr />

      {Object.keys(filterItem).length > 0 && renderFilterItem()}

      <div className='mt-5 flex flex-col gap-2'>
        <div className='flex justify-center'>
          <Popover className='relative'>
            <Popover.Button className='text-blue-500 text-sm focus:outline-none'>
              + Add Group
            </Popover.Button>

            <Popover.Panel className='absolute z-10'>
              {({ close }) => (
                <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll rounded-[8px] text-gray-600 border text-xs border-gray-600 bg-white'>
                  {groupList.map((el) => (
                    <button
                      className='text-left hover:bg-[#F2F2F2] px-4 py-2'
                      onClick={() => {
                        let item = {};
                        let generateId = uuidv4();
                        item[generateId] = {};
                        item[generateId]["group"] = el;
                        if (Object.keys(filterItem).length > 0) {
                          setFilterItem({ ...filterItem, ...item });
                        } else {
                          setFilterItem({ ...item });
                        }
                        close();
                      }}
                    >
                      {el.label}
                    </button>
                  ))}
                </div>
              )}
            </Popover.Panel>
          </Popover>
        </div>

        <div className='flex justify-center'>
          <Popover className='relative'>
            <Popover.Button className='text-blue-500 text-sm focus:outline-none'>
              + Add Filter
            </Popover.Button>

            <Popover.Panel className='absolute z-10'>
              {({ close }) => (
                <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll rounded-[8px] py-2 text-gray-600 border text-xs border-gray-600 bg-white'>
                  {columnsList.map((el) => (
                    <button
                      className='text-left hover:bg-[#F2F2F2] px-4 py-2'
                      onClick={() => {
                        let item = {};
                        let generateId = uuidv4();
                        item[generateId] = {};
                        item[generateId]["column"] = el;
                        if (Object.keys(filterItem).length > 0) {
                          setFilterItem({ ...filterItem, ...item });
                        } else {
                          setFilterItem({ ...item });
                        }
                        close();
                      }}
                    >
                      {el.label}
                    </button>
                  ))}
                </div>
              )}
            </Popover.Panel>
          </Popover>
        </div>

        <Button
          variant='normal'
          isActive={true}
          onClick={() => {
            console.log(filterItem);
          }}
        >
          Set Filter
        </Button>

        {Object.keys(filterItem).length > 0 && (
          <Button
            variant='outline'
            isActive={false}
            onClick={() => {
              setFilterItem({});
            }}
          >
            Reset Filter
          </Button>
        )}
        <div className='h-5' />
      </div>
    </div>
  );
};

export default AdvanceFilter;
