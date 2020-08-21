import React, { useState } from "react";
/* import Header from "./components/Header.js"; */
import ReactMapGL, {Marker} from "react-map-gl";
import * as water_rome from "./data/water_rome.json";

import "./App.css";

function App() {
  const [viewport, setViewport] = useState({
    latitude: 41.902782,
    longitude: 12.496366,
    width: "100vw",
    height: "100vh",
    zoom: 8,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/timolsson/ckcvn5xyc0m651imzd799obf7"
        mapboxApiAccessToken={process.env.REACT_APP_API_KEY}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
       
        {water_rome.fountains.map((fountain) => (
          <Marker
            key={fountain.name}
            latitude={parseFloat(fountain.latitude.replace('Lat',''))}
            longitude={parseFloat(fountain.longitude.replace('Lng',''))}
          >
          <img src="drop.svg" alt="drop"></img>

          </Marker>
        ))}

      </ReactMapGL>
    </div>
  );
}
export default App;
