import React, { useState } from "react";
import CommentAdd from "./CommentAdd";
import CommentHistory from "./CommentHistory";

const CommentFeature = () => {
  const [comment, setComment] = useState("add");
  return (
    <div>
      <div className='flex'>
        <div
          className={`flex-1 cursor-pointer text-center border-b-2 ${
            comment === "add" ? "border-main-blue" : ""
          } text-main-gray font-semibold`}
          onClick={() => setComment("add")}
        >
          Tambah Komentar
        </div>
        <div
          className={`flex-1 cursor-pointer text-center border-b-2 ${
            comment === "history" ? "border-main-blue" : ""
          } text-main-gray font-semibold`}
          onClick={() => setComment("history")}
        >
          Riwayat Komentar
        </div>
      </div>
      {comment === "add" ? <CommentAdd /> : <CommentHistory />}
    </div>
  );
};

export default CommentFeature;
