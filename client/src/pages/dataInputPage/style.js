import styled from "styled-components";

export const PageMainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.bgColor};
`;

export const PageDiv = styled.div`
  font-family: Noto Sans Kr;
  color: #fff;
  padding-top: 50px;
  width: 100%;
  height: 50vh;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  p {
    width: 380px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  input {
    width: 280px;
    height: 32px;
    margin-bottom: 30px;
    background-color: ${({ theme }) => theme.palette.subColor2};
    padding-left: 20px;
    color: #fff;
    border-radius: 5px;
  }
  span {
    margin-right: 30px;
  }

  div:last-child {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    cursor: pointer;

    span {
      margin-right: 0px;
      padding: 10px 30px;
      background-color: ${({ theme }) => theme.palette.pointColor};
      color: #fff;
    }
  }
`;
