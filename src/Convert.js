import React, { useState, useEffect } from "react";

export default function Convert(props) {
  let [unit, setUnit] = useState("C");
  let [temp, setTemp] = useState(props.tempValue);

  useEffect(() => {
    setUnit("C");
    setTemp(props.tempValue);
  }, [props.tempValue]);

  function convertToC(e) {
    e.preventDefault();
    setUnit("C");
    setTemp(props.tempValue);
  }

  function convertToF(e) {
    e.preventDefault();
    setUnit("F");
    setTemp(Math.round((props.tempValue * 9) / 5 + 32));
  }

  if (unit === "C") {
    return (
      <h1 className="main-temp-text">
        <span id="temp">{temp}</span>
        <sup className="temp-unit">
          °C{""}|{""}
          <a
            href="/"
            className="temp-unit text-decoration-none"
            onClick={convertToF}
          >
            °F
          </a>
        </sup>
      </h1>
    );
  } else {
    return (
      <h1 className="main-temp-text">
        <span id="temp">{temp}</span>
        <sup className="temp-unit">
          <a
            href="/"
            className="temp-unit text-decoration-none"
            onClick={convertToC}
          >
            °C
          </a>
          {""}|{""}°F
        </sup>
      </h1>
    );
  }
}
