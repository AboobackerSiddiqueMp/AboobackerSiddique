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
  Hello, I'm Aboobacker Siddique, a recent BCA graduate with expertise in the MERN stack. I'm eager to embark on my journey in software development and contribute my fresh perspective and dedication to your team.
  <br />
  <br />
  After finishing my BCA, I joined an internship as a MERN Developer, where I gained hands-on experience in developing web applications using MongoDB, Express.js, React.js, and Node.js. This opportunity allowed me to apply my academic knowledge to real-world projects, further strengthening my understanding of the MERN stack.
  <br />
  <br />
  I'm skilled in developing dynamic <b className="purple">web applications</b> using modern JavaScript libraries and frameworks like React.js and Next.js.
  <br />
  <br />
  My passion for exploring new web technologies and product development drives me to constantly expand my knowledge and improve my skills.
  <br />
  <br />
  I'm excited about the opportunity to bring my energy and enthusiasm to your organization.
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
