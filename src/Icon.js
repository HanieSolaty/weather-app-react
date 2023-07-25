import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {
  const iconCodeObj = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "50d": "FOG",
    "50n": "FOG",
    "13d": "SNOW",
    "13n": "SNOW",
    "11d": "WIND",
    "11n": "WIND",
  };
  return (
    <div>
      <ReactAnimatedWeather
        icon={iconCodeObj[props.iconCode]}
        color={"#0b5ed7"}
        size={props.iconSize}
        animate={true}
      />
    </div>
  );
}
