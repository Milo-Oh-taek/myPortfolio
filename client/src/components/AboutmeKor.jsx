import React from "react";
import useScroll from "../hooks/useScroll";

const AboutmeKor = () => {
  const aboutRef = useScroll();
  return (
    <>
      <div className="section_content_wrapper">
        <div className="section_content" {...aboutRef}>
          <h1>안녕하세요.</h1>
          <div>
            <p>
              새로운 것을 배우는 데에 관심이 많은 프론트엔드 개발자입니다.
              <br />
              프론트 뿐만아니라 웹 전반에 흥미를 느낍니다.
            </p>
            <p>
              많은 경험을 통해 성장할 수 있으며,
              <br /> 제 능력을 기여할 수 있는 곳에서 일하고 싶습니다.
            </p>
            <p>
              오랜 기간동안 개발 업무를 하는 것과
              <br />
              꾸준히 배워나가 남들에게 가르침을 줄 수 있는 시니어가 되는 것이 꿈입니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutmeKor;
