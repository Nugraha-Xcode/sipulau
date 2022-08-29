import React from "react";
import style from "./Searchbar.module.css";
import { SearchSuggestion } from "./SearchSuggestion";
import { Transition } from "@headlessui/react";

const Searcbar = ({ value, setValue, hasSuggestion = true, onChange }) => {
  const contentClassname = [style.content];

  if (value && hasSuggestion) contentClassname.push(style.content_active);

  // this is for get value from searchbar
  const handleChangesValue = (e) => {
    // initialize api in onchanges function
    onChange;

    setValue(e.target.value);
  };

  // this is for button close
  const handleClearValue = () => {
    setValue("");
  };

  return (
    <div className={style.container}>
      <div className={contentClassname.join(" ")}>
        <input
          className={style.input_search}
          placeholder="Enter keyword or Coordinate"
          onChange={(e) => handleChangesValue(e)}
          value={value}
        />

        {value && (
          <div className={style.close_container}>
            <button className={style.button_close} onClick={handleClearValue}>
              <img
                src="/images/ic-close.svg"
                alt="close button"
                className={style.close_icon}
              />
            </button>

            <div className={style.divider} />
          </div>
        )}

        <button className={style.button_search}>
          <img
            src="/images/ic-search.svg"
            alt="search Button"
            className={style.search_icon}
          />
        </button>
      </div>

      {/* if there is a value on input searchbar */}
      {hasSuggestion && value && (
        <div className={style.suggestion_container}>
          {/* loop this component for search functionality and pass onClick props to give click functionality */}
          <SearchSuggestion>Pulau Seribu</SearchSuggestion>
          <SearchSuggestion>kecamatan pulau seribu</SearchSuggestion>
          <SearchSuggestion>kepulauan seribu</SearchSuggestion>
          {/* ============================================ */}
        </div>
      )}
    </div>
  );
};

export default Searcbar;
