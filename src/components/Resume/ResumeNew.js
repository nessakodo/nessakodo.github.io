import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/NessaKodoResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/zoom/lib/styles/index.css";

const resumeLink =
  "https://raw.githubusercontent.com/nessakodo/nessakodo.github.io/main/src/Assets/NessaKodoResume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const zoomPluginInstance = zoomPlugin();

  return (
    <div>
      <Container fluid className="project-section">
        <Particle />
        <h1 className="project-heading">
          My <strong className="purple"> Resume </strong>
        </h1>
        <p style={{ color: "white" }}>
          To download, click the button below.
        </p>
        <Row style={{ justifyContent: "center", position: "relative" }} className="resume-row">
        </Row>

        <Row className="resume">
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.7.570/build/pdf.worker.min.js`}>
            <Viewer fileUrl={resumeLink} plugins={[zoomPluginInstance]} />
          </Worker>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }} className="button-row">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
