import React, { useState } from "react";
import { Container, Row, Col, Alert, Form, InputGroup } from "react-bootstrap";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";

function Content02() {
  <Container className="home-content">
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col md={4} className="home-header">
        <h1 className="hyper-link">Content 02 First Row Kaa</h1>

        <Button
          variant="primary"
          className="like-btn"
          href="https://google.com/"
          target="_blank"
          style={{ margin: "7px" }}
        >
          1. Google
        </Button>

        <Button
          variant="primary"
          className="like-btn"
          href="https://facebook.com/"
          target="_blank"
          style={{ margin: "7px" }}
        >
          2. Facebook
        </Button>

        <Button
          variant="primary"
          className="like-btn"
          href="https://www.youtube.com/"
          target="_blank"
          style={{ margin: "7px" }}
        >
          3. Youtube
        </Button>

        <Button
          variant="primary"
          className="like-btn"
          href="https://linkedin.com/"
          target="_blank"
          style={{ margin: "7px" }}
        >
          4. Linkedin
        </Button>
      </Col>

      <Col md={4} className="home-header">
        <h1 className="hyper-link">Content 02 Second Row Kaa</h1>

        <Button
          variant="primary"
          className="like-btn"
          href="https://google.com/"
          target="_blank"
          style={{ margin: "7px" }}
        >
          1. Google
        </Button>

        <Button
          variant="primary"
          className="like-btn"
          href="https://facebook.com/"
          target="_blank"
          style={{ margin: "7px" }}
        >
          2. Facebook
        </Button>

        <Button
          variant="primary"
          className="like-btn"
          href="https://www.youtube.com/"
          target="_blank"
          style={{ margin: "7px" }}
        >
          3. Youtube
        </Button>

        <Button
          variant="primary"
          className="like-btn"
          href="https://linkedin.com/"
          target="_blank"
          style={{ margin: "7px" }}
        >
          4. Linkedin
        </Button>
      </Col>
    </Row>

    <Row
      style={{
        justifyContent: "flex-end",
        paddingBottom: "10px",
        paddingTop: "50px",
      }}
    ></Row>
  </Container>;
}

export default Content02;
