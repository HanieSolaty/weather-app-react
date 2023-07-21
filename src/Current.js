import React, { useState, useEffect } from "react";

export default function Current(props) {
  let [cityVal, setCityVal] = useState(null);
  let [descriptionVal, setDescriptionVal] = useState(null);
  let [humidityVal, setHumidityVal] = useState(null);
  let [windVal, setWindVal] = useState(null);
  let [tempVal, setTempVal] = useState(null);
  let [iconCodeVal, setIiconCodeVal] = useState(null);
  let [dateStrVal, setDateStrVal] = useState(null);

  function setDate() {
    setDateStrVal(props.dateStrAttr);
  }

  function setWeatherAtrr() {
    setCityVal(props.cityAttr);
    setDescriptionVal(props.descriptionAttr);
    setHumidityVal(props.humidityAttr);
    setWindVal(props.windAttr);
    setTempVal(props.tempAttr);
    setIiconCodeVal(props.iconCodeAttr);
  }

  useEffect(() => {
    setDate();
    setWeatherAtrr();
  }, [props.urlAttr]);

  return (
    <div className="row pb-4">
      <div className="col-6">
        <div className="row">
          <h1 id="city">{cityVal}</h1>
        </div>
        <div className="row">
          <p className="mb-0" id="description">
            {descriptionVal}
          </p>
        </div>
        <div className="row">
          <p className="mb-0" id="date">
            {dateStrVal}
          </p>
        </div>
        <div className="row">
          <p className="mb-0">
            Humidity:
            <span className="weather-param">
              <span id="humidity"> {humidityVal}</span>%
            </span>
            , Wind:
            <span className="weather-param">
              <span id="wind"> {windVal}</span>
              km/h
            </span>
          </p>
        </div>
      </div>
      <div className="offset-2 col-4 align-self-center pt-2">
        <img
          id="temp-icon"
          className="main-temp-icon"
          src={iconCodeVal}
          alt="weather icon"
        />
        <h1 className="main-temp-text">
          <span id="temp">{tempVal}</span>
          <sup className="temp-unit">°C</sup>
        </h1>
      </div>
    </div>
  );
}
