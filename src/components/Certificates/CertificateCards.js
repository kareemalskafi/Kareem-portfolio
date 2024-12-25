import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import {AiOutlineFileProtect} from "react-icons/ai";

function CertificateCards(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card className="project-card-view">
      <Card.Img
       variant="top"
       src={props.imgPath}
       alt="card-img"
       style={{ cursor: "pointer" }}
       onClick={handleShow}
       />
      <Card.Body>
        <Card.Title style={{ fontWeight:"bold" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button> */}
        {"\n"}
        {"\n"}
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        <Modal show={show} onHide={handleClose} centered>
           <Modal.Body>
             <img
               src={props.imgPath}
               alt="Full-size image"
               style={{ width: "100%", height: "100%" }}
             />
           </Modal.Body>
        </Modal>
        
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{marginLeft: "1px"}}
          >
            <AiOutlineFileProtect /> &nbsp;
            {props.buttonName}
          </Button>
        )}

      </Card.Body>
    </Card>
  );
}
export default CertificateCards;