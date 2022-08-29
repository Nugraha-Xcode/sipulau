import React from "react";
import style from "./CommentSection.module.css";

const CommentTab = ({ status, desc, date, img }) => {
  const statusStyle = [style.status];

  //   condition status
  switch (status) {
    case "pending":
      statusStyle.push(style.status_pending);
      break;

    case "rejected":
      statusStyle.push(style.status_rejected);
      break;

    case "published":
      statusStyle.push(style.status_published);
      break;
  }

  return (
    <div className={style.container_comment_tab}>
      <div className={statusStyle.join(" ")}>
        {status === "pending" && "Pending"}
        {status === "rejected" && "Rejected"}
        {status === "published" && "Published"}
      </div>
      {img && <img className={style.comment_img} src={img}></img>}

      <div className={style.desc}>{desc}</div>

      <div className={style.date}>{date}</div>
    </div>
  );
};

export default CommentTab;
