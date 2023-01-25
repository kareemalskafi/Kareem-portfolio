import { Row, Col } from "react-bootstrap";
import { AiFillGoogleCircle, AiFillPhone } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export function NameTitle() {
  return (
    <>
      <h1 style={{ fontSize: "2.6em" }}>Kareem Al-Skafi</h1>
      <h2 className="purple">Computer Engineer</h2>
      <p>
        I fell in love with programming and I have at least learned something, I
        think… 🤷‍♂️
        <br />I am fluent in classics like
        <i>
          <b className="purple"> HTML, CSS & Javascript. </b>
        </i>
        <br />
        My field of Interest's are building new &nbsp;
        <i>
          <b className="purple">Web Technologies and Products </b> and also in
          areas related to{" "}
          <b className="purple">
            Deep Learning and Natural Launguage Processing.
          </b>
        </i>
        <br />
        Whenever possible, I also apply my passion for developing products with
        <i>
          <b className="purple"> Modern Javascript Library and Frameworks</b>
        </i>
        &nbsp; like
        <i>
          <b className="purple"> React.js </b>
        </i>
      </p>
    </>
  );
}
export function ContactInfo() {
  return (
    <>
      <Row>
        <Col md={3}>
          <li className="resume-social-icons">
            <a
              href="https://www.linkedin.com/in/abdalkareem-alskafi/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  contact-social-icons"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="purple"
              href="https://www.linkedin.com/in/abdalkareem-alskafi/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              &ensp; kareemalskafi
            </a>
          </li>
        </Col>
        <Col md={1}></Col>
        <Col md={4}>
          <li className="resume-social-icons">
            <a
              href="mailto:kareemalskafi@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  contact-social-icons"
            >
              <AiFillGoogleCircle />
            </a>
            <a
              className="purple"
              href="mailto:kareemalskafi@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              &ensp; kareemalskafi@gmail.com
            </a>
          </li>
        </Col>
        <Col md={1}></Col>
        <Col md={3}>
          <li className="resume-social-icons">
            <a
              href="tel:00962788385803"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  contact-social-icons"
            >
              <AiFillPhone />
            </a>
            <a
              className="purple"
              href="tel:00962788385803"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              &ensp; +96278-8385-803
            </a>
          </li>
        </Col>
      </Row>
    </>
  );
}
export function Education() {
  return (
    <>
      <h1 className="hyper-link">EDUCATION</h1>
      <h4>Bachelor of Computer Engineering </h4>
      <h5>
        <b>Al-Hussein Bin Talal University</b>
      </h5>
      <p style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="purple"> 2013 - 2018</span>
        <span className="purple"> Ma'an - Jordan</span>
      </p>
    </>
  );
}

export function Certificate() {
  return (
    <>
      <h1 className="hyper-link">CERTIFICATE</h1>
      <h4>ASP.NET MVC Core </h4>
      <h5>
        <b>Princess Sumaya University for Technology</b>
      </h5>
      <p style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="purple"> 2023</span>
        <span className="purple"> Amman - Jordan</span>
      </p>
    </>
  );
}

export function Skills() {
  return (
    <>
      <h1 className="hyper-link">SKILLS </h1>
      <ul className="resume-skills">
        <li>Data Structures</li>
        <li>Algorithms</li>
        <li>logic Programming</li>
        <li>Web Development</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>ASP.NET MVC Core</li>
        <li>GitHub</li>
        <li>Adobe Photoshop</li>
        <li>Adobe Illustrator</li>
        <li>Arduino</li>
      </ul>
    </>
  );
}
export function Graduation() {
  return (
    <>
      <h1 className="hyper-link">GRADUATION PROJECT </h1>
      <h4>Voice Controlled Vehicle with Obstacles Avoidance Capability. </h4>
      <p>
        The purpose is drive-by-voice into the vehicle depending upon the voice
        input. The system can provide great accuracy & efficiency using high
        precision voice recognition tools. For obstacle avoidance, the project
        propose an obstacle avoidance robotic vehicle using ultrasonic sensors
        for its movement.
      </p>
      <p style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="purple">February 2018 </span>
        <span className="purple">Faculty of Engineering - AHU</span>
      </p>
    </>
  );
}
export function Language() {
  return (
    <>
      <h1 className="hyper-link">LANGUAGES</h1>
      <h5>
        <b>Arabic</b>
        <span className="language-bar-ar"> </span>
      </h5>

      <h5 style={{ paddingTop: "10px" }}>
        <b>English</b>
        <span className="language-bar-en"> </span>
      </h5>
    </>
  );
}
export function Refrance() {
  return (
    <>
      <h1 className="hyper-link">REFERENCES</h1>
      <Row>
        <h3>
          <span className="purple">⚜ </span>
          <a
            href="https://www.linkedin.com/in/hatamleh"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            Dr. Omar Hatamleh
          </a>
        </h3>
        <p style={{ marginBottom: "0px" }}>
          <em>
            “Founder and chief business development officer, Director of
            Development At Officina Stellare”
          </em>
        </p>
        <p style={{ marginTop: "0px" }}>
          <span className="purple">E-mail:</span>{" "}
          <a
            href="mailto:omar.hatamleh-1@nasa.gov"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            <em>omar.hatamleh-1@nasa.gov</em>
          </a>
        </p>
      </Row>
      <Row>
        <h3>
          <span className="purple">⚜ </span>
          <a
            href="https://www.linkedin.com/in/gino-bucciol-204a7514a"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            Eng. Gino Bucciol
          </a>
        </h3>
        <p style={{ marginBottom: "0px" }}>
          <em>
            “Founder and chief business development officer, Director of
            Development At Officina Stellare”
          </em>
        </p>
        <p style={{ marginTop: "0px" }}>
          <span className="purple">E-mail:</span>{" "}
          <a
            href="mailto:gino.Bucciol@officinastellare.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            <em>gino.Bucciol@officinastellare.com</em>
          </a>
        </p>
      </Row>
      <Row>
        <h3>
          <span className="purple">⚜ </span>
          <a
            href="https://www.linkedin.com/in/mashhoor-al-wardat-ba162611a"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            Prof. Mashhoor Al-Wardat
          </a>
        </h3>
        <p style={{ marginBottom: "0px" }}>
          <em>
            “Department of Applied Physics and Astronomy, University of Sharjah”
          </em>
        </p>
        <p style={{ marginTop: "0px" }}>
          <span className="purple">E-mail:</span>{" "}
          <a
            href="mailto:malwardat@sharjah.ac.ae"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            <em>malwardat@sharjah.ac.ae</em>
          </a>
        </p>
      </Row>
      <Row>
        <h3>
          <span className="purple">⚜ </span>
          <a
            href="https://www.linkedin.com/in/sumaya-al-hajeri-b4b39519"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            Eng. Sumaya Al-Hajeri
          </a>
        </h3>
        <p style={{ marginBottom: "0px" }}>
          <em>“Head of Space Policies & Legislations, UAE Space Agency”</em>
        </p>
        <p style={{ marginTop: "0px" }}>
          <span className="purple">E-mail:</span>{" "}
          <a
            href="mailto:s.alhajeri@space.gov.ae"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            <em>s.alhajeri@space.gov.ae</em>
          </a>
        </p>
      </Row>
    </>
  );
}
export function WorkExperience() {
  return (
    <>
      <Row>
        <h1 className="hyper-link">WORK EXPERIENCE</h1>
        <h4>Web Developer</h4>
        <p style={{ marginBottom: "3px" }}>
          I worked on design and update websites and online applications using
          various programming languages and design tools, responsibilities such
          as creating webpage layouts, writing code, editing website content,
          and making adjustments based on client feedback.
        </p>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="purple">09/22 - Present</span>
          <span className="purple">FREELANCER</span>
        </p>
      </Row>
      <Row>
        <h4>Front-End Developer</h4>
        <p style={{ marginBottom: "3px" }}>
          I worked on writing coding languages, including HTML and CSS. Frontend
          web programing languages and skills such as JavaScript, Ajax and web
          animation techniques. Design software like Photoshop and Illustrator.
        </p>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="purple">09/21 - 09/22</span>
          <span className="purple">HABASH TECHNOLOGY CO.</span>
        </p>
      </Row>
      <Row>
        <h4>Data Engineer</h4>
        <p style={{ marginBottom: "3px" }}>
          I have been responsible for extracting and ingesting data from
          websites using web crawling tools. In this role I have been own the
          creation process of these tools, services, and workflows to improve
          crawl/ scrape analysis, reports and data management.
        </p>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="purple">09/20 - 09/21</span>
          <span className="purple">YOUAPPLY CO.</span>
        </p>
      </Row>
    </>
  );
}
