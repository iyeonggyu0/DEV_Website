import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, light, thin, icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { HeaderStyle, HeaderIconDivStyle, HeaderTextDiv } from "./style";

const Header = (props) => {
  return (
    <HeaderStyle>
      <HeaderIconDivStyle media={props.media}>
        <FontAwesomeIcon icon={solid("house")} inverse className="HeaderIcon" />
      </HeaderIconDivStyle>
      <HeaderTextDiv media={props.media} pageNum={props.pageNum}>
        <p>안내사항</p>
        <p>체험 요소</p>
        <p>랭킹</p>
        <p>프로젝트 소개</p>
      </HeaderTextDiv>
    </HeaderStyle>
  );
};
export default Header;
