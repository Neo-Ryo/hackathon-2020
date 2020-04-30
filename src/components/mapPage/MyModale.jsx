import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Axios from "axios";

class MyModale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      artistsList: [],
      arrayTest: [
        {
          name: "Charly",
        },
        {
          name: "Marco",
        },
      ],
    };
  }

  getArtistsList() {
    const { artistsId } = this.props;

    Axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artistsId}`
    ).then((res) => this.setState({ artistsList: res.data }));
  }

  render() {
    const { buttonLabel, className, name, artistsList, artistsId } = this.props;
    const { modal } = this.state;

    const toggle = () => {
      this.setState({ modal: !modal });
    };

    return (
      <div>
        <Button color="danger" onClick={toggle}>
          {buttonLabel}
        </Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>{name}</ModalHeader>
          <ModalBody>
            {this.state.arrayTest.map((pers) => (
              <p>{pers.name}</p>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MyModale;
