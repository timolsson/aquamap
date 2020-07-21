import React, { useState } from "react";
import Header from "./components/Header.js";
import ReactMapGL from "react-map-gl";

import "./App.css";

function App() {
  const [viewport, setViewport] = useState({
    latitude: 59.334591,
    longitude: 18.06324,
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
      ></ReactMapGL>
    </div>
  );
}
export default App;
