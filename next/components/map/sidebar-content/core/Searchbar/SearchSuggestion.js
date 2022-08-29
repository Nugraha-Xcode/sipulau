import React from "react";
import style from "./Searchbar.module.css";

export const SearchSuggestion = ({ children, onClick }) => {
  return (
    <div className={style.suggestion_result} onClick={onClick}>
      <div className={style.autoncomplete_text}>{children}</div>
      <img
        src="/images/marker-suggestion.svg"
        alt="search Button"
        className={style.search_icon}
      />
    </div>
  );
};
