export default function isValidMultiPolygonGeom(aoi) {
  if (aoi.type !== "MultiPolygon" || !Array.isArray(aoi.coordinates)) {
    return false;
  }
  for (const polyGeom of aoi.coordinates) {
    if (
      !Array.isArray(polyGeom) ||
      (polyGeom.length !== 1 && polyGeom.length !== 2)
    ) {
      return false;
    }
    for (const polyDetails of polyGeom) {
      for (const polyCoords of polyDetails) {
        if (
          polyCoords.length !== 2 ||
          typeof polyCoords[0] !== "number" ||
          typeof polyCoords[1] !== "number"
        ) {
          return false;
        }
      }
    }
  }
  return true;
}
