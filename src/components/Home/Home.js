import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/kodo.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
           <br />
           <br />
          <Row>
            <Col md={9} className="home-header">
            

              <h1 className="heading-name">
              
                <strong className="main-name"> NESSA KODO</strong>
              </h1>

              <div >
                <Type />
              </div>
            </Col>

            {/* <Col md={5} style={{ paddingBottom: 150 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
