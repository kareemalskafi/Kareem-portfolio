import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import standard from "../../Assets/Projects/standard.png";
import youapply from "../../Assets/Projects/youapply.png";
import lms from "../../Assets/Projects/lms.png";
import suicide from "../../Assets/Projects/suicide.png";
import global from "../../Assets/Projects/global.png";
import Cr01 from "../../Assets/Certificates/01 Working with Laserfiche Forms 11.jpg";
import cr02 from "../../Assets/Certificates/ASP.NET_CORE_Certificate.jpg";
import cr03 from "../../Assets/Certificates/Certificate - HTML.jpg";



function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      
      <h1 className="project-heading">
          Coming  <strong className="purple">Soon </strong>
        </h1>
        <p style={{ color: "white" }}>
           Stay tuned! A collection of my certificates showcasing my expertise and accomplishments will be added here soon.
        </p>

       <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>          

           <Col md={4} className="project-card">
                <CertificateCard
                     imgPath={standard}
                     isBlog={false}
                     title="Coming Soon"
                     description="My certifications reflect my dedication to continuous learning and professional growth. Check back soon to explore the achievements that highlight my skills and expertise."
                     ghLink="https://github.com/kareemalskafi/"
                     demoLink="https://www.linkedin.com/in/abdalkareem-alskafi/"
                />
             </Col>
        </Row>



      {/*
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
       </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>          

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={Cr01}
              isBlog={false}
              title="Global - Business Development"
              description="I contributed a dynamic company excelling in Global Business Development across diverse markets; Jordan, Emirates, Saudi Arabia, & Georgia, focusing on Marketing, Sales, & IT."
              ghLink="https://github.com/kareemalskafi/"
              demoLink="https://arino-git-main-kareemalskafi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cr02}
              isBlog={false}
              title="YOUAPPLY"
              description="With pioneering exploration, I enthusiastically contributed to the enhancement of the YouApply study abroad search engine's database, simplifying course discovery for aspiring international students."
              ghLink="https://github.com/kareemalskafi"
              demoLink="https://youapply.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cr03}
              isBlog={false}
              title="Learning Management System"
              description="Catalyzing innovation, I actively contributed to the revolutionary Learning Management System (LMS) project, greatly enhancing educational content delivery for educators and learners."
              ghLink="https://github.com/kareemalskafi/"
              demoLink="https://alshalbiapps.com/LPMS/login"
            />
          </Col>

        </Row>
*/}
      </Container>
    </Container>
  );
}

export default Certificates;
