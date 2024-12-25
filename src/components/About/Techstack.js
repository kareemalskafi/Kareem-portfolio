import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJsBadge ,
  DiReact,
  DiMongodb,
  DiGit,
  DiBootstrap,
  DiDatabase,
  DiWindows 


} from "react-icons/di";
import {
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiArduino,
  SiAdobephotoshop,
  SiDotnet,
  SiSharp,
  SiJquery,
  SiMiro,



} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>


      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSharp />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiWindows />
      </Col>



      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJsBadge  />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMiro />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col>   

      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>

    </Row>
  );
}

export default Techstack;
