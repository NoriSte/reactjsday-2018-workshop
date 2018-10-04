import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { ShowCoordsWithMouse } from "./ShowCoords";

function App() {
  return (
    <div className="App">
      <ShowCoordsWithMouse />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
