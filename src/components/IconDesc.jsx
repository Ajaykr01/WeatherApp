import React from "react";

function IconDesc({ data }) {
  return (
    <div className="flex w-full items-center justify-between mt-10">
      <div>
        <img
          className="w-32"
          src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`}
          alt="weather icon"
        />
      </div>
      <div className="text-2xl text-white">
        <p>{(data.list[0].main.temp - 273.15).toFixed(1)}°C</p>
        <span>{data.list[0].weather[0].description}</span>
      </div>
    </div>
  );
}

export default IconDesc;
