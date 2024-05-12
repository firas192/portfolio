import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your project images
import leaf from "../../Assets/Projects/leaf.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import suicide from "../../Assets/Projects/suicide.png";
import constr from "../../Assets/Projects/LOGO_TT_.png";
import shutdown from "../../Assets/Projects/shutdown.png";


// Import the Cloudinary video URL
const energyEventVideoURL = "https://res.cloudinary.com/dz9pdjk1o/video/upload/v1643602654/your-cloudinary-video.mp4";

function Projects() {
  // Sample project data
  const projects = [
    {
      imgPath: constr,
      title: "Projet Tunisie Telecom",
      description: "Configuration et installation des IPBX et des téléphones IP utilisant les modèles YEALINK SIP T33g et SIP T44U pour Zoom Phone. Mise en place une solution de vidéo conférence Logitech RallyPlus pour Zoom Room et Microsoft Teams room. Mise en place une solution de vidéo conférence Jabra Panacast 50 pour Zoom Room."
    },
    {
      imgPath: shutdown,
      title: "Projet Office National de la télédiffusion (ONT)",
      description: "Mise en place une solution de vidéo Conferencing Logitech RallyPlus sous Microsoft Teams et Zoom."
    },
    // {
    //   imgPath: chatify,
    //   title: "ERP",
    //   description: "Formation des employés à l'utilisation de Zoom Meeting ainsi qu'à la gestion administrative de la plateforme Zoom."
    // },
    {
      imgPath: bitsOfCode,
      title: "Projet Innov Alliance Tech",
      description: "Mise en place dans la salle de réunion une solution de vidéo conférence Avaya CU-360 pour la Platform Zoom Room. Mise en place un LAB de la solution IPBX avec la solution Avaya Série J-100 sous la Platform Zoom Phone."
    },
    {
      imgPath: leaf,
      title: "Projet de fin d’études pour le client TOPNET ",
      description: "C’est un projet où j’ai développé une application de communication unifiée, intégrant des API Zoom et Meeting SDK. L’application offre des fonctionnalités de partage de fichiers, chat en direct, gestion de calendrier et de réunions. Développée avec JavaScript, Express.js, React.js et Java pour la version mobile."
    },
    {
      imgPath: suicide,
      title: "Projet DevOps ",
      description: "J’ai utilisé Maven, Git et GitHub pour la gestion du projet, JUnit pour les tests, Jenkins pour l’intégration continue, et Docker avec Docker Compose pour l’environnement de développement, en poussant les images vers DockerHub."
    },
  ];

  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1>
          Mes <strong className="purple">Travaux </strong>Récents
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index}>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={project.imgPath}
                    title={project.title}
                    description={project.description}
                  />
                </Col>
              </Row>
            </div>
          ))}
        </Slider>
      </Container>
    </Container>
  );
}

export default Projects;
