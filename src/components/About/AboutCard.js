import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           


          Bonjour à tous, <span className="purple">Firas Ghobber .</span><br></br> 
            <br /> Je suis ingénieur en télécommunications, diplômé de l’École Privée d’Ingénierie de Tunis (ESPRIT).
            <br />
            Actuellement, 
          je travaille en tant qu’ingénieur en télécommunications et consultant spécialisé dans les réseaux d’entreprise et les communications unifiées chez INNOV ALLIANCE TECH,
           une partie du Groupe IPS. Je participe à l’étude, au déploiement, au support technique pour les clients, et à la maintenance des réseaux.

            <br />
            <br />

          En dehors de cela, voici quelques activités que j'adore faire !</p>
<ul>
    <li className="about-activity">
        <ImPointRight /> Jouer à des jeux
    </li>
    <li className="about-activity">
        <ImPointRight /> Faire du sport
    </li>
    <li className="about-activity">
        <ImPointRight /> Voyager
    </li>
</ul>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">GHobber</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
