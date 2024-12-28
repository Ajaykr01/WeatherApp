import React from "react";
import WeatherInfo from "./components/WeatherInfo";

function WeatherData() {
  return (
    <div className="h-screen">
      <div className="bg-[rgba(57,55,55,0.5)] h-[40rem] w-[35rem] m-auto relative top-10 flex flex-col items-center rounded-md">
        <WeatherInfo />
      </div>
    </div>
  );
}

export default WeatherData;
