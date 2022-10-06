import create from "zustand";
import { v4 as uuidv4 } from "uuid";
import { getDeepObjectValue } from "../utils/function";

export const useAdvanceFilter = create((set, get) => ({
  filterObject: {},
  setFilterObject: (item) => set({ filterObject: item }),
  addFilterMain: (el) => {
    let generateId = uuidv4();
    let item = { [generateId]: { column: el } };
    set({ filterObject: { ...get().filterObject, ...item } });
  },
  addGroupMain: (el) => {
    let generateId = uuidv4();
    let item = { [generateId]: { group: el, members: {} } };
    set({ filterObject: { ...get().filterObject, ...item } });
  },
  addFilterItem: (el, filterItemId) => {
    let newFilterObj = { ...get().filterObject };
    let generateId = uuidv4();
    newFilterObj[filterItemId]["members"][generateId] = {
      column: el,
      parents: [filterItemId],
    };
    set({ filterObject: { ...newFilterObj } });
  },
  addGroupItem: (el, filterItemId) => {
    let newFilterObj = { ...get().filterObject };
    let generateId = uuidv4();
    newFilterObj[filterItemId]["members"][generateId] = {
      group: el,
      parents: [filterItemId],
      members: {},
    };
    set({ filterObject: { ...newFilterObj } });
  },
  addFilterItemNested: (el, memberId, memberValue) => {
    let newFilterObj = { ...get().filterObject };
    let generateId = uuidv4();
    let keyPath = [];
    memberValue["parents"].forEach((el) => keyPath.push(el, "members"));
    const deepObjValue = getDeepObjectValue(
      newFilterObj,
      keyPath.toString().replace(/,/g, ".")
    );
    deepObjValue[0][memberId]["members"][generateId] = {
      column: el,
      parents: [...memberValue["parents"], memberId],
    };
    set({ filterObject: { ...newFilterObj } });
  },
  addGroupItemNested: (el, memberId, memberValue) => {
    let newFilterObj = { ...get().filterObject };
    let generateId = uuidv4();
    let keyPath = [];
    memberValue["parents"].forEach((el) => keyPath.push(el, "members"));
    const deepObjValue = getDeepObjectValue(
      newFilterObj,
      keyPath.toString().replace(/,/g, ".")
    );
    deepObjValue[0][memberId]["members"][generateId] = {
      group: el,
      parents: [...memberValue["parents"], memberId],
      members: {},
    };
    set({ filterObject: { ...newFilterObj } });
  },
  deleteGroup: (filterItemId) => {
    let newFilterObj = { ...get().filterObject };
    delete newFilterObj[filterItemId];
    set({ filterObject: { ...newFilterObj } });
  },
  deleteGroupNested: (memberId, memberValue) => {
    let newFilterObj = { ...get().filterObject };

    let keyPath = [];
    memberValue["parents"].forEach((el) => keyPath.push(el, "members"));
    const deepObjValue = getDeepObjectValue(
      newFilterObj,
      keyPath.toString().replace(/,/g, ".")
    );
    delete deepObjValue[0][memberId];

    set({ filterObject: { ...newFilterObj } });
  },
}));
