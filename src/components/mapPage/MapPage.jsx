import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

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
          <MapChart setTooltipContent={setContent} />
          <ReactTooltip>{content}</ReactTooltip>
        </Col>
      </Row>
    </Container>
  );
}

export default MapPage;
