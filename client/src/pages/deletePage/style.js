import styled from "styled-components";

export const DeleteStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  input {
    width: 280px;
    height: 32px;
    margin-bottom: 30px;
    background-color: ${({ theme }) => theme.palette.subColor2};
    padding-left: 20px;
    color: #fff;
    border-radius: 5px;
  }

  p {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    cursor: pointer;
    margin-right: 0px;
    padding: 10px 0px;
    background-color: ${({ theme }) => theme.palette.pointColor};
    color: #fff;
  }
`;
