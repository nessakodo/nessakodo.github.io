import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import git from "./github.module.css";



function Github() {
  
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
  
<div className={git.calandar}>
<GitHubCalendar         
        className = "calendar"
        username="nessakodo"
        blockSize={16}
        blockMargin={10}
        color="#e884e1"
        fontSize={16}
        colorScheme="dark"  
      />
</div>
</Row>
  );
}

export default Github;
