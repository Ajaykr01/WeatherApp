import React from "react";
import WeatherInfo from "./components/WeatherInfo";

function WeatherData() {
  return (
    <div className="bg-black h-screen">
      <div className="bg-gray-500 h-[40rem] w-[35rem] m-auto relative top-10 flex flex-col items-center rounded-md">
        <WeatherInfo />
      </div>
    </div>
  );
}

export default WeatherData;
