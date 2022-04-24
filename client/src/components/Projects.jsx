import React from "react";
import useScroll from "../hooks/useScroll";

const Projects = () => {
  const projectHeader = useScroll();
  const project1 = useScroll();
  const project2 = useScroll();
  return (
    <section>
      <div className="section_content_wrapper">
        <div className="projects_content_area">
          <div {...projectHeader}>
            <h1>Projects</h1>
          </div>
          <div className="project_box_div" {...project1}>
            <div className="project_half_left">
              <img width="100%" src="/shoppinglist.png" alt="shoppinglist" />
            </div>
            <div className="project_half_right">
              <div>
                <h2>My Shopping list</h2>
                (1person toy project)
                <br />
                <br />
                <ul>
                  <li>
                    I built this standard type of CRUD website by using{" "}
                    <b>MERN + Typescript</b>.
                  </li>
                  <li>
                    Login function through <b>JWT saved in Cookie</b>,
                  </li>
                  <li>
                    <b>Uploaded Images</b> are saved in <b>AWS S3 Bucket</b>.
                  </li>
                  <li>
                    I'm familiar with basic <b>NOSQL</b> functions.
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
                <div className="project_desc_content">Styled Components</div>
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
                <button
                  onClick={() => window.open("http://miloshoppinglist.site/")}
                >
                  Website
                </button>
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
                (1person toy project)
                <br />
                <br />
                <ul>
                  <li>
                    It is a standard online-shop website, <b>built with Next</b> which
                    enables <b>server-side-rendering without flickering.</b>
                  </li>
                  <li>
                    <b>Multiple filters</b> through <b>query string</b>,
                  </li>
                  <li>
                    I used <b>Redux Toolkit</b> for states management, as I find it
                    more transparant than Redux-saga.
                  </li>
                  <li>
                    Built{" "}
                    <b>Reverse Proxy server through Nginx + Let's Encrypt</b>.
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

export default Projects;
