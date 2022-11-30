import React from "react";
import { useMedia } from "../../hooks/mediaHook";

// Components
import Header from "../../components/_header";
import ElementComponent from "../../components/elementComponent";

//Library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Style
import { ElementMobilePage, ElementPcPage, ElementImg, ElementMobileImg } from "./style";

const ElementPage = () => {
  const media = useMedia();

  return (
    <>
      <Header pageNum={2} media={media} />
      <ElementPcPage style={{ display: media === "pc" ? "block" : "none" }}>
        <ElementComponent table={1} />
        <ElementImg>
          <div>
            {/** 1번 */}
            <FontAwesomeIcon icon={solid("caret-up")} fade />
          </div>
          <div>
            {/** 2번 */}
            <FontAwesomeIcon icon={solid("caret-up")} fade />
          </div>
          <div>
            {/** 3번 */}
            <FontAwesomeIcon icon={solid("caret-up")} fade />
          </div>
          <div>
            {/** 4번 */}
            <FontAwesomeIcon icon={solid("caret-up")} fade />
          </div>
          <div>
            {/** 5번 */}
            <FontAwesomeIcon icon={solid("caret-up")} fade />
          </div>
          <div>
            {/** 6번 */}
            <FontAwesomeIcon icon={solid("caret-up")} fade />
          </div>
        </ElementImg>
      </ElementPcPage>
      <ElementMobilePage style={{ display: media === "pc" ? "none" : "block" }}>
        <p>체험 요소</p>
        <ElementMobileImg></ElementMobileImg>
      </ElementMobilePage>
    </>
  );
};
export default ElementPage;
