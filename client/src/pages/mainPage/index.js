import Header from "../../components/_header/index";
import { MainPageBG } from "./style";

import { useMedia } from "../../hooks/mediaHook";

const MainPage = () => {
  const media = useMedia();

  return (
    <>
      <Header media={media} pageNum={0} />
      <MainPageBG media={media}></MainPageBG>
    </>
  );
};
export default MainPage;
/* ${(props) => (props.media === "pc" ? "space-between" : "0 auto")};; */
