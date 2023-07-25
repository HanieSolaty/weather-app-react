import React, { useState, useEffect } from "react";
import Convert from "./Convert";
import Icon from "./Icon";

export default function Current(props) {
  let [cityVal, setCityVal] = useState(null);
  let [descriptionVal, setDescriptionVal] = useState(null);
  let [humidityVal, setHumidityVal] = useState(null);
  let [windVal, setWindVal] = useState(null);
  let [tempVal, setTempVal] = useState(null);
  let [iconCodeVal, setIiconCodeVal] = useState(null);
  let [dateStrVal, setDateStrVal] = useState(null);
  let [ready, setReady] = useState(false);

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
    setReady(false);
    setDate();
    setWeatherAtrr();
    setReady(true);
  }, [props.urlAttr]);

  if (ready) {
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
          <Icon
            iconCode={iconCodeVal}
            iconSize={70}
            className="main-temp-icon"
          />
          <Convert tempValue={tempVal} />
        </div>
      </div>
    );
  } else {
    return;
  }
}
