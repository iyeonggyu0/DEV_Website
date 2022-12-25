import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { HeaderStyle, HeaderIconDivStyle, HeaderTextDiv } from "./style";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <HeaderStyle>
      <Link to="/">
        <HeaderIconDivStyle media={props.media}>
          <FontAwesomeIcon icon={solid("house")} inverse className="HeaderIcon" />
        </HeaderIconDivStyle>
      </Link>
      <HeaderTextDiv media={props.media} pageNum={props.pageNum}>
        <Link to="/guide" className="LinkStyle LinkStyle1">
          안내 사항
        </Link>
        <Link to="/element" className="LinkStyle LinkStyle2">
          체험 요소
        </Link>
        <Link to={props.media === "pc" ? "/rank/all" : "/rank/schoolRun"} className="LinkStyle LinkStyle3">
          랭킹
        </Link>
      </HeaderTextDiv>
    </HeaderStyle>
  );
};
export default Header;
