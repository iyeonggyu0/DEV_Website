import styled from "styled-components";

// Pc

export const ElementPcPage = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background-color: ${({ theme }) => theme.palette.bgColor};
  position: relative;
`;

export const ElementImg = styled.div`
  height: 90%;
  width: 80%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: url(/img/elementPageImg.png);
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  border: 1px solid #fff;

  div {
    position: absolute;
    width: 2%;
    height: 3%;
    --fa-animation-duration: 2.5s;
    --fa-fade-opacity: 0.6;
    cursor: pointer;
  }

  div:nth-child(1) {
    color: #222;
    top: 66.3%;
    left: 34.9%;
  }

  div:nth-child(2) {
    color: #966dca;
    top: 52%;
    left: 47%;
  }

  div:nth-child(3) {
    color: #6069bc;
    top: 39.8%;
    right: 39.3%;
  }

  div:nth-child(4) {
    color: #777777;
    bottom: 20%;
    left: 43.5%;
  }

  div:nth-child(5) {
    color: #ce7ad7;
    bottom: 34.3%;
    left: 56.2%;
  }

  div:nth-child(6) {
    color: #6069bc;
    top: 50%;
    right: 30.5%;
  }
`;

// Mobile

export const ElementMobilePage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.bgColor};
  position: relative;

  p:first-child {
    color: ${({ theme }) => theme.palette.fontColor};
    font-family: Noto Sans KR;
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
    padding: 30px 0 30px 30px;
  }
`;

export const ElementMobileImg = styled.div`
  width: 90%;
  height: 30%;
  margin: 0 auto;
  border: 1px solid #fff;
  background-image: url(/img/elementPageImg.png);
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;
