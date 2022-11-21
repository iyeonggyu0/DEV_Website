import styled from "styled-components";

export const GuideHeader = styled.div`
  width: 100vw;
  position: fixed;
  z-index: 99;
`;

export const GuidePageStyle = styled.div`
  padding-top: 71px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.bgColor};

  p {
    color: ${({ theme }) => theme.palette.fontColor};
    font-family: Noto Sans Kr;
    font-weight: 400;
  }

  .GuideTextStyle {
    width: ${(props) => (props.media === "pc" ? "calc(100% - 30%)" : "calc(100vw - 80px)")};
    height: ${(props) => (props.media === "pc" ? "100vh" : "80vh")};
    position: relative;
    margin: 0 auto;
    margin-top: ${(props) => (props.media === "pc" ? "200px" : "0px")};
  }
`;

export const IconDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  .icon {
    width: 8%;
    height: 8%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 80px));

    --fa-animation-duration: 2.5s;
    --fa-fade-opacity: 0.6;
  }
`;

export const GuideTextStyle1 = styled.div`
  p:nth-child(1) {
    font-size: ${(props) => (props.media === "pc" ? "3.8rem" : "1.8rem")};
    font-weight: 600;
  }

  p:nth-child(2) {
    font-size: ${(props) => (props.media === "pc" ? "2.5rem" : "1rem")};
    margin-top: ${(props) => (props.media === "pc" ? "1rem" : "0.8rem")};
    font-weight: 300;
  }
`;

export const GuideTextStyle2 = styled.div`
  p:nth-child(1) {
    font-size: ${(props) => (props.media === "pc" ? "2rem" : "1rem")};
    text-align: center;
    font-weight: 300;
  }
`;

export const GuideTextStyle3 = styled.div`
  p {
    text-align: right;
  }
  p:nth-child(1) {
    font-size: 3rem;
    font-weight: 600;
  }

  p:nth-child(2) {
    font-size: 2.5rem;
    margin-top: 1rem;
    font-weight: 300;
  }

  p:nth-child(3) {
    font-size: 1.3rem;
    font-weight: 500;
    /* margin-top: 0.8rem; */
  }

  p:nth-child(4) {
    font-size: 1rem;
    font-weight: 300;
    margin-top: 0.5rem;
  }
`;

export const GuideTextStyle4 = styled.div`
  p {
    text-align: center;
  }
  p:nth-child(1) {
    font-size: ${(props) => (props.media === "pc" ? "3.8rem" : "1.5rem")};
    font-weight: 600;
  }

  p:nth-child(2) {
    font-size: ${(props) => (props.media === "pc" ? "3.8rem" : "1rem")};
    margin-top: ${(props) => (props.media === "pc" ? "1rem" : "0.8rem")};
    font-weight: 300;
  }
`;
