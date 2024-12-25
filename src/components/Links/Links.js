import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";


import { CgWebsite } from "react-icons/cg";


function Links() {
  return (
    
      <Container className="home-content">
        <Row>
          <Col md={4} className="home-header">
            
           <Button variant="primary" href="https://google.com" target="_blank" style={{margin:"10px"}}>1. Google</Button><br/>

           <Button variant="primary" href="https://google.com" target="_blank"> <CgWebsite /> &nbsp; {"Facebook"}</Button>
          </Col>
       
          <Col md={4} className="home-header">
            
            <Button variant="primary" href="https://google.com" target="_blank" style={{margin:"10px"}}>1. Google</Button><br/>
 
            <Button variant="primary" href="https://google.com" target="_blank"> <CgWebsite /> &nbsp; {"Facebook"}</Button>
           </Col>

           <Col md={4} className="home-header">
            
            <Button variant="primary" href="https://google.com" target="_blank" style={{margin:"10px"}}>1. Google</Button><br/>
 
            <Button variant="primary" href="https://google.com" target="_blank"> <CgWebsite /> &nbsp; {"Facebook"}</Button>
           </Col>
           
     
        </Row> 
        <Particle />
      </Container>
     

  );
}

export default Links;
