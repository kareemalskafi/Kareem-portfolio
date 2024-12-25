import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <span style={{ color: "#179FFF" }}>var </span>
              <span style={{ color: "#9CDCFE" }}>me </span>=
              <span style={{ color: "#FFD70A" }}> {"{"} </span>
              <br />
              &emsp; &emsp;<span style={{ color: "#9CDCFE" }}>firstname: </span>
              <span style={{ color: "#CE916A" }}>"Kareem"</span>,
              <br />
              &emsp; &emsp;
              <span style={{ color: "#9CDCFE" }}>lastname: </span>
              <span style={{ color: "#CE916A" }}>"Al-Skafi"</span>,
              {/* <br />
              &emsp; &emsp;<span style={{ color: "#9CDCFE" }}>birthday: </span>
              <span style={{ color: "#CE916A" }}>"1995"</span>, */}
              <br />
              &emsp; &emsp;<span style={{ color: "#9CDCFE" }}>gender: </span>
              <span style={{ color: "#CE916A" }}>"male"</span>,
              <br />
              &emsp; &emsp;<span style={{ color: "#9CDCFE" }}>height: </span>
              <span style={{ color: "#CE916A" }}>"6539px"</span>,
              <br />
              &emsp; &emsp;<span style={{ color: "#9CDCFE" }}>color: </span>
              <span style={{ color: "#CE916A" }}>"#FFC3A0"</span>,
              <br />
              &emsp; &emsp;<span style={{ color: "#DCDC8B" }}>onBoring</span>
              <span style={{ color: "#9CDCFE" }}>: </span>
              <span style={{ color: "#179FFF" }}>function</span>
              <span style={{ color: "#DA70D6" }}>{"() {"}</span>
              <br />
              &emsp; &emsp;&emsp; &emsp;
              <span style={{ color: "#DCDC8B" }}>speakWithYourself</span>
              <span style={{ color: "#179FFF" }}>()</span>;
              <br />
              &emsp; &emsp; <span style={{ color: "#DA70D6" }}>{" }"}</span>,
              <br />
              &emsp; &emsp; <span style={{ color: "#9CDCFE" }}>skills:</span>
              <span style={{ color: "#DA70D6" }}>{" ["}</span>
              <br />
              &emsp; &emsp;&emsp; &emsp;{" "}
              <span style={{ color: "#CE916A" }}>"web"</span>
              <span style={{ color: "#9CDCFE" }}>{" =>"}</span>
              <span style={{ color: "#179FFF" }}>{" ["}</span>
              <br />
              &emsp; &emsp;&emsp; &emsp;&emsp; &emsp;{" "}
              <span style={{ color: "#CE916A" }}>"HTML(5)"</span>,
              <br />
              &emsp; &emsp;&emsp; &emsp;&emsp; &emsp;{" "}
              <span style={{ color: "#CE916A" }}>"CSS(3)"</span>,
              <br />
              &emsp; &emsp;&emsp; &emsp;&emsp; &emsp;{" "}
              <span style={{ color: "#CE916A" }}>"Javascript"</span>,
              <br />
              &emsp; &emsp;&emsp; &emsp;&emsp; &emsp;{" "}
              <span style={{ color: "#CE916A" }}>"Dancing in the rain"</span>,
              <br />
              &emsp; &emsp;&emsp; &emsp;&emsp; &emsp;{" "}
              <span style={{ color: "#CE916A" }}>
                "Failed to load additional 5010 skills"
              </span>
              <br />
              &emsp; &emsp;&emsp; &emsp;{" "}
              <span style={{ color: "#179FFF" }}>{" ]"}</span>
              <br />
              &emsp; &emsp; <span style={{ color: "#DA70D6" }}>{" ]"}</span>,
              <br />
              <span style={{ color: "#DCDC8B" }}>onClick</span>
              <span style={{ color: "#9CDCFE" }}>: </span>
              <span style={{ color: "#179FFF" }}>function</span>
              <span style={{ color: "#DA70D6" }}>{"() {"}</span>
              <br />
              &emsp; &emsp;<span style={{ color: "#DCDC8B" }}>pokeback</span>
              <span style={{ color: "#179FFF" }}>()</span>;
              <br />
              <span style={{ color: "#DA70D6" }}>{" }"}</span>,
              <br />
              <span style={{ color: "#DCDC8B" }}>onTickle</span>
              <span style={{ color: "#9CDCFE" }}>: </span>
              <span style={{ color: "#179FFF" }}>function</span>
              <span style={{ color: "#DA70D6" }}>{"() {"}</span>
              <br />
              &emsp; &emsp;<span style={{ color: "#DCDC8B" }}>laugh</span>
              <span style={{ color: "#179FFF" }}>()</span>;
              <br />
              <span style={{ color: "#DA70D6" }}>{" }"}</span>
              <br />
              <span style={{ color: "#FFD70A" }}> {"}"}</span>;
              <br />
              <span style={{ color: "#DA70D6" }}>return </span>
              <span style={{ color: "#9CDCFE" }}>me</span>;
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kareemalskafi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/kareemalskafii/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <ImFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdalkareem-alskafi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kareem_alskafi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
