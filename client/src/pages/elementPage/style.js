import styled from "styled-components";

// Pc

export const ElementPcPage = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background-color: ${({ theme }) => theme.palette.bgColor};
  position: relative;
  z-index: 1;

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
