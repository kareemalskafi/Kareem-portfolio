import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCards";
import Particle from "../Particle";
import CertLaserfiche01 from "../../Assets/Certificates/Laserfiche/01 Working with Laserfiche Forms 11.jpg";
import CertLaserfiche02 from "../../Assets/Certificates/Laserfiche/02 Integrating with the Laserfiche API.jpg";
import CertLaserfiche03 from "../../Assets/Certificates/Laserfiche/03 Integrations with Laserfiche 10 .jpg";
import CertLaserfiche04 from "../../Assets/Certificates/Laserfiche/04 Getting Started with Workflow Lab.jpg";
import CertLaserfiche05 from "../../Assets/Certificates/Laserfiche/05 Reporting and Analytics in Laserfiche.jpg";
import CertLaserfiche06 from "../../Assets/Certificates/Laserfiche/06 Records Management with Laserfiche 10.jpg";
import CertLaserfiche07 from "../../Assets/Certificates/Laserfiche/07 Quick Fields Tutorials.jpg";
import CertLaserfiche08 from "../../Assets/Certificates/Laserfiche/08 Tackling Your First Automation.jpg";
import CertLaserfiche09 from "../../Assets/Certificates/Laserfiche/09 Time Saving Tips and Tricks.jpg";
import CertLaserfiche10 from "../../Assets/Certificates/Laserfiche/10 The Approver_s Guide to Aspire.jpg";

import CertOrange01 from "../../Assets/Certificates/Orange/Orange_Coding_School_Internship_ProgramCR.jpg";
import CertOrange02 from "../../Assets/Certificates/Orange/Certificate - HTML.jpg";
import CertOrange03 from "../../Assets/Certificates/Orange/Certificate - CSS.jpg";
import CertOrange04 from "../../Assets/Certificates/Orange/Certificate - Javascript.jpg";

import CertPSUT01 from "../../Assets/Certificates/PSUT_ASP.NET_CORE_Certificate.jpg";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      
      <h1 className="project-heading">
         Explore My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
         Here are the certifications that highlight my expertise, dedication, and commitment to professional growth. Each certificate represents a milestone in my journey to mastering new skills and technologies.
        </p>
     
       <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>          

       <Col md={3} className="project-card">
                <CertificateCard
                     imgPath={CertOrange01}
                     isBlog={false}
                     title="Full Stack - ASP.NET Core MVC"
                     demoLink="https://orange.jo/en"
                     buttonName="Orange"
                />
             </Col>

             <Col md={3} className="project-card">
                <CertificateCard
                     imgPath={CertOrange02}
                     isBlog={false}
                     title={<span>HTML<br />Development</span>}
                     demoLink="https://orange.jo/en"
                     buttonName="Orange"
                />
             </Col>

             <Col md={3} className="project-card">
                <CertificateCard
                     imgPath={CertOrange03}
                     isBlog={false}
                     title={<span>CSS<br />Development</span>}
                     demoLink="https://orange.jo/en"
                     buttonName="Orange"
                />
             </Col>

             <Col md={3} className="project-card">
                <CertificateCard
                     imgPath={CertOrange04}
                     isBlog={false}
                     title={<span>JavaScript<br />&nbsp;</span>}
                     demoLink="https://orange.jo/en"
                     buttonName="Orange"
                />
             </Col>

             <Col md={3} className="project-card">
                <CertificateCard
                     imgPath={CertPSUT01}
                     isBlog={false}
                     title={<span>ASP.NET CORE</span>}
                     demoLink="https://www.psut.edu.jo/"
                     buttonName="PSUT"
                />
             </Col>

           <Col md={3} className="project-card">
                <CertificateCard
                     imgPath={CertLaserfiche01}
                     isBlog={false}
                     title="Working with Laserfiche Forms 11"
                     demoLink="https://www.laserfiche.com/"
                     buttonName="Laserfiche"
                />
             </Col>

             <Col md={3} className="project-card">
                <CertificateCard
                     imgPath={CertLaserfiche02}
                     isBlog={false}
                     title="Integrating with the Laserfiche API"
                     demoLink="https://www.laserfiche.com/"
                     buttonName="Laserfiche"
                />
             </Col>

             <Col md={3} className="project-card">
                <CertificateCard
                     imgPath={CertLaserfiche03}
                     isBlog={false}
                     title="Integrations with Laserfiche 10 "
                     demoLink="https://www.laserfiche.com/"
                     buttonName="Laserfiche"
                />
             </Col>

             <Col md={3} className="project-card">
                <CertificateCard
                     imgPath={CertLaserfiche05}
                     isBlog={false}
                     title="Reporting and Analytics in Laserfiche"
                     demoLink="https://www.laserfiche.com/"
                     buttonName="Laserfiche"
                />
             </Col>

             <Col md={3} className="project-card">
                <CertificateCard
                     imgPath={CertLaserfiche06}
                     isBlog={false}
                     title="Records Management with Laserfiche 10"
                     demoLink="https://www.laserfiche.com/"
                     buttonName="Laserfiche"
                />
             </Col>

             <Col md={3} className="project-card">
                <CertificateCard
                     imgPath={CertLaserfiche07}
                     isBlog={false}
                     title={<span>Quick Fields<br />Tutorials<br />&nbsp;</span>}
                     demoLink="https://www.laserfiche.com/"
                     buttonName="Laserfiche"
                />
             </Col>

             <Col md={3} className="project-card">
                <CertificateCard
                     imgPath={CertLaserfiche08}
                     isBlog={false}
                     title={<span>Tackling Your <br />First Automation<br />&nbsp;</span>}
                     demoLink="https://www.laserfiche.com/"
                     buttonName="Laserfiche"
                />
             </Col>

             <Col md={3} className="project-card">
                <CertificateCard
                     imgPath={CertLaserfiche04}
                     isBlog={false}
                     title="Getting Started with Workflow Lab"
                     demoLink="https://www.laserfiche.com/"
                     buttonName="Laserfiche"
                />
             </Col>

             <Col md={3} className="project-card">
                <CertificateCard
                     imgPath={CertLaserfiche09}
                     isBlog={false}
                     title="Time Saving Tips and Tricks"
                     demoLink="https://www.laserfiche.com/"
                     buttonName="Laserfiche"
                />
             </Col>

             <Col md={3} className="project-card">
                <CertificateCard
                     imgPath={CertLaserfiche10}
                     isBlog={false}
                     title="The Approver_s Guide to Aspire"
                     demoLink="https://www.laserfiche.com/"
                     buttonName="Laserfiche"
                />
             </Col>

        </Row>

        <p style={{ color: "white", marginTop: "20px" }}>
         Looking for more? Additional certificates are available upon request to showcase my broader range of skills and achievements.
        </p>

      </Container>
    </Container>
  );
}

export default Certificates;