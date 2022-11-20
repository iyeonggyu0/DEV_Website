import Header from "../../components/header/index";
import { MainPageBG } from "./style";

import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

const MainPage = () => {
  const mediaHandler = useMediaQuery({ minWidth: 992 });
  const [media, setMedia] = useState("pc");
  useEffect(() => {
    mediaHandler === true ? setMedia("pc") : setMedia("mobile");
  }, [mediaHandler]);

  return (
    <>
      <Header media={media} pageNum={0} />
      <MainPageBG media={media}></MainPageBG>
    </>
  );
};
export default MainPage;
/* ${(props) => (props.media === "pc" ? "space-between" : "0 auto")};; */
