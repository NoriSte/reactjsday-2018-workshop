import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { HOCShowCoords } from "./ShowCoords";
import { MouseLogger } from "./components/MouseLogger";

function App() {
  return (
    <div className="App">
      HOC:
      <HOCShowCoords />
      <br />
      <br />
      Render props:
      <MouseLogger>
        {({ x, y }) => (
          <div>
            x:{x} y:{y}
          </div>
        )}
      </MouseLogger>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
