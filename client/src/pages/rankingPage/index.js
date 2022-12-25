import { Link, useParams } from "react-router-dom";
import SRrankingListDiv from "../../components/rankingListDiv/SRrankingListDiv";
import StairsrankingListDiv from "../../components/rankingListDiv/stairsRankingListDiv.js";
import DinorankingListDiv from "../../components/rankingListDiv/dinoRankingListDiv.js";
import Header from "../../components/_header";
import { useMedia } from "../../hooks/mediaHook";
import { RankingPageDiv, RankingUrlListDiv, Span1, Span2, Span3 } from "./style";

const RankingPage = () => {
  const media = useMedia();
  const params = useParams();
  const type = params.type;
  console.log(type);
  return (
    <>
      <Header pageNum={3} media={media} />
      <RankingUrlListDiv type={type} style={{ display: media === "pc" ? "none" : "flex" }}>
        <Link to="/rank/schoolRun" className="LinkStyle1">
          <Span1 type={type}>스쿨런</Span1>
        </Link>
        <Link to="/rank/stairs" className="LinkStyle2">
          <Span2 type={type}>무한의계단</Span2>
        </Link>
        <Link to="/rank/dino" className="LinkStyle3">
          <Span3 type={type}>dino</Span3>
        </Link>
      </RankingUrlListDiv>
      <RankingPageDiv media={media}>
        <SRrankingListDiv type={type} a={"schoolRun"} styled />
        <StairsrankingListDiv type={type} a={"stairs"} />
        <DinorankingListDiv type={type} a={"dino"} />
      </RankingPageDiv>
    </>
  );
};
export default RankingPage;
