import styled from "styled-components";

export const RankingPageDiv = styled.div`
  width: 100vw;
  height: ${(props) => (props.media === "pc" ? "calc(100vh - 70px)" : "calc(100vh - 120px);")};
  background-color: ${({ theme }) => theme.palette.bgColor};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const RankingUrlListDiv = styled.div`
  width: 100vw;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.bgColor};
  font-family: Noto Sans Kr;
  font-weight: 400;
  font-size: 14px;
`;

export const Span1 = styled.span`
  color: ${(props) => (props.type === "schoolRun" ? "#ffffff" : "#808080")};
`;
export const Span2 = styled.span`
  color: ${(props) => (props.type === "stairs" ? "#ffffff" : "#808080")};
`;
export const Span3 = styled.span`
  color: ${(props) => (props.type === "dino" ? "#ffffff" : "#808080")};
`;
