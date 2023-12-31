import "./App.css";
import React, { useState } from "react";
import Search from "./Search";
import Current from "./Current";
import Github from "./Github";
import axios from "axios";
import DateFunc from "./Date";
import { ThreeDots } from "react-loader-spinner";
import Forecast from "./Forecast";

export default function App() {
  let [weatherData, setWeatherData] = useState({ ready: false });

  const setTheUrl = (address) => {
    axios.get(address).then(function (response) {
      setWeatherData({
        ready: true,
        url: address,
        city: response.data.name,
        description: response.data.weather[0].description,
        humidity: Math.round(response.data.main.humidity),
        wind: Math.round(response.data.wind.speed),
        temp: Math.round(response.data.main.temp),
        // iconCode: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        iconCode: response.data.weather[0].icon,
        dateStr: <DateFunc dateVal={response.data.dt} />,
        lat: response.data.coord.lat,
        lon: response.data.coord.lon,
      });
    });
  };
  if (weatherData.ready) {
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
          <Forecast
            latAttr={weatherData.lat}
            lonAttr={weatherData.lon}
            urlAttr={weatherData.url}
          />
          <Github />
        </div>{" "}
      </div>
    );
  } else {
    return (
      <div className="App mt-5">
        <div className="container p-4 mb-0">
          <Search setTheUrl={setTheUrl} />
          <hr />
          <div className="container" id="three-dot-loader">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#0b5ed7"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
          <Github />
        </div>{" "}
      </div>
    );
  }
}
