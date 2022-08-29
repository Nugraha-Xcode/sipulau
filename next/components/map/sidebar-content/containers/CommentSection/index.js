import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import style from "./CommentSection.module.css";
import AddComment from "./AddComment";
import CommentTab from "./CommentTab";

const CommentSection = () => {
  // this state just to test the logic
  const [isComment, setIsComment] = React.useState(false);
  // this function just for testing the logic
  const handlePoint = () => {
    setIsComment(true);
  };

  return (
    <Tab.Group>
      <Tab.List className={style.tab_list}>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button className={selected ? style.tab_active : style.tab}>
              Add Comment
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button className={selected ? style.tab_active : style.tab}>
              Comment History
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <AddComment
            header="Add Comment"
            handleIslandPoint={handlePoint}
            handlePoint={handlePoint}
          />
        </Tab.Panel>
        <Tab.Panel>
          {/* there is a header props to pass for handle header value */}
          {/* there is pending/rejected/published available to pass to the  status props */}

          {isComment ? (
            <>
              <CommentTab
                status="pending"
                img="\images\placeholder_comment.png"
                desc="Consequatur consequatur molestiae. Eaque tenetur nesciunt dolores voluptatem pariatur. Expedita deserunt praesentium laudantium."
                date="3 April 2021"
              />
              <CommentTab
                status="published"
                desc="Consequatur consequatur molestiae. Eaque tenetur nesciunt dolores voluptatem pariatur. Expedita deserunt praesentium laudantium."
                date="3 April 2021"
              />
              <CommentTab
                status="published"
                desc="Consequatur consequatur molestiae. Eaque tenetur nesciunt dolores voluptatem pariatur. Expedita deserunt praesentium laudantium."
                date="3 April 2021"
              />
              <CommentTab
                status="rejected"
                img="\images\placeholder_comment.png"
                desc="Consequatur consequatur molestiae. Eaque tenetur nesciunt dolores voluptatem pariatur. Expedita deserunt praesentium laudantium."
                date="3 April 2021"
              />
            </>
          ) : (
            <AddComment header="No Comment Yet" />
          )}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default CommentSection;
