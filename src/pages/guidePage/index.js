import React, { useEffect } from "react";
import { useMedia } from "../../hooks/mediaHook";

// Components
import Header from "../../components/_header";

//Library
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";

// Style
import { GuideHeader, GuidePageStyle, IconDiv, GuideTextStyle1, GuideTextStyle2, GuideTextStyle3, GuideTextStyle4 } from "./style";

const GuidePage = () => {
  const media = useMedia();

  useEffect(() => {
    // AOS Library 초기화
    AOS.init();
  });

  return (
    <>
      <GuideHeader>
        <Header media={media} pageNum={1} />
      </GuideHeader>

      <GuidePageStyle media={media}>
        <IconDiv>
          <FontAwesomeIcon icon={regular("circle-down")} inverse className="icon" fade />
          <p style={{ display: media === "pc" ? "block" : "none", paddingTop: "180px", textAlign: "center" }} className="icon">
            scroll
          </p>
        </IconDiv>

        <GuideTextStyle1 media={media} className="GuideTextStyle">
          <p data-aos="fade-up" data-aos-duration="1500">
            DEV: 프로그래밍 동아리
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            부스에 오신 여러분, 환영합니다.
          </p>
        </GuideTextStyle1>
        <GuideTextStyle2 media={media} className="GuideTextStyle">
          <p data-aos="fade-up" data-aos-duration="1500">
            해당 부스는 동아리 시간에 진행했던 프로젝트의
            <br style={{ display: media !== "pc" ? "block" : "none" }} />
            결과물을 체험하실 수 있습니다.
          </p>
        </GuideTextStyle2>

        <GuideTextStyle3 media={media} className="GuideTextStyle" data-aos="fade-up" data-aos-duration="1000">
          <p style={{ display: media === "pc" ? "block" : "none" }}>플레이할 수 있는 모든 게임은 최대 3번의 플레이 기회가 있으며</p>
          <p style={{ display: media === "pc" ? "block" : "none" }}>각 게임당 최대 플레이 시간이 최대 8분까지로 제한됩니다.</p>

          <p style={{ display: media !== "pc" ? "block" : "none" }}>
            플레이할 수 있는 모든 게임은
            <br />
            최대 3번의 플레이 기회가 있으며
          </p>
          <p style={{ display: media !== "pc" ? "block" : "none" }}>
            각 게임당 최대 플레이 시간이
            <br /> 최대 8분까지로 제한됩니다.
          </p>
        </GuideTextStyle3>
        <GuideTextStyle4 media={media} className="GuideTextStyle">
          <p data-aos="fade-up" data-aos-duration="1000">
            각 게임의 최고 기록을 기록하여
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            최종순위에 따라 상품이 지급됩니다.
          </p>
        </GuideTextStyle4>
      </GuidePageStyle>
    </>
  );
};
export default GuidePage;
