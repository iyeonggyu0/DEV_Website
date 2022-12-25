import React from "react";
import { useMedia } from "../../hooks/mediaHook";

// Components
import Header from "../../components/_header";

//Library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Style
import {} from "./style";

const ElementPage = () => {
  const media = useMedia();

  const onTableClickHandler = () => {
    let target = document.getElementsByTagName("ElementComponent");
    target.setAttribute("class", "hello");
    // target.setAttribute("style", `{ display: "block" }`);
  };

  return (
    <div style={{ position: "relative" }}>
      <Header pageNum={2} media={media} />
    </div>
  );
};
export default ElementPage;
