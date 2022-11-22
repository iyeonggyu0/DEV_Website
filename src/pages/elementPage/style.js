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
