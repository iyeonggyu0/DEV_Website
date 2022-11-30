import styled from "styled-components";

export const ElementComponentStyle = styled.div`
  width: 15%;
  height: 40%;
  background-color: ${({ theme }) => theme.palette.subColor2};
  position: relative;
  p {
    color: ${({ theme }) => theme.palette.subColor2};
    font-size: 7%;
  }
`;

export const ElementComponentImg = styled.div`
  width: 90%;
  height: 40%;
  border-radius: 5%;
  margin: 0 auto;

  background-image: url(/img/elementComponentImg/elementComponentImg${(props) => props.table}.png);
  background-position: center center;
  background-size: cover;
`;
