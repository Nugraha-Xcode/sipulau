import create from "zustand";
import { v4 as uuidv4 } from "uuid";
import { getDeepObjectValue } from "../utils/function";

export const useAdvanceFilter = create((set, get) => ({
  advanceFilterQuery: { _and: [] },
  filterObject: {},
  setFilterObject: (item) => set({ filterObject: item }),
  addFilterMain: (el) => {
    let generateId = uuidv4();
    let item = {
      [generateId]: { column: el, operator: { label: "Equals", value: "_eq" } },
    };
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
      operator: { label: "Equals", value: "_eq" },
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
      operator: { label: "Equals", value: "_eq" },
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
  handleGroupQuery: (item) => {
    if (Object.values(item.members).length > 0) {
      let groupArray = [];
      for (const itemObj of Object.values(item.members)) {
        if (itemObj.group) {
          const groupQuery = get().handleGroupQuery(itemObj);
          groupArray.push(groupQuery);
        } else {
          groupArray.push({
            [itemObj.column.value]: { [itemObj.operator.value]: itemObj.value },
          });
        }
      }
      let groupObjt = { [item.group.value]: groupArray };
      return groupObjt;
    } else {
      return {
        [item.group.value]: [],
      };
    }
  },
  createQueryFilter: () => {
    if (Object.values(get().filterObject).length > 0) {
      let queryArray = [];
      for (const item of Object.values(get().filterObject)) {
        if (item.group) {
          const groupQuery = get().handleGroupQuery(item);
          queryArray.push(groupQuery);
        } else {
          queryArray.push({
            [item.column.value]: { [item.operator.value]: item.value },
          });
        }
      }
      set({ advanceFilterQuery: { _and: queryArray } });
    } else {
      set({ advanceFilterQuery: { _and: [] } });
    }
  },
}));
