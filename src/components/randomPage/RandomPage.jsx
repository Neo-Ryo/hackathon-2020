import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

class RandomPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoading: false,
    };
    this.getItem = this.getItem.bind(this);
  }

  componentDidMount() {
    this.getItem();
  }

  getItem() {
    const randomNumber = Math.floor(Math.random() * 50000) + 1;
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNumber}`
      )
      .then((res) => this.setState({ item: res.data, isLoading: true }));
  }

  render() {
    return (
      <Container fluid>
        <h1>RandomPage</h1>

        <Link to="/">
          <Button>home</Button>
        </Link>

        <Row>
          <Col xs="4" md={{ size: 3, offset: 3 }}>
            <Card>
              <CardImg
                top
                width="100%"
                style={{ width: "100%" }}
                src={
                  this.state.item.primaryImageSmall
                    ? this.state.item.primaryImageSmall
                    : "https://www.k11artfoundation.org/wp-content/uploads/Met_logo-1.png"
                }
                alt={this.state.item.title}
              />
              <CardBody>
                <CardTitle>
                  <i>{this.state.item.title}</i>
                </CardTitle>
                <CardSubtitle>
                  <b>Artist :</b>{" "}
                  {this.state.item.artistDisplayName
                    ? this.state.item.artistDisplayName
                    : "Unknown"}
                </CardSubtitle>
                <hr></hr>
                <CardText>
                  <b>Where to see me:</b> {this.state.item.department} wing of{" "}
                  {this.state.item.repository}
                </CardText>
                <Button outline onClick={this.getItem}>
                  Next
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RandomPage;
