import React from "react";

import style from "./CommentSection.module.css";
import { Button } from "../../core";

const AddComment = ({ header, handlePoint, handleIslandPoint }) => {
  return (
    <div className={style.container}>
      <img className={style.no_comment_img} src="\images\addComment.png"></img>
      <div className={style.header}>{header}</div>
      <div className={style.sub_header}>
        You can leave a comment by adding a point or on an existing island
        point.
      </div>

      <Button variant="outline" onClick={handlePoint}>
        Comment by Adding Point
      </Button>
      <div className={style.container_divider}>
        <div className={style.divider} />
        or
        <div className={style.divider} />
      </div>
      <Button variant="outline" onClick={handleIslandPoint}>
        Comment on Island Point
      </Button>
    </div>
  );
};

export default AddComment;
