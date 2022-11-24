import { ElementDivStyle, ElementDivImg, EelementText } from "./style";

const project = {
  projectName: "DEV_web",
  projectUser: "이영규",
  img: " asd",
  projectComent: "paramparamparamparamparamparamparamparamparamparam",
};

const ElementDivPC = () => {
  return (
    <ElementDivStyle>
      <p>asdasdasd</p>
      <ElementDivImg></ElementDivImg>
      <EelementText>
        <p>{project.projectName}</p>
        <p>{project.projectUser}</p>
        <p>{project.projectComent}</p>
      </EelementText>
    </ElementDivStyle>
  );
};
export default ElementDivPC;
