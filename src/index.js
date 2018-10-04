import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { HOCShowCoords } from "./ShowCoords";
import { MouseLogger } from "./components/MouseLogger";
import { MeasureTime } from "./components/MeasureTime";
import { FetchData } from "./components/FetchData";
import { KeyLogger } from "./components/KeyLogger";
import { Option } from "./components/Option";
import { Select } from "./components/Select";

function App() {
  return (
    <KeyLogger>
      {({ lastKeystroke, typedText }) => (
        <div className="App">
          HOC:
          <HOCShowCoords />
          <br />
          <br />
          Render props:
          <MouseLogger>
            {({ x, y }) => (
              <div>
                x: {x} y: {y}
              </div>
            )}
          </MouseLogger>
          <MeasureTime>
            {({ secondsPassed }) => <div>secondsPassed: {secondsPassed}</div>}
          </MeasureTime>
          <FetchData apiUrl="https://swapi.co/api/people/1">
            {({ data }) => <div>data: {data}</div>}
          </FetchData>
          <div>
            lastKeystroke: {lastKeystroke}, typedText: {typedText}
          </div>
          <br />
          <br />
          Compound components:
          <Select defaultValue="red">
            <Option value="blue"> Blue </Option>
            <Option value="red"> Red </Option>
            <Option value="white"> White </Option>
          </Select>
        </div>
      )}
    </KeyLogger>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
