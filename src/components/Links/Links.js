import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import CryptoJS from "crypto-js";
import Content01 from "./Content01";
import Content02 from "./Content02";

function Links() {
  const [authState, setAuthState] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const hashedPassword01 = "pmWkWSBCL51Bfkhn79xPuKBKHz//H6B+mY6G9/eieuM=";
  const hashedPassword02 = "WZRHGrsBESr8wYFZ9sx0tPURuZgG2lmzyvWpwXPKz8U=";

  const hashedInputPassword = CryptoJS.SHA256(password).toString(
    CryptoJS.enc.Base64
  );

  const handlePasswordSubmit = () => {
    setShowError(false);
    if (isButtonDisabled) {
      setShowError(true);
      return;
    }

    if (hashedInputPassword === hashedPassword01) {
      setAuthState("hashedPassword01");
      setShowError(false);
    } else if (hashedInputPassword === hashedPassword02) {
      setAuthState("hashedPassword02");
      setShowError(false);
    } else {
      setShowError(true);
      setAttempts((prev) => prev + 1);
    }

    if (attempts >= 2) {
      setIsButtonDisabled(true);
      setTimeRemaining(6);
    }
  };

  useEffect(() => {
    let timer;
    if (isButtonDisabled && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsButtonDisabled(false);
      setShowError(false);
    }

    return () => clearInterval(timer);
  }, [isButtonDisabled, timeRemaining]);

  const handleReset = () => {
    setPassword("");
    setAuthState("");
    setShowError(false);
    setIsButtonDisabled(false);
    setAttempts(0);
    setTimeRemaining(0);
  };

  return (
    <Container>
      {!authState ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <br />
          <br />
          <br />
          <h1 className="project-heading">
            Please enter your <strong className="purple">Password</strong> to
            access the <strong className="purple">Content</strong>
          </h1>
          <br />
          <br />
          <div
            className="contact-form"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <input
              type="password"
              className="form-control"
              required
              minLength="3"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                justifyContent: "center",
                width: "50%",
              }}
            />
          </div>
          <br />
          <br />
          <Button
            size="lg p-2.5 mt-3"
            className="like-btn"
            style={{ marginBottom: "30px" }}
            type="submit"
            onClick={handlePasswordSubmit}
            disabled={isButtonDisabled}
          >
            Submit ✉
          </Button>

          {showError && (
            <Alert
              variant="danger"
              style={{
                marginTop: "20px",
                borderRadius: "8px",
                padding: "15px",
                fontSize: "1.1rem",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f8d7da",
                color: "#721c24",
                border: "1px solid #f5c6cb",
              }}
            >
              <BsFillExclamationCircleFill
                style={{ marginRight: "10px", fontSize: "1.5rem" }}
              />
              <strong>Error!</strong>{" "}
              {attempts === 1 ? (
                "Incorrect password. Please try again."
              ) : attempts === 2 ? (
                "Incorrect password. Second attempt. If failed, you will need to wait."
              ) : attempts >= 3 ? (
                <>
                  You have exceeded the maximum number of attempts. Please wait{" "}
                  <strong style={{ color: "#d9534f", fontWeight: "bold" }}>
                    {timeRemaining} seconds
                  </strong>{" "}
                  before trying again.
                </>
              ) : (
                ""
              )}
            </Alert>
          )}
        </div>
      ) : authState === "hashedPassword01" ? (
        <Content01 />
      ) : authState === "hashedPassword02" ? (
        <Content02 />
      ) : null}

      <Particle />
    </Container>
  );
}

export default Links;
