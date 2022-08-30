import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import AppContext from "../../context/AppContext";
import CommentAdd from "./CommentAdd";
import CommentHistory from "./CommentHistory";

const CommentFeature = () => {
  const { t } = useTranslation("komentar");
  const { toggleLogin, isAuth } = useContext(AppContext);
  const [comment, setComment] = useState("add");
  return (
    <div>
      <div className='flex'>
        <div
          data-cy='comment-feature-change-tab-1'
          className={`flex-1 cursor-pointer text-center border-b-2 ${
            comment === "add" ? "border-main-blue" : ""
          } text-main-gray font-semibold`}
          onClick={() => setComment("add")}
        >
          {t("addComment")}
        </div>
        <div
          data-cy='comment-feature-change-tab-2'
          className={`flex-1 cursor-pointer text-center border-b-2 ${
            comment === "history" ? "border-main-blue" : ""
          } text-main-gray font-semibold`}
          onClick={() => {
            isAuth ? setComment("history") : toggleLogin();
          }}
        >
          {t("historyComment")}
        </div>
      </div>
      {comment === "add" ? <CommentAdd /> : <CommentHistory />}
    </div>
  );
};

export default CommentFeature;
