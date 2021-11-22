import { useState } from "react";
import CommentList from "./CommentList";
import DetailInformasi from "./DetailInformasi";
import InformasiPulau from "./InformasiPulau";

const MobilePopup = ({ toggle, infoPulau }) => {
  const [content, setContent] = useState("informasi");
  return (
    <div>
      {content === "informasi" ? (
        <InformasiPulau setActiveFeature={setContent} toggle={toggle} />
      ) : content === "detail" ? (
        <DetailInformasi />
      ) : (
        <CommentList />
      )}
    </div>
  );
};

export default MobilePopup;
