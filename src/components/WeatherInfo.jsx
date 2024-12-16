import React from "react";

const WeatherInfo = () => {
  return (
    <div>
      <div className="flex items-center justify-between h-10 w-[29rem] relative top-5">
        <div className="flex">
          <i className="fa-solid fa-location-dot relative top-1 text-xl text-white"></i>
          <h2 className="relative left-1 text-lg font-bold text-white">
            {weatherData.city.name}
          </h2>
        </div>
        <div>
          <p className="text-lg font-bold text-white">
            {new Date(weatherData.list[2].dt * 1000).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-between mt-10">
        <div>
          <img
            className="w-32"
            src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@4x.png`}
            alt="weather icon"
          />
        </div>
        <div className="text-2xl text-white">
          <p>{(weatherData.list[0].main.temp - 273.15).toFixed(1) + "°C"}</p>
          <span>{weatherData.list[0].weather[0].description}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
