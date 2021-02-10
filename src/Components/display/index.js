import React from "react";
import "./display.css";
import DisplayDate from "../Date/index";
import cn from "classnames";

function Display({ weather }) {
  return (
    <h1 className="weather">
      {weather.weather[0].main}, {Math.round(weather.main.temp)}
      {" °C"}
    </h1>
  );
}

export default Display;
