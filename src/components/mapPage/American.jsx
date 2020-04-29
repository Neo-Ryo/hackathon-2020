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

class American extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objectID: [],
      americanItem: [],
      isLoading: false,
    };
    this.getAmericanItem = this.getAmericanItem.bind(this);
  }

  componentDidMount() {
    this.getAmericanItem();
  }

  getAmericanItem() {
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?artistNationality=American&q=American`
      )
      .then((res) => this.setState({ item: res.data, isLoading: true }));
  }

  render() {
    return (
      <Container fluid>
        <ul>
          <li>Hello world ! </li>
        </ul>
      </Container>
    );
  }
}

export default American;
