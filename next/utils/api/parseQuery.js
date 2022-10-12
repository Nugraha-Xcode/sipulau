import isValidMultiPolygonGeom from "./isValidMultiPolygonGeom";

export class QueryError extends Error {}

export const validColumns = [
  "fid",
  "id_toponim",
  "nammap",
  "alias",
  "artinam",
  "sjhnam",
  "aslbhs",
  "id_wilayah",
  "wadmkd",
  "wadmkc",
  "wadmkk",
  "wadmpr",
  "status",
  "remark",
  "pjg_gp",
  "luas",
  "nambef",
];

const sqlQuoteLiteral = (value) => {
  if (typeof value === "string") {
    value = "'" + value.replace(/'/g, "''") + "'";
  } else if (value === true) {
    value = "TRUE";
  } else if (value === false) {
    value = "FALSE";
  } else if (value === undefined || value === null) {
    value = "NULL";
  }
  return value;
};

const arraySqlQuoteLiteral = (value, operator, columnName) => {
  if (!Array.isArray(value) || value.length === 0) {
    throw new QueryError(
      `${operator} operator must contains array of values. Location: ${columnName}`
    );
  }
  return value.map(sqlQuoteLiteral);
};

const generateParamArr = (value, filterOpts, operator, columnName) => {
  if (!Array.isArray(value) || value.length === 0) {
    throw new QueryError(
      `${operator} operator must contains array of values. Location: ${columnName}`
    );
  }
  const paramArr = [];
  let newParam = filterOpts.filterParam;
  for (const el of value) {
    paramArr.push(`$${newParam++}`);
    filterOpts.filterValues.push(el);
  }
  // update parent filterOpts
  filterOpts.filterParam = newParam;
  return paramArr;
};

const columnParser = (queryObj, columnName, filterOpts) => {
  const queryObjKeys = Object.keys(queryObj);
  if (
    typeof queryObj !== "object" ||
    Array.isArray(queryObj) ||
    queryObjKeys.length !== 1
  ) {
    throw new QueryError(
      "Column query must be object with single operator key (_eq, _lte, etc.)"
    );
  }
  const operator = queryObjKeys[0];
  const value = queryObj[operator];

  // array values
  if (operator === "_in" || operator === "_nin") {
    let directive = "";

    switch (operator) {
      case "_in":
        directive = "IN";
        break;

      case "_nin":
        directive = "NOT IN";
        break;

      default:
        throw new Error("How do we get here?");
    }
    // push filter directive
    if (filterOpts.unparameterized) {
      filterOpts.filterDirectives.push(
        `${columnName} ${directive} (${arraySqlQuoteLiteral(
          value,
          operator,
          columnName
        )})`
      );
    } else {
      filterOpts.filterDirectives.push(
        `${columnName} ${directive} (${generateParamArr(
          value,
          filterOpts,
          operator,
          columnName
        )})`
      );
    }
  } else {
    if (filterOpts.unparameterized) {
      switch (operator) {
        case "_eq":
          filterOpts.filterDirectives.push(
            `${columnName} = ${sqlQuoteLiteral(value)}`
          );
          break;

        case "_neq":
          filterOpts.filterDirectives.push(
            `${columnName} != ${sqlQuoteLiteral(value)}`
          );
          break;

        case "_lt":
          filterOpts.filterDirectives.push(
            `${columnName} < ${sqlQuoteLiteral(value)}`
          );
          break;

        case "_lte":
          filterOpts.filterDirectives.push(
            `${columnName} <= ${sqlQuoteLiteral(value)}`
          );
          break;

        case "_gt":
          filterOpts.filterDirectives.push(
            `${columnName} > ${sqlQuoteLiteral(value)}`
          );
          break;

        case "_gte":
          filterOpts.filterDirectives.push(
            `${columnName} >= ${sqlQuoteLiteral(value)}`
          );
          break;

        case "_null":
          filterOpts.filterDirectives.push(`${columnName} IS NULL`);
          break;

        case "_nnull":
          filterOpts.filterDirectives.push(`${columnName} IS NOT NULL`);
          break;

        case "_contains":
          filterOpts.filterDirectives.push(
            `${columnName} ILIKE ${sqlQuoteLiteral("%" + value + "%")}`
          );
          break;

        case "_ncontains":
          filterOpts.filterDirectives.push(
            `${columnName} NOT ILIKE ${sqlQuoteLiteral("%" + value + "%")}`
          );
          break;

        default:
          throw new QueryError(`Invalid operator ${operator} in ${columnName}`);
      }
    } else {
      let newParam = filterOpts.filterParam;
      switch (operator) {
        case "_eq":
          filterOpts.filterValues.push(value);
          filterOpts.filterDirectives.push(`${columnName} = $${newParam++}`);
          break;

        case "_neq":
          filterOpts.filterValues.push(value);
          filterOpts.filterDirectives.push(`${columnName} != $${newParam++}`);
          break;

        case "_lt":
          filterOpts.filterValues.push(value);
          filterOpts.filterDirectives.push(`${columnName} < $${newParam++}`);
          break;

        case "_lte":
          filterOpts.filterValues.push(value);
          filterOpts.filterDirectives.push(`${columnName} <= $${newParam++}`);
          break;

        case "_gt":
          filterOpts.filterValues.push(value);
          filterOpts.filterDirectives.push(`${columnName} > $${newParam++}`);
          break;

        case "_gte":
          filterOpts.filterValues.push(value);
          filterOpts.filterDirectives.push(`${columnName} >= $${newParam++}`);
          break;

        case "_null":
          filterOpts.filterDirectives.push(`${columnName} IS NULL`);
          break;

        case "_nnull":
          filterOpts.filterDirectives.push(`${columnName} IS NOT NULL`);
          break;

        case "_contains":
          filterOpts.filterValues.push(`%${value}%`);
          filterOpts.filterDirectives.push(
            `${columnName} ILIKE $${newParam++}`
          );
          break;

        case "_ncontains":
          filterOpts.filterValues.push(`%${value}%`);
          filterOpts.filterDirectives.push(
            `${columnName} NOT ILIKE $${newParam++}`
          );
          break;

        default:
          throw new QueryError(`Invalid operator ${operator} in ${columnName}`);
      }
      // update parent filterOpts
      filterOpts.filterParam = newParam;
    }
  }
};

const geomColumnParser = (queryObj, columnName, filterOpts) => {
  const queryObjKeys = Object.keys(queryObj);
  if (
    typeof queryObj !== "object" ||
    Array.isArray(queryObj) ||
    queryObjKeys.length !== 1
  ) {
    throw new QueryError(
      "Column query must be object with single operator key (e.g. _within)"
    );
  }
  const operator = queryObjKeys[0];
  const value = queryObj[operator];

  let newParam = filterOpts.filterParam;
  if (operator === "_within" || operator === "_nwithin") {
    if (isValidMultiPolygonGeom(value)) {
      if (filterOpts.unparameterized) {
        filterOpts.filterDirectives.push(
          `${
            operator === "_nwithin" ? "NOT " : ""
          }ST_Within(geom, ST_GeomFromGeoJSON(${sqlQuoteLiteral(
            JSON.stringify(value)
          )}))`
        );
      } else {
        filterOpts.filterValues.push(value);
        filterOpts.filterDirectives.push(
          `${
            operator === "_nwithin" ? "NOT " : ""
          }ST_Within(geom, ST_GeomFromGeoJSON($${newParam++}))`
        );
      }
    } else {
      throw new QueryError(
        `${operator} operator must provide a valid MultiPolygon GeoJSON`
      );
    }
  } else if (operator === "_within_bbox" || operator === "_nwithin_bbox") {
    if (!Array.isArray(value) || value.length !== 4) {
      throw new QueryError(
        `${operator} operator must provide array [xmin, ymin, xmax, ymax]`
      );
    }
    const [xmin, ymin, xmax, ymax] = value;
    if (
      typeof xmin !== "number" ||
      typeof ymin !== "number" ||
      typeof xmax !== "number" ||
      typeof ymax !== "number" ||
      xmin < -180 ||
      xmin > 180 ||
      xmax < -180 ||
      xmax > 180 ||
      ymin < -90 ||
      ymin > 90 ||
      ymax < -90 ||
      ymax > 90 ||
      xmin > xmax ||
      ymin > ymax
    ) {
      throw new QueryError("Invalid bbox");
    }
    if (filterOpts.unparameterized) {
      filterOpts.filterDirectives.push(
        `${
          operator === "_nwithin_bbox" ? "NOT " : ""
        }geom && ST_MakeEnvelope(${sqlQuoteLiteral(xmin)}, ${sqlQuoteLiteral(
          ymin
        )}, ${sqlQuoteLiteral(xmax)}, ${sqlQuoteLiteral(ymax)}, 4326)`
      );
    } else {
      filterOpts.filterValues.push(xmin, ymin, xmax, ymax);
      filterOpts.filterDirectives.push(
        `${
          operator === "_nwithin_bbox" ? "NOT " : ""
        }geom && ST_MakeEnvelope($${newParam++}, $${newParam++}, $${newParam++}, $${newParam++}, 4326)`
      );
    }
  } else {
    throw new QueryError(`Invalid operator ${operator} in ${columnName}`);
  }
  // update parent filterOpts
  filterOpts.filterParam = newParam;
};

const logicalOperatorParser = (logicalOperator, queryObj, filterOpts) => {
  if (!Array.isArray(queryObj) || queryObj.length === 0) {
    throw new QueryError(
      `_and _or must contains non empty array of query object`
    );
  }
  let logicalOpSql = "";
  switch (logicalOperator) {
    case "_and":
      logicalOpSql = " AND ";
      break;

    case "_or":
      logicalOpSql = " OR ";
      break;

    default:
      throw new QueryError("Invalid logical operator");
  }
  // generate filterOpts for group
  const groupFilterOpts = { ...filterOpts, filterDirectives: [] };

  for (const child of queryObj) {
    const queryObjKeys = Object.keys(child);
    if (
      typeof child !== "object" ||
      Array.isArray(child) ||
      queryObjKeys.length !== 1
    ) {
      throw new QueryError(
        "query must be object with single key (_and/_or/{column_name})"
      );
    }
    if (queryObjKeys[0] === "_and" || queryObjKeys[0] === "_or") {
      logicalOperatorParser(
        queryObjKeys[0],
        child[queryObjKeys[0]],
        groupFilterOpts
      );
    } else if (queryObjKeys[0] === "geom") {
      geomColumnParser(
        child[queryObjKeys[0]],
        queryObjKeys[0],
        groupFilterOpts
      );
    } else if (validColumns.includes(queryObjKeys[0])) {
      columnParser(child[queryObjKeys[0]], queryObjKeys[0], groupFilterOpts);
    } else {
      throw new QueryError(`Invalid column name: ${queryObjKeys[0]}`);
    }
    // update parent filterOpts
    filterOpts.filterValues = groupFilterOpts.filterValues;
    filterOpts.filterParam = groupFilterOpts.filterParam;
  }

  // push filter directive
  filterOpts.filterDirectives.push(
    `(${groupFilterOpts.filterDirectives.join(logicalOpSql)})`
  );
};

export const parseQuery = (
  queryObj,
  filterOpts = {
    filterDirectives: [],
    filterValues: [],
    filterParam: 1,
    unparameterized: false,
  }
) => {
  const queryObjKeys = Object.keys(queryObj);
  if (
    typeof queryObj !== "object" ||
    Array.isArray(queryObj) ||
    queryObjKeys.length !== 1
  ) {
    throw new QueryError(
      "query must be object with single key (_and/_or/{column_name})"
    );
  }

  if (queryObjKeys[0] === "_and" || queryObjKeys[0] === "_or") {
    logicalOperatorParser(
      queryObjKeys[0],
      queryObj[queryObjKeys[0]],
      filterOpts
    );
  } else if (queryObjKeys[0] === "geom") {
    geomColumnParser(queryObj[queryObjKeys[0]], queryObjKeys[0], filterOpts);
  } else if (validColumns.includes(queryObjKeys[0])) {
    columnParser(queryObj[queryObjKeys[0]], queryObjKeys[0], filterOpts);
  } else {
    throw new QueryError(`Invalid column name: ${queryObjKeys[0]}`);
  }
  return filterOpts;
};
