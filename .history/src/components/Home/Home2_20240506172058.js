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
              I am a consultant specializing in the study, deployment, and support of enterprise networks and unified communications solutions. My expertise includes integrating SDKs and APIs, such as Zoom, for third-party CRM applications to integrate Zoom Contact Center, Zoom Meeting, or Zoom Phone.
              <br />
              <br />I have extensive experience working as an Engineer in Study and Deployment, providing technical support to clients and maintaining systems. My responsibilities include planning maintenance operations, handling customer feedback for continuous improvement, and providing technical support interventions.
              <br />
              <br />Here are some notable projects I've been involved in:
              <ul>
                <li>Deployment of IPBX and IP phones using Yealink models SIP T33g and SIP T44U for Zoom Phone at Tunisia Telecom.</li>
                <li>Implementation of Logitech RallyPlus video conferencing solution for Zoom Room and Microsoft Teams Room at Office National de la télédiffusion (ONT).</li>
                <li>Training employees at Société tunisienne des industries de raffinage (STIR) on using Zoom Meeting and administrative management of the Zoom platform.</li>
                <li>Setting up Avaya CU-360 video conferencing solution for Zoom Room and creating a LAB for IPBX solution with Avaya J-100 Series for Zoom Phone at Innov Alliance Tech.</li>
              </ul>
              <br />
              <br />In addition to my work in networks and communications, I have also developed web and mobile applications using JavaScript, Express.js, React.js, and Java, with MySQL as the backend database. These applications include features for unified communication, such as file sharing, live chat, calendar management, and scheduled and instant meetings, with integration with Zoom using Server-to-Server OAuth and the Meeting SDK for efficient meeting management.
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
                  href="https://www.linkedin.com/in/mohamedamine-boughrara-69200b203/"
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
