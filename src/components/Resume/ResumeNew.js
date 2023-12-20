import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/NessaKodoResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/nessakodo/nessakodo.github.io/main/src/Assets/NessaKodoResume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

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
          {/* <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button> */}
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
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
