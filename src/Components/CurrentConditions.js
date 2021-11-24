import React from "react";
import CurrentTemp from "./CurrentTemp";
import ExtraWeather from "./ExtraWeather";

const CurrentConditions = ({ weather }) => {
  return (
    <>
      <CurrentTemp weather={weather} />
      <ExtraWeather weather={weather} />
    </>
  );
};

export default CurrentConditions;
