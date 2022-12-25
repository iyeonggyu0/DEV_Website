import styled from "styled-components";

export const MainPageBG = styled.div`
  width: 100%;
  height: calc(100vh - 71px);
  background-image: url(${(props) => (props.media === "pc" ? "/img/mainPage.png" : "/img/mainPageMobile.png")});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top center;
  background-position-y: -30px;
`;
