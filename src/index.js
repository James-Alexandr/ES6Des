import React from "react";
import ReactDOM from "react-dom";
import Practice from "./practice";

console.log(Practice);

const [honda, tesla] = Practice;

const {
  coloursByPopularity: [hondaTopColour, hondabottomColour],
  speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroto }
} = honda;

const {
  coloursByPopularity: [teslaTopColour, teslabottomColour],
  speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroto }
} = tesla;

console.log(hondaTopColour);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
