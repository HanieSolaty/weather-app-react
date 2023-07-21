import "./App.css";
import React, { useState } from "react";
import Search from "./Search";
import Current from "./Current";
import Github from "./Github";
import axios from "axios";

export default function App() {
  let [url, setUrl] = useState(null);
  let [city, setCity] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [temp, setTemp] = useState(null);
  let [iconCode, setIiconCode] = useState(null);
  let [dateStr, setDateStr] = useState(null);

  const setTheUrl = (address) => {
    axios.get(address).then(function (response) {
      setUrl(address);
      setCity(response.data.name);
      setDescription(response.data.weather[0].description);
      setHumidity(Math.round(response.data.main.humidity));
      setWind(Math.round(response.data.wind.speed));
      setTemp(Math.round(response.data.main.temp));
      setIiconCode(
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
      setDateFunc();
    });
  };

  function setDateFunc() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let localDate = new Date();
    let month = months[localDate.getMonth()];
    let date = localDate.getDate();
    let day = days[localDate.getDay()];
    let hour = `0${localDate.getHours()}`.slice(-2);
    let min = `0${localDate.getMinutes()}`.slice(-2);
    let dateString = `${month} ${date}, ${day} ${hour}:${min}`;
    setDateStr(dateString);
  }

  return (
    <div className="App mt-5">
      <div className="container p-4 mb-0">
        <Search setTheUrl={setTheUrl} />
        <hr />
        <Current
          urlAttr={url}
          cityAttr={city}
          descriptionAttr={description}
          humidityAttr={humidity}
          windAttr={wind}
          tempAttr={temp}
          iconCodeAttr={iconCode}
          dateStrAttr={dateStr}
        />
        <Github />
      </div>{" "}
    </div>
  );
}
