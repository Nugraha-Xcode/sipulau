export default function isValidMultiPolygonGeom(aoi) {
  if (aoi.type !== "MultiPolygon" || !Array.isArray(aoi.coordinates)) {
    return false;
  }
  for (const polyGeom of aoi.coordinates) {
    if (!Array.isArray(polyGeom) || polyGeom.length < 1) {
      return false;
    }
    for (const polyDetails of polyGeom) {
      if (!Array.isArray(polyDetails) || polyDetails.length < 4) {
        return false;
      }
      for (const polyCoords of polyDetails) {
        if (
          !Array.isArray(polyCoords) ||
          (polyCoords.length !== 2 && polyCoords.length !== 3) ||
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
