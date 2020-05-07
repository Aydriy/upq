import React from "react";
import ReactDOM from "react-dom";
import "./sass/style.sass";
import Routes from "./app/routes.jsx";
import * as serviceWorker from "./serviceWorker";

let mapCityArr = [
  {
    nameCity: "m.losAngeles",
    to: "/losangeles",
    pName: "Los Angeles, USA",
    labelName: "2005 Stokes Isle Apt. 896, Venaville, New York 10010",
  },
  {
    nameCity: "m.newYork",
    to: "/newyork",
    pName: "NewYork, USA",
    labelName: "2005 Stokes Isle Apt. 896, Venaville, New York 10010",
  },
  {
    nameCity: "m.boston",
    to: "/boston",
    pName: "Boston, USA",
    labelName: "2005 Stokes Isle Apt. 896, Venaville, New York 10010",
  },
  {
    nameCity: "m.detroit",
    to: "/detroit",
    pName: "Detroit, USA",
    labelName: "2005 Stokes Isle Apt. 896, Venaville, New York 10010",
  },
];

ReactDOM.render(
  <Routes mapCityArr={mapCityArr} />,
  document.getElementById("root")
);

serviceWorker.unregister();
