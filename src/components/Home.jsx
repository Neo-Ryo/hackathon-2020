import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./bkg_homePage.module.css";

function Home() {
  return (
    <Container className={`home ${styles.bkg_img}`} fluid>
      <Row className="mb-5">
        <Col>
          <h1>DÉCOUVERTE</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <Link to="/map">
            <Button>WorldMap</Button>
          </Link>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Link to="/random">
            <Button>Random Artists</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
