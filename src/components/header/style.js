import styled from "styled-components";

export const HeaderStyle = styled.div`
  height: 70px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.subColor2};
  background-color: ${({ theme }) => theme.palette.bgColor};
  position: relative;
  display: flex;
`;

// ${(props) => (props.media === "pc" ? "140px" : "70px")}
export const HeaderIconDivStyle = styled.div`
  border-right: 1px solid ${({ theme }) => theme.palette.subColor2};
  width: ${(props) => (props.media === "pc" ? "140px" : "70px")};
  height: 70px;
  position: relative;

  .HeaderIcon {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const HeaderTextDiv = styled.div`
  width: ${(props) => (props.media === "pc" ? "476px" : "382px")};
  height: 70px;
  margin: ${(props) => (props.media === "pc" ? "0 0 0 57px" : "0 auto")};
  display: flex;
  justify-content: ${(props) => (props.media === "pc" ? "space-between" : "space-evenly")};

  p {
    font-family: Noto Sans KR;
    font-weight: 400;
    font-size: ${(props) => (props.media === "pc" ? "20px" : "14px")};
    transform: translate(0, 35%);
  }

  p:first-child {
    color: ${(props) => (props.pageNum === 1 ? "#ffffff" : "#808080")};
  }

  p:nth-child(2) {
    color: ${(props) => (props.pageNum === 2 ? "#ffffff" : "#808080")};
  }

  p:nth-child(3) {
    color: ${(props) => (props.pageNum === 3 ? "#ffffff" : "#808080")};
  }

  p:nth-child(4) {
    color: ${(props) => (props.pageNum === 4 ? "#ffffff" : "#808080")};
  }
`;
