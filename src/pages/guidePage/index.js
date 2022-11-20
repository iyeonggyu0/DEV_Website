import React from "react";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

// AOS Library
import AOS from "aos";
import "aos/dist/aos.css";

const GuidePagem = () => {
  const mediaHandler = useMediaQuery({ minWidth: 992 });
  const [media, setMedia] = useState("pc");
  useEffect(() => {
    mediaHandler === true ? setMedia("pc") : setMedia("mobile");
  }, [mediaHandler]);

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div media={media}>
        <p data-aos="fade-up" data-aos-duration="1500">
          DEV: 프로그래밍 동아리 부스에 오신 여러분, 환영합니다.
        </p>
        <p>해당 부스에서는 동아리시간에 진행했던 프로젝트의 결과물을 플레이해보거나 구경하실 수 있습니다.</p>
        <p>플레이 가능한 모든 게임은 최대 3번의 플레이 기회를 가지며</p>
        <p>각 게임당 최대 플레이시간이 최대 8분까지로 제한되며</p>
        <p>각 게임의 최고기록을 기록하여</p>
        <p>최종순위에 따라 상품이 지급됩니다.</p>
      </div>
    </>
  );
};
export default GuidePagem;
