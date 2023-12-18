import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi there, my name is <span className="purple">Nessa Kodo </span>
            and I am based in <span className="purple"> Denver, Colorado.</span>
            <br />
            <br />
            Beyond coding, I enjoy dancing, hiking, and treasured moments with loved ones. I 
            also dabble in Sonic Pi, a live code music synth based on Ruby, creating techno style beats 
            as I work to develop one of my current projects, <span className="purple">the Sonic Pibrary.</span>
            <br></br>
            <br></br>
            Leveling up my workflow optimizations and logic design processes is an area where I find
            limitless opportunities to learn and implement new technologies and tools in my life and 
            projects. As I continue evolving as a developer, I discover intriguing parallels 
            across various domains like science, where intersections between science, tech, and humanity fascinate me. 
             <br></br>
             <br></br>
            I graduated from a full-stack software engineering BootCamp in 2022, diving into 
            computer science shortly afterward, currently pursuing it full-time. As I gaze into 
            the future, I aspire to achieve my CISSP and delve deeper into a career in cybersecurity, 
            immersing myself in securing digital landscapes."
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Producing music
            </li>
            <li className="about-activity"> 
              <ImPointRight /> &nbsp; Fire Flow Artistry
            </li>
            <li className="about-activity"> 
              <ImPointRight /> &nbsp; Adventuring Outside
            </li>
          </ul> */}
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
          Light the path to create masterpieces that captivate.{" "}
          </p>
          {/* <footer className="blockquote-footer">Nessa Kodo</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
