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
              <span className="purple">     DÉCOUVREZ</span> QUI JE SUIS
            </h1>
            <div class="home-about-body">
              <h3>Consultant Spécialisé en Communications Unifiées</h3>
              <p>
                Avec une expertise reconnue dans l'intégration des SDKs et APIs de Zoom, j'ai aidé plusieurs entreprises en Tunisie à améliorer leurs systèmes CRM. Parmi mes projets notables, on compte Tunisia Telecom et STIR.
              </p>
              <h3>Développeur d'Applications Web et Mobiles</h3>
              <p>
                J'ai utilisé React, Express.js, et Java pour développer des applications intégrant Zoom pour une communication unifiée. Ces applications offrent des services tels que le centre de contact Zoom, les réunions Zoom et le téléphone Zoom.
              </p>
              <h3>Expérience en Maintenance et Support Client</h3>
              <p>
                Mon expérience comprend également des opérations de maintenance et de support client, garantissant la satisfaction et le succès de mes clients.
              </p>
            </div>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI SUR Linkedin</h1>
            <p>
              N’hésitez pas à <span className="purple">me contacter </span>sur
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
