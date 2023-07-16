import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SmartHealth"
              description="Decentralized application utilizing smart contracts to facilitate secure interactions between patients and corresponding healthcare providers using a secure authentication with Metamask/Coinbase wallets."
              ghLink="https://github.com"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Interproz"
              description="Translation staffing agency platform with opportunities for multilingual individuals to explore available job openings as facilitated by Interproz administrators. Also provides methods of contact and inquiry forms for clients seeking services."
              ghLink="https://github.com"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Cryptoad"
              description="Live market crypto dashboard with user-generated watchlist, providing a variety of trading strategies for bot execution upon account and wallet connection, and customizing given parameters for the bot to execute orders."
              ghLink="https://github.com"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Sonic Pi"
              description="Music coded within the live coding synthesizer Sonic Pi, in which both internal and external sounds have been altered by code and combined to create new sounds that are infinitely changeable in a live performance setting."
              ghLink="https://github.com"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Groovy Galactic"
              description="Custom portfolio website for a local artist showcasing their use of different mediums, offering visitors the opportunity to purchase digital and physical items through WooCommerce."
              ghLink="https://github.com"
              demoLink="" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Butterfleye"
              description="NFT collection and project based off of AI generated art creations and integrations. Crafted to be dynamic and utilized in a variety of ecommerce contexts and forms."
              ghLink="https://github.com"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
