import React from "react";

const Forecast = ({ data }) => {
  return (
    <div className="mt-10 p-2 flex gap-5 overflow-x-auto w-[30rem]">
      {Array.from({ length: 5 }, (_, i) => i * 8 + 3).map((index) => (
        <div
          key={index}
          className="bg-gray-600 rounded-xl text-white min-w-[8rem] flex flex-col items-center justify-center"
        >
          <p>
            {new Date(data.list[index].dt * 1000).toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
            })}
          </p>
          <img
            className="w-24"
            src={`https://openweathermap.org/img/wn/${data.list[index].weather[0].icon}@4x.png`}
            alt="weather icon"
          />
          <p>{(data.list[index].main.temp - 273.15).toFixed(1) + "°C"}</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
