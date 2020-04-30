import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import styles from './MapPage.module.css'

// import "./styles.css";

import MapChart from "./MapChart";
import { Button, Container, Row, Col } from "reactstrap";

function MapPage() {
  const [content, setContent] = useState("");
  return (
    <Container className="MapPage" fluid>
      <Row>
        <Col>
          <h1>WorldMap</h1>
          <Link to="/">
            <Button>Home</Button>
          </Link>
          <img className={styles.gif} src="https://i.pinimg.com/originals/53/ea/1f/53ea1ff6ab7ce8d4f2c16dc36b4ab8f4.gif" width="150" height="150" alt="moonwalk" />
          <MapChart setTooltipContent={setContent} />
          <ReactTooltip>{content}</ReactTooltip>
        </Col>
      </Row>
    </Container>
  );
}

export default MapPage;
