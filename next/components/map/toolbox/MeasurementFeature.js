import React, { useContext, useEffect, useState, useRef } from "react";
import * as turf from "@turf/turf";
import MapContext from "../../../context/MapContext";

const MeasurementFeature = () => {
  const { map } = useContext(MapContext);
  const [length, setLength] = useState(0);
  const [area, setArea] = useState(0);
  const clickCountRef = useRef(1);
  const clearRef = useRef(false);

  const handleMouseMove = (e) => {
    let features = map.queryRenderedFeatures(e.point, {
      layers: ["measure-points"],
    });
    // UI indicator for clicking/hovering a point on the map
    map.getCanvas().style.cursor = features.length ? "pointer" : "crosshair";
  };

  useEffect(() => {
    // GeoJSON object to hold our measurement features
    let geojson = {
      type: "FeatureCollection",
      features: [],
    };

    // Used to draw a line between points
    let linestring = {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [],
      },
    };

    let polygon = {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[]],
      },
    };

    map.addSource("geojson", {
      type: "geojson",
      data: geojson,
    });

    // Add styles to the map
    map.addLayer({
      id: "measure-points",
      type: "circle",
      source: "geojson",
      paint: {
        "circle-radius": 5,
        "circle-color": "#4086EF",
      },
      filter: ["in", "$type", "Point"],
    });

    map.addLayer({
      id: "measure-lines",
      type: "line",
      source: "geojson",
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "#4086EF",
        "line-width": 2.5,
      },
      filter: ["in", "$type", "LineString"],
    });

    const handleClick = (e) => {
      let features = map.queryRenderedFeatures(e.point, {
        layers: ["measure-points"],
      });

      // Remove the linestring from the group
      // So we can redraw it based on the points collection
      if (geojson.features.length > 1) geojson.features.pop();

      // If a feature was clicked, remove it from the map
      if (features.length) {
        if (features[0].properties.clickCount === 1) {
          let point = {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: geojson.features[0].geometry.coordinates,
            },
            properties: {
              id: String(new Date().getTime()),
              clickCount: clickCountRef.current,
            },
          };
          clickCountRef.current = clickCountRef.current + 1;
          let a = geojson.features.map(function (point) {
            return point.geometry.coordinates;
          });
          polygon.geometry.coordinates = [
            [...a, geojson.features[0].geometry.coordinates],
          ];
          geojson.features.push(point);
          clearRef.current = true;
          setArea(turf.area(polygon) / 1000000);
        } else {
          let id = features[0].properties.id;
          geojson.features = geojson.features.filter(function (point) {
            return point.properties.id !== id;
          });
        }
      } else {
        if (clearRef.current === false) {
          geojson.features.push({
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [e.lngLat.lng, e.lngLat.lat],
            },
            properties: {
              id: String(new Date().getTime()),
              clickCount: clickCountRef.current,
            },
          });
          clickCountRef.current = clickCountRef.current + 1;
        } else {
          geojson.features = [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [e.lngLat.lng, e.lngLat.lat],
              },
              properties: {
                id: String(new Date().getTime()),
                clickCount: 1,
              },
            },
          ];
          clickCountRef.current = clickCountRef.current + 1;
          linestring.geometry.coordinates = [];
          polygon.geometry.coordinates = [[]];
          setLength(0);
          setArea(0);
          clearRef.current = false;
        }
      }

      if (geojson.features.length > 1) {
        linestring.geometry.coordinates = geojson.features.map(function (
          point
        ) {
          return point.geometry.coordinates;
        });

        geojson.features.push(linestring);

        setLength(turf.length(linestring));
      }

      map.getSource("geojson").setData(geojson);
    };

    map.on("click", handleClick);

    map.on("mousemove", handleMouseMove);

    return () => {
      map.getCanvas().style.cursor = "pointer";
      map.off("mousemove", handleMouseMove);
      map.off("click", handleClick);
      map.removeLayer("measure-points");
      map.removeLayer("measure-lines");
      map.removeSource("geojson");
    };
  }, []);

  return (
    <div className='flex flex-col text-gray-600 text-[10px]'>
      <div className='flex justify-between items-center'>
        <p>Distance</p>
        <p>{length.toFixed(2)} km</p>
      </div>
      <div className='flex justify-between items-center'>
        <p>Area</p>
        <p>
          {area.toFixed(2)} km<sup>2</sup>
        </p>
      </div>
    </div>
  );
};

export default MeasurementFeature;
