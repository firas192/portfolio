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
import constr from "../../Assets/Projects/constr.png";
import shutdown from "../../Assets/Projects/shutdown.png";


// Import the Cloudinary video URL
const energyEventVideoURL = "https://res.cloudinary.com/dz9pdjk1o/video/upload/v1643602654/your-cloudinary-video.mp4";

function Projects() {
  // Sample project data
  const projects = [
    {
      imgPath: constr,
      title: "Constructor Project Management",
      description: "Configuration et installation des IPBX et des téléphones IP utilisant les modèles YEALINK SIP T33g et SIP T44U pour Zoom Phone. Mise en place une solution de vidéo conférence Logitech RallyPlus pour Zoom Room et Microsoft Teams room. Mise en place une solution de vidéo conférence Jabra Panacast 50 pour Zoom Room."
    },
    {
      imgPath: shutdown,
      title: "World Energy Hub",
      description: "Mise en place une solution de vidéo Conferencing Logitech RallyPlus sous Microsoft Teams et Zoom."
    },
    {
      imgPath: chatify,
      title: "ERP",
      description: "Formation des employés à l'utilisation de Zoom Meeting ainsi qu'à la gestion administrative de la plateforme Zoom."
    },
    {
      imgPath: bitsOfCode,
      title: "Guido",
      description: "Mise en place dans la salle de réunion une solution de vidéo conférence Avaya CU-360 pour la Platform Zoom Room. Mise en place un LAB de la solution IPBX avec la solution Avaya Série J-100 sous la Platform Zoom Phone."
    },
    {
      imgPath: leaf,
      title: "RestoTech",
      description: "Développement d'une application web et mobile avec JavaScript, Express.js en backend, et React.js en frontend. Création d'une application mobile avec Java dans Android Studio. Utilisation de MySQL comme base de données pour l'ensemble du projet. Conception d'applications personnalisées pour la communication unifiée, incluant le partage de fichiers, le chat en direct, la gestion de calendrier, la gestion des réunions programmées et instantanées, et bien plus encore. Collaboration avec Zoom en tant qu'ISV, en utilisant Server-to-Server OAuth et l'application Meeting SDK pour une gestion souple et efficace des réunions, avec une interface optimisée."
    },
    {
      imgPath: suicide,
      title: "SecBaby",
      description: "Utilisation de Maven pour gérer les dépendances et construire le projet. Utilisation de Git pour la gestion du code source et le contrôle des versions en utilisant GitHub comme service d’hébergement. Création et exécution de tests unitaires à l’aide de JUnit. Mise en place d’une intégration continue à l’aide de Jenkins pour automatiser la construction et les tests. Configuration d’un environnement de développement avec Docker en utilisant Docker Compose pour créer un environnement Spring Boot avec MySQL. Push des images Docker générées vers DockerHub pour la distribution continue."
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
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
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
