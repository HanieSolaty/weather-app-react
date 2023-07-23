import React, { useState, useEffect } from "react";

export default function Convert(props) {
  let [unit, setUnit] = useState("C");

  useEffect(() => {
    setUnit("C");
  }, [props.tempValue]);

  function convertToC(e) {
    e.preventDefault();
    setUnit("C");
  }

  function convertToF(e) {
    e.preventDefault();
    setUnit("F");
  }

  if (unit === "C") {
    return (
      <h1 className="main-temp-text">
        <span id="temp">{props.tempValue}</span>
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
        <span id="temp">{Math.round((props.tempValue * 9) / 5 + 32)}</span>
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
