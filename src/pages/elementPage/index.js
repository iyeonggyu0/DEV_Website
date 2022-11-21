import React from "react";
import { useMedia } from "../../hooks/mediaHook";

// Components
import Header from "../../components/header";

//Library
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";

// Style
import {} from "./style";

const ElementPage = () => {
  const media = useMedia();

  return (
    <>
      <Header pageNum={2} media={media} />
    </>
  );
};
export default ElementPage;
