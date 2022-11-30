import React from "react";

//Library
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//styled
import { ElementComponentStyle, ElementComponentImg } from "./style";
import data from "./elementData";

const ElementComponent = (props) => {
  const key = data.keys(data);
  console.log(data[key].projectName); // "쓴 맛", "고소한 맛", "달콤한 맛"
  return (
    <ElementComponentStyle>
      <p>asd</p>
      <ElementComponentImg table={props.table}></ElementComponentImg>

      {/* <div>{projectData.data[props.table].projectName}</div> */}
      {/* <FontAwesomeIcon icon={solid("xmark")} /> */}
    </ElementComponentStyle>
  );
};
export default ElementComponent;

{
  /* 여기서 부터 수정하기 */
}
