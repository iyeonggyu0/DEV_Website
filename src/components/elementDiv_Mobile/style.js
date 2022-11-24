import styled from "styled-components";

export const ElementDivStyle = styled.div`
  width: 80%;
  height: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.palette.subColor2};
  position: relative;
  border-radius: 10px;

  .xmark {
    color: ${({ theme }) => theme.palette.fontColor};
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(-150%, 60%);
  }
`;

export const ElementDivImg = styled.div`
  position: absolute;
  width: 90%;
  height: 30%;
  top: 5%;
  left: 50%;
  transform: translate(-50%, 0%);
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
