import { React, useState } from "react";
import { Form } from "react-bootstrap";
import { Container, Row, Col, Button, InputGroup } from "react-bootstrap";

function ContactForm() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true) {
      alert(
        "Thanks for writing to me. I have received your E-mail and i will respond to it shortly. 🌹"
      );
    }
  };

  return (
    <Container fluid className="contact-section">
      <h1 style={{ fontSize: "2.6em", marginTop: "150px" }}>
        {" "}
        Mail <span className="purple"> ME </span>{" "}
      </h1>

      <Container className="contact-form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3  justify-content-md-center ">
            <Form.Group as={Col} md="5" controlId="validationCustom01">
              <Form.Control
                className="form-control"
                required
                type="text"
                placeholder="Name"
                minLength="3"
                style={{
                  backgroundColor: "rgb(0,0,0,0)",
                  color: "whitesmoke ",
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your real name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3 justify-content-md-center">
            <Form.Group as={Col} md="5" controlId="validationCustomUsername">
              <InputGroup hasValidation>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  type="email"
                  placeholder="E-mail"
                  aria-describedby="inputGroupPrepend"
                  required
                  style={{
                    backgroundColor: "rgb(0,0,0,0)",
                    color: "whitesmoke",
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your E-mail.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3 justify-content-md-center ">
            <Form.Group
              as={Col}
              md="5"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter Message"
                componentClass="textarea"
                required
                minLength="2"
                style={{
                  height: "220px",
                  backgroundColor: "rgb(0,0,0,0)",
                  color: "whitesmoke",
                }}
              />
              <Form.Control.Feedback type="invalid">
                Write at least one word!
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button size="lg p-2.5 mt-3" className="like-btn" type="submit">
            Send ✉
          </Button>
        </Form>
      </Container>
    </Container>
  );
}

export default ContactForm;
