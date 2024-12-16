import React from "react";

const HumidityWind = () => {
  return (
    <div className="text-white flex justify-between mt-10 text-xl">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-4xl">humidity_low</span>
        <div>
          <p>Humidity</p>
          <p>{weatherData.list[0].main.humidity + " %"}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <i className="fa-solid fa-wind text-4xl"></i>
        <div>
          <p>Wind Speed</p>
          <p>{weatherData.list[0].wind.speed + " M/s"}</p>
        </div>
      </div>
    </div>
  );
};

export default HumidityWind;
