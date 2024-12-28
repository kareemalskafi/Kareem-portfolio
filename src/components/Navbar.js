import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

import Dropdown from "react-bootstrap/Dropdown";

//import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineFileProtect,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const navigate = useNavigate();

  const handleNavigateToLinks = () => {
    updateExpanded(false);
    navigate("/links");
  };

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/certificate"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFileProtect style={{ marginBottom: "2px" }} />{" "}
                Certificates
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineMail style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

            {/*
            <Nav.Item className="nav-dropdown">
              <div className="dropdown">
                <Nav.Link as="div" className="dropdown-toggle">
                  <AiOutlineMail style={{ marginBottom: "2px" }} />&nbsp;Contact
                </Nav.Link>
                <div className="dropdown-menu">
                  <Nav.Link
                    as={Link}
                    to="/contact-email"
                    onClick={() => updateExpanded(false)}
                    className="dropdown-item"
                  >
                    <AiOutlineMail style={{ marginBottom: "2px" }} /> Email
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/contact-phone"
                    onClick={() => updateExpanded(false)}
                    className="dropdown-item"
                  >
                    <AiOutlineMail style={{ marginBottom: "2px" }} /> Phone
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/contact-form"
                    onClick={() => updateExpanded(false)}
                    className="dropdown-item"
                  >
                    <AiOutlineMail style={{ marginBottom: "2px" }} /> Form
                  </Nav.Link>
                </div>
              </div>
            </Nav.Item>
*/}

            <Nav.Item className="fork-btn">
              <Button
                className="fork-btn-inner"
                onClick={handleNavigateToLinks}
              >
                <FaLink style={{ fontSize: "1.2em" }} />
              </Button>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://www.linkedin.com/in/abdalkareem-alskafi/"
                target="_blank"
                className="fork-btn-inner"
              >
                <FaLinkedinIn style={{ fontSize: "1.2em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
