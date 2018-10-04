import React from "react";
import { withMouse } from "./withMouse";

function ShowCoords(props) {
  return (
    <div>
      <p>x: {props.x}</p>
      <p>y: {props.y}</p>
    </div>
  );
}

const ShowCoordsWithMouse = withMouse(ShowCoords);

export { ShowCoords, ShowCoordsWithMouse };
