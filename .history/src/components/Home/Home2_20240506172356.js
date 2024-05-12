import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
  <Row>
    <Col md={8} className="home-about-description">
      <h1 style={{ fontSize: "2.6em" }}>
        LET ME <span className="purple"> INTRODUCE </span> MYSELF
      </h1>
      <p className="home-about-body">
        I'm a consultant specializing in enterprise networks and unified communications. Expertise in integrating Zoom SDKs and APIs for CRM applications. Experienced in maintenance operations, customer support, and notable projects including Tunisia Telecom and STIR. Developed web and mobile apps with React, Express.js, and Java, integrating with Zoom for unified communication.
      </p>
    </Col>
    <Col md={4} className="myAvtar">
      <Tilt>
        <img src={myImg} className="img-fluid" alt="avatar" />
      </Tilt>
    </Col>
  </Row>
  <Row>
    <Col md={12} className="home-about-social">
      <h1>FIND ME ON</h1>
      <p>
        Feel free to <span className="purple">connect </span>with me
      </p>
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/firas-ghobber-aa6805233/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </Col>
  </Row>
</Container>

    </Container>
  );
}
export default Home2;
