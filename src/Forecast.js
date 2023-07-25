import React, { useEffect, useState } from "react";
import axios from "axios";
import Icon from "./Icon";

export default function Forecast(props) {
  let [days, setDays] = useState(null);
  let [ready, setReady] = useState(false);

  useEffect(() => {
    setWeatherForecastAtrr();
    setReady(false);
  }, [props.urlAttr]);

  function setWeatherForecastAtrr(response) {
    // Forecast location
    let lat = props.latAttr;
    let lon = props.lonAttr;
    const apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrlForecast).then(function (response) {
      setDays(response.data.daily);
      setReady(true);
    });
  }

  function formatTime(timestamp) {
    let forecastdate = new Date(timestamp * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let forecastDay = forecastdate.getDay();
    return days[forecastDay];
  }
  if (ready) {
    return (
      // Third row contains forecast of weather
      <div className="row pt-4 pb-2 text-center" id="forecast-row">
        {days.map(function (day, index) {
          if (index > 0 && index < 7) {
            return (
              <div key={index} className="col-2 forecast-day">
                <p id="forecast-day">{formatTime(day.dt)}</p>
                <Icon
                  iconCode={day.weather[0].icon}
                  iconSize={50}
                  className="pb-3 forecast-temp-icon"
                />
                <p>
                  {Math.round(day.temp.max)}
                  <sup>°</sup>
                  <span className="tab"></span>
                  <span className="min">
                    {" "}
                    {Math.round(day.temp.min)}
                    <sup>°</sup>
                  </span>
                </p>
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    return;
  }
}
