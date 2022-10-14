import React, {
  useContext,
  useCallback,
  useState,
  useEffect,
  useRef,
} from "react";
import * as turf from "@turf/turf";
import shallow from "zustand/shallow";
import AppContext from "../../../context/AppContext";
import MapContext from "../../../context/MapContext";
import { useAuth, useComment } from "../../../hooks";
import { useNav } from "../../../hooks/useNav";
import AddCommentForm from "../popup/AddCommentForm";
import { AboutContent, Searchbar } from "../sidebar-content";
import SearchResult from "./SearchResult";
import Button from "../../core/Button";
import useDebounce from "../../../hooks/useDebounce";

const SearchIsland = () => {
  const { map } = useContext(MapContext);
  const { handleSetSnack } = useContext(AppContext);
  const timeoutRef = useRef(null);
  const authToken = useAuth((state) => state.authToken);
  const [setActiveSideFeature, activeSideFeature] = useNav(
    (state) => [state.setActiveSideFeature, state.activeSideFeature],
    shallow
  );
  const [coor, setCoor, setType] = useComment(
    (state) => [state.coor, state.setCoor, state.setType],
    shallow
  );
  const [searchResult, setSearchResult] = useState([]);
  const [suggestList, setSuggestList] = useState([]);
  const [isCommentButton, setCommentButton] = useState(false);
  const [inputRadius, setInputRadius] = useState(5000);
  const debounceinputRadius = useDebounce(inputRadius, 1000);

  // this is for input value state
  const [value, setValue] = React.useState("");
  const [isSearchLocation, setIsSearchLocation] = React.useState(false);

  //   this is for dummy image
  // const dummy = [
  //   { image: "/images/dummy-slider.png" },
  //   { image: "/images/thumbnail-rupabumi.jpg" },
  //   { image: "/images/dummy-slider.png" },
  //   { image: "/images/dummy-slider.png" },
  // ];

  const getSuggestList = useCallback(async () => {
    try {
      const params = new URLSearchParams({
        keyword: value,
      });
      const response = await fetch("/api/titik-pulau/suggestion?" + params, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + authToken,
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (response.status === 200) {
        setSuggestList(result);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  }, [value]);

  const getPulauBuffer = useCallback(async (point, radius) => {
    try {
      const params = new URLSearchParams({
        point: point,
        radius: radius,
      });
      const response = await fetch("/api/titik-pulau?" + params, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + authToken,
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (response.status === 200) {
        setSearchResult(result);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  }, []);

  const getPulau = useCallback(async (searchValue) => {
    try {
      setCoor({});
      setType(null);
      map.getSource("comment-point").setData({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [],
        },
      });
      setCommentButton(false);
      const params = new URLSearchParams({
        page: 1,
        ordby: "nammap",
        orddir: "ASC",
        nammap: searchValue,
      });
      const response = await fetch("/api/titik-pulau?" + params, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + authToken,
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (response.status === 200) {
        setSearchResult(result);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  }, []);

  const handleAddPoint = () => {
    setSearchResult([]);
    setCommentButton(true);
    let latLong = value.replace(/\s/g, "").split(",");
    getPulauBuffer(latLong[1] + "," + latLong[0], inputRadius || 0);
    map.flyTo({
      center: [latLong[1], latLong[0]],
      zoom: 12.5,
      padding: {
        left: 400,
      },
    });

    let radius = (inputRadius || 0) / 1000;
    let options = {
      units: "kilometers",
    };
    let circle = turf.circle([latLong[1], latLong[0]], radius, options);

    map.getSource("comment-point").setData({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [latLong[1], latLong[0]],
          },
        },
        circle,
      ],
    });
  };

  useEffect(() => {
    if (!map.getSource("comment-point")) {
      map.addSource("comment-point", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [],
              },
            },
          ],
        },
      });
      map.loadImage("/images/marker-point.png", function (error, image) {
        if (error) throw error;
        map.addImage("marker-comment", image);
      });
      map.addLayer({
        id: "comment-point",
        type: "symbol",
        source: "comment-point",
        layout: {
          "icon-image": "marker-comment",
          "icon-size": 0.2,
        },
        filter: ["==", "$type", "Point"],
      });
      map.addLayer({
        id: "comment-point-fill",
        type: "fill",
        source: "comment-point",
        paint: {
          "fill-color": "#4086EF",
          "fill-opacity": 0.4,
        },
        filter: ["==", "$type", "Polygon"],
      });
    }

    return () => {
      if (window.location.pathname === "/map") {
        map.hasImage("marker-comment") && map.removeImage("marker-comment");
        map.getLayer("comment-point") && map.removeLayer("comment-point");
        map.getLayer("comment-point-fill") &&
          map.removeLayer("comment-point-fill");
        map.getSource("comment-point") && map.removeSource("comment-point");
      }
    };
  }, []);

  useEffect(() => {
    if (isSearchLocation) {
      if (debounceinputRadius && debounceinputRadius > 0) {
        if (debounceinputRadius <= 100000) {
          handleAddPoint();
        } else {
          handleSetSnack("Maksimum radius 100.000 meter", "error");
        }
      } else {
        handleSetSnack("Radius tidak valid", "error");
      }
    }
  }, [isSearchLocation, debounceinputRadius]);

  useEffect(() => {
    //cleanup
    return () => {
      setType(null);
      setCoor({});
    };
  }, []);

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      if (value !== "") {
        let inputArray = value.replace(/\s/g, "").split(",");
        if (
          inputArray.length === 2 &&
          Boolean(parseFloat(inputArray[0])) &&
          Boolean(parseFloat(inputArray[1]))
        ) {
          setIsSearchLocation(true);
        } else {
          getSuggestList();
          setIsSearchLocation(false);
        }
      }
    }, 500);
  }, [value]);
  return (
    <div
      id='side-feature-content'
      className='flex h-full flex-col px-4 pt-20 pb-6 dark:bg-gray-800'
    >
      <div>
        <div className='flex items-center justify-between '>
          <p className='text-gray-800 dark:text-gray-100'>
            {activeSideFeature?.label || ""}
          </p>
          <button onClick={() => setActiveSideFeature(null)}>
            <img src='/images/ic-close.svg' alt='close button' className='' />
          </button>
        </div>
        <hr className='my-3 text-gray-200' />
      </div>
      <div className='flex flex-1 flex-col gap-2 overflow-y-auto'>
        {/* open the searchbar component for initialize the api and loop the suggestion component  */}
        <Searchbar
          value={value}
          setValue={setValue}
          getPulau={getPulau}
          setSuggestList={setSuggestList}
          handleChangesValue={(e) => {
            setValue(e.target.value);
          }}
          handleClearValue={() => {
            map.getSource("comment-point").setData({
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [],
              },
            });
            setValue("");
            setCommentButton(false);
            setCoor({});
            setType(null);
            setSuggestList([]);
          }}
          onSearch={() => {
            if (isSearchLocation) {
              handleAddPoint();
            } else {
              getPulau(value);
            }
          }}
          suggestList={suggestList}
        />
        {isCommentButton && Object.keys(coor).length === 0 && (
          <>
            <div className='w-full flex border-[1px] h-10 items-center px-2 border-gray-400 rounded-[10px] gap-2'>
              <input
                type='number'
                value={inputRadius}
                placeholder='Set buffer area (m)'
                onChange={(e) => setInputRadius(e.target.value)}
                className='w-full h-full text-xs border-0 focus:ring-0'
              />
              <p className='text-gray-500 text-xs mr-3'>meter</p>
            </div>
            <Button
              className='text-sm'
              variant='outline'
              onClick={() => {
                let latLong = value.replace(/\s/g, "").split(",");
                setCoor({
                  lng: parseFloat(latLong[1]),
                  lat: parseFloat(latLong[0]),
                });
              }}
            >
              Add Comment
            </Button>
          </>
        )}
        {Object.keys(coor).length !== 0 && (
          <AddCommentForm
            onClose={() => {
              setCoor({});
              setType(null);
            }}
          />
        )}
        {/* loop this component  */}
        {searchResult.length > 0 && !Object.keys(coor).length
          ? searchResult.map((el) => <SearchResult key={el.fid} item={el} />)
          : null}
      </div>

      <div className='mt-2 rounded-[4px] bg-gray-50 p-2 dark:bg-gray-700'>
        {/* pass onClose props for button close  */}
        <AboutContent header='About Search'>
          You may search by a specific keyword or coordinate.
        </AboutContent>
      </div>
    </div>
  );
};

export default SearchIsland;
