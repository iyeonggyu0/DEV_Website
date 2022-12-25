import styled from "styled-components";
import { useMedia } from "../../hooks/mediaHook";
import axios from "axios";
import { useMemo, useState } from "react";
import RankDiv from "./components";

const DinorankingListDiv = (props) => {
  const media = useMedia();
  const [getData, setGetData] = useState([]);

  useMemo(() => {
    // POST 요청 전송
    //https:dev--website.herokuapp.com/api/get
    axios
      .get("https://dev--website.herokuapp.com/api/get")
      .then((res) => {
        setGetData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, [props.a]);

  let a = props.a;

  function custonSort(a, b) {
    if (a.user_dino_bestScore === b.user_dino_bestScore) {
      return 0;
    }
    return a.user_dino_bestScore < b.user_dino_bestScore ? 1 : -1;
  }
  const sortData = getData.sort(custonSort);

  return (
    <RankingListDivStyle style={{ display: props.type === "all" || props.type === "dino" ? "flex" : "none" }} media={media} type={props.type}>
      <div className="p">Dino</div>

      {sortData.map((state, key) => (
        <RankDiv key={state.user_dino_bestScore} data={sortData[key]} a={a} />
      ))}
    </RankingListDivStyle>
  );
};

export default DinorankingListDiv;

export const RankingListDivStyle = styled.div`
  width: ${(props) => (props.media === "pc" ? "25vw" : "80vw")};
  height: 75vh;

  position: relative;
  display: flex;
  flex-wrap: wrap;
  color: #fff;

  overflow-y: scroll;

  .p {
    font-family: Noto Sans Kr;
    width: 100%;
    height: 50px;
    font-size: 24px;
    text-align: center;
  }
`;
