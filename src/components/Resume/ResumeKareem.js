import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Kareem-Al-Skafi-Computer-Engineer-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import {
  NameTitle,
  ContactInfo,
  Education,
  Skills,
  Graduation,
  Language,
  Refrance,
  WorkExperience,
} from "./ResumeContent";

function ResumeKareem() {
  return (
    <Container fluid className="resume-kareem">
      <Particle />
      <Container className="resume-name">
        <NameTitle />
      </Container>
      <Container className="resume-contact">
        <ContactInfo />
      </Container>
      <Container className="resume-contact">
        <Row>
          <Col md={6} style={{ paddingRight: "25px" }}>
            <Row>
              <Education />
            </Row>
            <Row>
              <Graduation />
            </Row>
          </Col>

          <Col md={6} style={{ paddingLeft: "25px" }}>
            <Skills />
          </Col>
        </Row>
      </Container>
      <Container className="resume-contact">
        <Row>
          <Col md={6} style={{ paddingRight: "25px" }}>
            <WorkExperience />
          </Col>
          <Col md={6} style={{ paddingLeft: "25px" }}>
            <Row>
              <Language />
            </Row>
            <Row>
              <Refrance />
            </Row>
          </Col>
        </Row>
      </Container>
      <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" ,marginTop:"100px", position: "relative", padding:"12px 50px"}}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>

    </Container>
  );
}

export default ResumeKareem;
