import { ElementDivStyle, ElementDivImg, EelementText } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const project = {
  projectName: "DEV_web",
  projectUser: "이영규",
  img: " asd",
  projectComent: "paramparamparamparamparamparamparamparamparamparam",
};

const ElementDivMobile = () => {
  return (
    <ElementDivStyle>
      <ElementDivImg></ElementDivImg>
      <EelementText>
        <p>{project.projectName}</p>
        <FontAwesomeIcon icon={solid("xmark")} className="xmark" />
        <p>{project.projectUser}</p>
        <p>{project.projectComent}</p>
      </EelementText>
    </ElementDivStyle>
  );
};
export default ElementDivMobile;
