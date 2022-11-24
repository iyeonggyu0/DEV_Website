import styled from "styled-components";

export const ElementDivStyle = styled.div`
  width: 18%;
  height: 50%;
  background-color: ${({ theme }) => theme.palette.subColor2};
  position: relative;

  p:first-child {
    color: ${({ theme }) => theme.palette.subColor2};
    font-size: 10px;
  }
`;

export const ElementDivImg = styled.div`
  width: 90%;
  height: 30%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.palette.fontColor};
  // BG 없애고 이미지 URL바꾸기
  /* background-image: url(); */
`;

export const EelementText = styled.div`
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 90%;
  height: 60%;
  border: 1px solid black;

  P {
    font-family: Noto Sans KR;
    color: ${({ theme }) => theme.palette.fontColor};
    font-weight: ${({ theme }) => theme.fontSize.regular};
  }

  p:nth-child(1) {
    // 프로젝트 이름
    color: ${({ theme }) => theme.palette.fontColor};
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
    padding-bottom: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  p:nth-child(2) {
    // 프로젝트 제작자
    font-size: ${({ theme }) => theme.fontSize.small};
    padding-left: 5px;
    padding-bottom: 10px;
  }

  p:nth-child(3) {
    line-height: ${({ theme }) => theme.lineHeight.xLarge};
    word-wrap: break-word;
  }
`;
