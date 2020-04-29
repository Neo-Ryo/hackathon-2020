import React, { memo } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import MyModale from "./MyModale";
import { Redirect } from "react-router-dom";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// getArtistesByCountry(){
//     axios
//         .get(`https://collectionapi.metmuseum.org/public/collection/v1/search?artistCountry=${NAME}&q=${NAME}`)
//         .then((res) => {
//             setArtist: res.data
//         })
// }

const MapChart = ({ setTooltipContent }) => {
  const [artist, setArtist] = useState();
  const [country, setCountry] = useState();
  useEffect(() => {
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?artistCountry=${NAME}&q=${NAME}?offset=30&limit=30`
      )
      .then((res) => {
        setCountry(res.data);
      });
  });

  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
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
};

export default memo(MapChart);
