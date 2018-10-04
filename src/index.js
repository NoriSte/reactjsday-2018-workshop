import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { ShowCoordsWithMouseAndTimePassed } from "./ShowCoords";

function App() {
  return (
    <div className="App">
      <ShowCoordsWithMouseAndTimePassed />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
