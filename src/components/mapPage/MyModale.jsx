import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "reactstrap";
import Axios from "axios";

class MyModale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< Updated upstream
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
=======
      loading: true,
      artists: [],
      item: [],
>>>>>>> Stashed changes
    };
    this.toggle = this.toggle.bind(this);
    this.getArtistsList = this.getArtistsList.bind(this);
    this.getItem = this.getItem.bind(this);
  }

  getArtistsList() {
    const { artistsId } = this.props;
    const listArtist = artistsId.map((artist) => {
      return Axios.get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artist}?offset=1&limit=50`
      )
        .then((res) => {
          this.setState({ artists: [...this.state.artists, res.data] });
        })
        .then((res) => {
          console.log(res.data, "Update");
        });
    });
  }
  componentDidMount() {
    this.getArtistsList();
    this.getItem();
  }

  // getItem() {
  //   for (let i = 0; i < 10; i++) {
  //     const randomNumber = Math.floor(Math.random() * 50000) + 1;
  //     Axios.get(
  //       `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNumber}`
  //     )
  //       .then((res) => this.state.item.push({ item: res.data, loading: false }))
  //       .then(console.log(this.state.item))
  //       .catch((err) => {
  //         console.log(err);
  //         console.log("ERROR");
  //       });
  //   }
  // }
  getItem = async () => {
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 50000) + 1;
      let res = await Axios.get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNumber}`
      );
      let { data } = res.data;
      this.state.item.push({ item: data });
      this.setState({ loading: false });
      console.log(this.state.item);
    }
  };

  // componentDidUpdate(prevProps) {
  //   const { artistsId } = this.props;
  //   if (prevProps.artistsId !== artistsId) {
  //     this.setState({
  //       loading: true,
  //     });

  //     const promiseArray = artistsId.map((artist) => {
  //       return Axios.get(
  //         `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artist}?offset=1&limit=50`
  //       ).then(({ data }) => {
  //         return data;
  //       });
  //     });

  //     Promise.all(promiseArray)
  //       .then((res) => {
  //         this.setState({
  //           artists: res.data,
  //         });
  //       })

  //       .then(console.log(promiseArray[0]))
  //       .catch((err) => console.log(err.message))
  //       .finally(() => {
  //         this.setState({
  //           loading: false,
  //           list: promiseArray,
  //         });
  //       });
  //   }
  // }

  toggle() {
    const { setModalOpen } = this.props;
    setModalOpen();
  }

  render() {
    const {
      buttonLabel,
      className,
      name,
      artistsList,
      artistsId,
      isOpen,
    } = this.props;
    const { array } = this.state.item;

    return (
      <div>
        {buttonLabel && (
          <Button color="danger" onClick={this.toggle}>
            {buttonLabel}
          </Button>
        )}
        <Modal isOpen={isOpen} toggle={this.toggle} className={className}>
          <ModalHeader toggle={this.toggle}>{name}</ModalHeader>
          <ModalBody>
<<<<<<< Updated upstream
            {this.state.arrayTest.map((pers) => (
              <p>{pers.name}</p>
            ))}
=======
            <ul>
              {array && !this.state.loading ? (
                array.map((pers) => <li>{pers.item.objectName}</li>)
              ) : (
                <Spinner />
              )}
            </ul>
>>>>>>> Stashed changes
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MyModale;
