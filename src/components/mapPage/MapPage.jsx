import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./MapPage.module.css";

function MapPage() {
  return (
    <Container fluid className={styles.mapPage}>
      <Row>
        <Col>
          <h1>MapPage</h1>
          <Link to="/">
            <Button>home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default MapPage;
