import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillGoogleCircle,
  AiFillPhone,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row>
          <Col md={8} className="home-contact">
            <h1 style={{ fontSize: "2.6em" }}>
              Find <span className="purple"> ME </span> On
            </h1>
            <p className="home-contact">
              Feel free to <span className="purple">connect </span> with me 🤼‍♂️
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kareemalskafi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  contact-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/Skafilly/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  contact-social-icons"
                >
                  <ImFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdalkareem-alskafi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  contact-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kareem_alskafi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour contact-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:kareemalskafi@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  contact-social-icons"
                >
                  <AiFillGoogleCircle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:00962788385803"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  contact-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4} className="myAvtar-contact">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>

      <ContactForm />
    </Container>
  );
}

export default Contact;
