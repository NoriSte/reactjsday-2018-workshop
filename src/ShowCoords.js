import React from "react";
import { withMouse } from "./withMouse";
import { measureTime } from "./measureTime";
import { fetchData } from "./fetchData";

function ShowCoords(props) {
  return (
    <div>
      All my props are
      <code>{JSON.stringify(props, null, 2)}</code>
    </div>
  );
}

const ShowCoordsWithMouse = withMouse(ShowCoords);
const ShowCoordsWithMouseAndTimePassed = measureTime(ShowCoordsWithMouse);
const ShowCoordsWithMouseTimePassedAndFetchedData = fetchData(
  "https://swapi.co/api/people/1"
)(ShowCoordsWithMouseAndTimePassed);
const HOCShowCoords = ShowCoordsWithMouseTimePassedAndFetchedData;

// you could export it with recompose

export {
  ShowCoords,
  ShowCoordsWithMouse,
  ShowCoordsWithMouseAndTimePassed,
  ShowCoordsWithMouseTimePassedAndFetchedData,
  HOCShowCoords
};
