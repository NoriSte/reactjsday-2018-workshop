import React from "react";
import { withMouse } from "./withMouse";
import { measureTime } from "./measureTime";

function ShowCoords(props) {
  console.log(props);
  return (
    <div>
      <p>Time passed: {props.secondsPassed}</p>
      <p>x: {props.x}</p>
      <p>y: {props.y}</p>
    </div>
  );
}

const ShowCoordsWithMouse = withMouse(ShowCoords);
const ShowCoordsWithMouseAndTimePassed = measureTime(ShowCoordsWithMouse);

export { ShowCoords, ShowCoordsWithMouse, ShowCoordsWithMouseAndTimePassed };
