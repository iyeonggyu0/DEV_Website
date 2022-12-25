import styled from "styled-components";

const RankDiv = (props) => {
  const propsUserData = {
    idx: props.data.useridx,
    name: props.data.user_name,
    sc: props.a === "schoolRun" ? props.data.user_schoolRun_bestScore : props.a === "schodinoolRun" ? props.data.user_dino_bestScore : props.data.user_stairs_bestScore,
  };
  return (
    <RankDivStyle>
      <p>{propsUserData.idx}</p>
      <p>{propsUserData.sc}점</p>
    </RankDivStyle>
  );
};
export default RankDiv;

export const RankDivStyle = styled.div`
  font-family: Noto Sans Kr;
  width: 100px;
  text-align: center;
  height: 35px;
  padding: 15px 100px;
  color: #fff;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.subColor2};
  margin: 0 auto;
  margin-bottom: 30px;

  p:first-child {
    margin-bottom: 5px;
  }
  p:nth-child(2) {
    margin-top: 2px;
  }
`;
