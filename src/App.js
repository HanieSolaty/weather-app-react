import "./App.css";
import React, { useState } from "react";
import Search from "./Search";
import Current from "./Current";
import Github from "./Github";
import axios from "axios";
import DateFunc from "./Date";

export default function App() {
  let [weatherData, setWeatherData] = useState({});

  const setTheUrl = (address) => {
    axios.get(address).then(function (response) {
      setWeatherData({
        url: address,
        city: response.data.name,
        description: response.data.weather[0].description,
        humidity: Math.round(response.data.main.humidity),
        wind: Math.round(response.data.wind.speed),
        temp: Math.round(response.data.main.temp),
        iconCode: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        dateStr: <DateFunc dateVal={response.data.dt} />,
      });
    });
  };

  return (
    <div className="App mt-5">
      <div className="container p-4 mb-0">
        <Search setTheUrl={setTheUrl} />
        <hr />
        <Current
          urlAttr={weatherData.url}
          cityAttr={weatherData.city}
          descriptionAttr={weatherData.description}
          humidityAttr={weatherData.humidity}
          windAttr={weatherData.wind}
          tempAttr={weatherData.temp}
          iconCodeAttr={weatherData.iconCode}
          dateStrAttr={weatherData.dateStr}
        />
        <Github />
      </div>{" "}
    </div>
  );
}
