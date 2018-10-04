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
import { ControlledSelect } from "./components/ControlledSelect";

class App extends React.Component {
  state = {
    selectedValue: "white",
    opened: false
  };

  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.onOpen = this.onOpen.bind(this);
  }

  onSelect(value) {
    this.setState({ selectedValue: value, opened: false });
  }
  onOpen() {
    this.setState({ opened: true });
  }

  render() {
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
            <br />
            <br />
            Controlled components (the first one in uncontrolled):
            <ControlledSelect initialValue="red">
              <Option value="blue"> Blue </Option>
              <Option value="red"> Red </Option>
              <Option value="white"> White </Option>
            </ControlledSelect>
            <br />
            <ControlledSelect
              value={this.state.selectedValue}
              opened={this.state.opened}
              onSelect={this.onSelect}
              onOpen={this.onOpen}
            >
              <Option value="blue"> Blue </Option>
              <Option value="red"> Red </Option>
              <Option value="white"> White </Option>
            </ControlledSelect>
          </div>
        )}
      </KeyLogger>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
