import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "../display";
import Input from "../Input/index";
import cs from "classnames";

const api = {
  key: "64fb852b810905d928c26726c873e75f",
  base: "http://api.openweathermap.org/data/2.5/",
};
//http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}&appid={API key}

function App() {
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch(
        `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
      );
      const data = await res.json();
      console.log(data);
      if (data) {
        setWeather(data);
      }
    }
    if (query !== null) {
      fetchApi();
    }
  }, [query]);

  return (
    <div className="app">
      <div
        className={cs("overlay", {
          clear: weather?.weather[0].main === "Clear",
          rain: weather?.weather[0].main === "Rain",
          snow: weather?.weather[0].main === "Snow",
          clouds: weather?.weather[0].main === "Clouds",
        })}
      ></div>
      <div className="shadow"></div>
      <main className="content">
        <Input setQuery={setQuery} />
      </main>
      {weather !== null && <Display weather={weather} />}
    </div>
  );
}

export default App;
