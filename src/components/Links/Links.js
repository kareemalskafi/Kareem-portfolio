import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";

function Links() {
  // إدارة حالة كلمة المرور
  const [authState, setAuthState] = useState(""); // "123" أو "1" لتحديد الحالة
  const [password, setPassword] = useState("");

  // التعامل مع إدخال كلمة المرور
  const handlePasswordSubmit = () => {
    if (password === "123") {
      setAuthState("123"); // عرض المحتوى الأول
    } else if (password === "1") {
      setAuthState("1"); // عرض المحتوى الثاني
    } else {
      alert("كلمة المرور غير صحيحة. حاول مرة أخرى.");
    }
  };

  return (
    <Container>
      {/* تحقق إذا كانت المصادقة صحيحة */}
      {!authState ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>أدخل كلمة المرور للوصول إلى المحتوى</h2>
          <input
            type="password"
            placeholder="أدخل كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              margin: "10px 0",
              width: "300px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <br />
          <Button variant="primary" onClick={handlePasswordSubmit}>
            إدخال
          </Button>
        </div>
      ) : authState === "123" ? (
        // المحتوى الأول إذا كانت كلمة المرور 123
        <Container className="home-content">

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>          

            <Col md={4} className="home-header">
              <h1 className="hyper-link">Social Media </h1>

               <Button variant="primary" href="https://google.com/" target="_blank" style={{margin:"7px"}}>1. Google</Button>

               <Button variant="primary" href="https://facebook.com/" target="_blank" style={{margin:"7px"}}>2. Facebook</Button>

               <Button variant="primary" href="https://www.youtube.com/" target="_blank" style={{margin:"7px"}}>3. Youtube</Button>

               <Button variant="primary" href="https://linkediin.com/" target="_blank" style={{margin:"7px"}}>4. Linkedin</Button>
            </Col>

            <Col md={4} className="home-header">
              <h1 className="hyper-link">Social Media </h1>

               <Button variant="primary" href="https://google.com/" target="_blank" style={{margin:"7px"}}>1. Google</Button>

               <Button variant="primary" href="https://facebook.com/" target="_blank" style={{margin:"7px"}}>2. Facebook</Button>

               <Button variant="primary" href="https://www.youtube.com/" target="_blank" style={{margin:"7px"}}>3. Youtube</Button>

               <Button variant="primary" href="https://linkediin.com/" target="_blank" style={{margin:"7px"}}>4. Linkedin</Button>
            </Col>

            <Col md={4} className="home-header">
              <h1 className="hyper-link">Social Media </h1>

               <Button variant="primary" href="https://google.com/" target="_blank" style={{margin:"7px"}}>1. Google</Button>

               <Button variant="primary" href="https://facebook.com/" target="_blank" style={{margin:"7px"}}>2. Facebook</Button>

               <Button variant="primary" href="https://www.youtube.com/" target="_blank" style={{margin:"7px"}}>3. Youtube</Button>

               <Button variant="primary" href="https://linkediin.com/" target="_blank" style={{margin:"7px"}}>4. Linkedin</Button>
            </Col>

            </Row>
        </Container>
      ) : authState === "1" ? (
        // المحتوى الثاني إذا كانت كلمة المرور 1
        <Container className="home-content">

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>          

          <Col md={4} className="home-header">
              <h1 className="hyper-link">Social Media </h1>

               <Button variant="primary" href="https://google.com/" target="_blank" style={{margin:"7px"}}>1. Google</Button>

               <Button variant="primary" href="https://facebook.com/" target="_blank" style={{margin:"7px"}}>2. Facebook</Button>

               <Button variant="primary" href="https://www.youtube.com/" target="_blank" style={{margin:"7px"}}>3. Youtube</Button>

               <Button variant="primary" href="https://linkediin.com/" target="_blank" style={{margin:"7px"}}>4. Linkedin</Button>
            </Col>

            <Col md={4} className="home-header">
              <h1 className="hyper-link">Social Media </h1>

               <Button variant="primary" href="https://google.com/" target="_blank" style={{margin:"7px"}}>1. Google</Button>

               <Button variant="primary" href="https://facebook.com/" target="_blank" style={{margin:"7px"}}>2. Facebook</Button>

               <Button variant="primary" href="https://www.youtube.com/" target="_blank" style={{margin:"7px"}}>3. Youtube</Button>

               <Button variant="primary" href="https://linkediin.com/" target="_blank" style={{margin:"7px"}}>4. Linkedin</Button>
            </Col>

            </Row>
        </Container>
      ) : null}

      <Particle/>
    </Container>
    
  );
}

export default Links;





