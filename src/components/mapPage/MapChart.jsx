import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import MyModale from "./MyModale";
import Axios from "axios";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

class MapChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickIsOn: false,
      name: "",
      artistsId: [],
      artistsList: [],
      isLoading: true,
      redirectPage: false,
    };
    this.getArtistsId = this.getArtistsId.bind(this);
    // this.getArtistsList = this.getArtistsList.bind(this);
  }

  getArtistsId() {
    Axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?artistNationality=${this.state.name}q=${this.state.name}?offset=1&limit=50`
    ).then(
      (res) => (
        this.setState({ artistsId: res.data, isLoading: false }),
        console.log(res.data, "IDs"),
        console.log(this.state.name, "Ids")
      )
    );
  }

  // getArtistsList(){
  //   this.state.artistsId.map(artist => {
  //     Axios
  //       .get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artist}?offset=20&limit=20`)
  //       // .then((res) => this.setState({artistsList: res.data}))
  //       .then(res => (this.setState({artistsList: res.data}), console.log(res.data), console.log(artist)))
  //   });
  // }

  render() {
    const { setTooltipContent } = this.props;

    // if (this.state.redirectPage) {
    //   return <Redirect to={`/${this.state.name}`} />;
    // }

    return (
      <>
        <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
          <ZoomableGroup>
            {this.state.clickIsOn ? (
              <MyModale
                name={this.state.name}
                clickIsOn={this.state.clickIsOn}
                artistsList={this.state.artists}
                artistsId={this.state.artistsId.objectIDs}
              />
            ) : (
              ""
            )}
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { NAME } = geo.properties;
                      setTooltipContent(`${NAME}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    onClick={() => {
                      this.getArtistsId();
                      // this.getArtistsList();
                      const { NAME } = geo.properties;

                      this.setState({
                        clickIsOn: !this.state.clickIsOn,
                        name: NAME,
                        redirectPage: true,
                      });
                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </>
    );
  }
}

export default memo(MapChart);
