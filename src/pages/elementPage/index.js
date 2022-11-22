import React from "react";
import { useMedia } from "../../hooks/mediaHook";

// Components
import Header from "../../components/header";

//Library
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";

// Style
import { ElementMobilePage, ElementPcPage, ElementImg, ElementMobileImg } from "./style";

const ElementPage = () => {
  const media = useMedia();

  return (
    <>
      <Header pageNum={2} media={media} />
      <ElementPcPage style={{ display: media === "pc" ? "block" : "none" }}>
        <ElementImg></ElementImg>
      </ElementPcPage>
      <ElementMobilePage style={{ display: media === "pc" ? "none" : "block" }}>
        <p>체험 요소</p>
        <ElementMobileImg></ElementMobileImg>
      </ElementMobilePage>
    </>
  );
};
export default ElementPage;
