import React from "react";
import { useMedia } from "../../hooks/mediaHook";

// Components
import Header from "../../components/header";
import ElementDivPC from "../../components/elementDiv_PC";
import ElementDivMobile from "../../components/elementDiv_Mobile";

//Library
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";

// Style
import { ElementMobilePage, ElementPcPage, ElementImg, ElementMobileImg, ClickTable1 } from "./style";

const ElementPage = () => {
  const media = useMedia();

  return (
    <>
      <Header pageNum={2} media={media} />

      <ElementPcPage style={{ display: media === "pc" ? "block" : "none" }}>
        <ElementDivPC />
        <ElementImg>
          <ClickTable1>클릭</ClickTable1>
        </ElementImg>
      </ElementPcPage>
      <ElementMobilePage style={{ display: media === "pc" ? "none" : "block" }}>
        <ElementDivMobile />
        <p>체험 요소</p>
        <ElementMobileImg></ElementMobileImg>
      </ElementMobilePage>
    </>
  );
};
export default ElementPage;
