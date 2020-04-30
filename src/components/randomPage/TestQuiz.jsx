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
import styles from "./random.module.css";

class TestQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoading: false,
      random: [
        "Italia",
        "Matrix",
        "Brasil",
        "Portugal",
        "Belgium",
        "Spain",
        "America",
        "China",
        "Indian",
        "Groland",
        "Thailand",
        "Turkey",
        "Japan",
        "Jardiland",
        "Darty",
        "On sait pas trop mais c'est surement beau",
        "Pays des merveilles",
      ],
      response: false,
      wrongResponse: false,
      awaitResponse: false,
      reponseD: false,
      counter: 0,
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
      .then((res) =>
        this.setState({
          item: res.data,
          isLoading: true,
          response: null,
        })
      );
  }

  // increment() {
  //   this.setState({ counter: this.state.counter + 1 });
  // }
  handleClick () {
    const famille = { ...this.state.famille }
    famille.Membre1.age += num
    this.setState({ famille }) 
  }


  handleClick (){
    this.setState({response: !this.state.response,awaitResponse: !this.state.awaitResponse
    }

  render() {
    return (
      <Container fluid>
        <h1>RandomPage</h1>

        <Link to="/">
          <Button>home</Button>
        </Link>
        <img
          className={styles.gif}
          src="https://media.giphy.com/media/4tLJ2AMJPp4Ws/giphy.gif"
          width="150"
          height="150"
          alt="ok"
        />

        <Row>
          <Col xs="4" md={{ size: 3, offset: 3 }}>
            <Card style={{ marginTop: 30 }}>
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
                <Button onClick={this.getItem}>Next</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
            <Col>
            <Button
                size="lg"
                onClick={this.handleClick}>
                A: {this.state.item.country}
              </Button>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default TestQuiz;
