import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kareem Al_Skafi </span>
            from <span className="purple"> Amman, Jordan.</span>
            <br />I am a junior website developer at web design, web development, and digital marketing company.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Fix something
            </li>
            <li className="about-activity">
              <ImPointRight /> Work in a garden
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kareem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
