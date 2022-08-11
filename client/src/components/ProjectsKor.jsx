import React from "react";
import useScroll from "../hooks/useScroll";

const ProjectsKor = () => {
  const projectHeader = useScroll();
  const project1 = useScroll();
  const project2 = useScroll();
  return (
    <section>
      <div className="section_content_wrapper">
        <div className="projects_content_area">
          <div {...projectHeader}>
            <h1>프로젝트</h1>
          </div>
          <div className="project_box_div" {...project1}>
            <div className="project_half_left">
              <video autoPlay loop muted width="100%">
                <source src="/shoppinglist.mp4" />
              </video>
              {/* <img width="100%" src="/shoppinglist.png" alt="shoppinglist" /> */}
            </div>
            <div className="project_half_right">
              <div>
                <h2>My Shopping list</h2>
                (1인 개발 프로젝트)
                <br />
                <br />
                <ul>
                  <li>
                    기본적인 게시판 형태의 CRUD 기능을 <b>MERN + Typescript</b>{" "}
                    를 적용하여 만들었습니다.
                  </li>
                  <li>
                    <b>JWT 토큰</b>을 cookie에 저장하여 <b>로그인</b>을
                    구현하였으며
                  </li>
                  <li>
                    <b>이미지 업로드는 AWS S3</b>에 저장하도록 했습니다.
                  </li>
                  <li>
                    <b>NOSQL</b>의 기초적인 기능들을 다뤄볼 수 있었습니다.
                  </li>
                </ul>
              </div>
              <br />
              <div className="project_desc">
                <div className="project_desc_title">Frontend</div>
                <div className="project_desc_content">React, TypeScript</div>
              </div>
              <div className="project_desc">
                <div className="project_desc_title">Backend</div>
                <div className="project_desc_content">Node.js</div>
              </div>
              <div className="project_desc">
                <div className="project_desc_title">Database</div>
                <div className="project_desc_content">MongoDB</div>
              </div>
              <div className="project_desc">
                <div className="project_desc_title">Style</div>
                <div className="project_desc_content">SCSS</div>
              </div>
              <div className="project_desc">
                <div className="project_desc_title">Deployment</div>
                <div className="project_desc_content">
                  AWS(EC2, S3, Route53)
                </div>
              </div>
              <div className="project_btn_area">
                <button
                  onClick={() =>
                    window.open(
                      "https://github.com/Milo-Oh-taek/my-shopping-list"
                    )
                  }
                >
                  Github
                </button>
                {/* <button
                  onClick={() => window.open("http://miloshoppinglist.site/")}
                >
                  Website
                </button> */}
              </div>
            </div>
          </div>
          <div className="project_box_div" {...project2}>
            <div className="project_half_left">
              <img width="100%" src="/snifferdog.png" alt="snifferdog" />
            </div>
            <div className="project_half_right">
              <div>
                <h2>Sniffer dog</h2>
                (1인 개발 프로젝트)
                <br />
                <br />
                <ul>
                  <li>
                    쇼핑몰 형태의 향수 커뮤니티 사이트를 <b>Next</b>를 이용하여
                    <b> 깜빡임없이 서버사이드 렌더링</b>이 되도록
                    제작하였습니다.{" "}
                  </li>
                  <li>
                    <b>쿼리스트링</b>으로 중복&복수 <b>필터링</b>을 구현하였고,
                  </li>{" "}
                  <li>
                    <b>Redux Toolkit</b>을 사용하여 <b>상태관리</b>를 했는데
                    개인적으로 Redux saga보다 간결하며 사용하기 편하다고
                    느꼈습니다.
                  </li>
                  <li>
                    <b>Sequelize</b>를 처음 사용해 보았는데 많은 테이블 간의
                    조인을 하면서 어려움을 겪었습니다.
                  </li>
                  <li>
                    <b>
                      Nginx + Let's Encrypt로 SSL을 설정한 리버스 프록시 서버
                    </b>
                    를 구축하였습니다.
                  </li>
                </ul>
              </div>
              <br />
              <div className="project_desc">
                <div className="project_desc_title">Frontend</div>
                <div className="project_desc_content">
                  Next.js, redux-toolkit
                </div>
              </div>
              <div className="project_desc">
                <div className="project_desc_title">Backend</div>
                <div className="project_desc_content">Node.js</div>
              </div>
              <div className="project_desc">
                <div className="project_desc_title">Database</div>
                <div className="project_desc_content">Mysql, Sequelize</div>
              </div>
              <div className="project_desc">
                <div className="project_desc_title">Style</div>
                <div className="project_desc_content">Bootstrap</div>
              </div>
              <div className="project_desc">
                <div className="project_desc_title">Deployment</div>
                <div className="project_desc_content">
                  Nginx, AWS(EC2, Route53)
                </div>
              </div>
              <div className="project_btn_area">
                <button
                  onClick={() =>
                    window.open("https://github.com/Milo-Oh-taek/sniffer-dog")
                  }
                >
                  Github
                </button>
                <button onClick={() => window.open("https://snifferdog.site/")}>
                  Website
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsKor;
