import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { FaHtml5,FaGithub,FaBootstrap  } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiPostman } from "react-icons/si";

import { FaFigma } from "react-icons/fa";






import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { FaNode } from "react-icons/fa";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaNode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <IoLogoJavascript />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaHtml5 />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGithub />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiFirebase />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaBootstrap />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiPython />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
