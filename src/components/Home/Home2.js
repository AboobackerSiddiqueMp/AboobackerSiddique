import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className=""> INTRODUCE </span> MYSELF
            </h1>


            <p className="home-about-body">

              Hello, I'm Aboobacker Siddique, a driven job seeker and recent BCA graduate with a newfound expertise in the MERN stack. Eager to embark on my journey in software development, I'm ready to contribute my fresh perspective and dedication to your team.<br/>
<br/>
I'm a proficient MERN stack developer with a passion for crafting dynamic web applications using modern JavaScript frameworks



              <br />
              <br />Proficient in MERN stack:
              <i>
                <b className="purple">MongoDB, Express.js, React.js, and Node.js. </b>
              </i>
              <br />
              <br />
              Skilled in developing dynamic  <b className="purple">web applications</b> with modern JavaScript libraries and frameworks like React.js and Next.js.
              &nbsp;
              <i>
              </i>
              <br />
              <br />
              Passionate about exploring new web technologies and product development.
              <i>
                <b className="purple">
                  {" "}
                </b>
              </i>
              &nbsp;
              <i>
              </i>
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
                  href="https://github.com/AboobackerSiddiqueMp"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aboobacker-siddique-325090282/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
