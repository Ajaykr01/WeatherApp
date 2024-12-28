import React, { useState } from "react";
import fetchWeatherData from "../API/api";
import Error from "./Error";
import HumidityWind from "./HumidityWind";
import CityDate from "./CityDate";
import IconDesc from "./IconDesc";
import Forecast from "./Forecast";

const WeatherInfo = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (city.trim()) {
      setError(null);
      setData(null);
      setLoading(true);
      const response = await fetchWeatherData(city);

      if (response?.error) {
        setError(response.error);
        setData(null);
        setCity("");
        setLoading(false);
      } else {
        setData(response);
        setError(null);
        setCity("");
        setLoading(false);
      }
    } else {
      alert("Please enter a city name.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-400 w-[30rem] h-12 flex justify-evenly items-center mt-5 rounded-3xl"
      >
        <input
          className="bg-transparent outline-none h-full w-[25rem] placeholder-white text-white"
          type="text"
          placeholder="Search City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <i
          onClick={handleSubmit}
          className="fa-solid fa-magnifying-glass text-white cursor-pointer"
        ></i>
      </form>

      {error && <Error data={{ message: error }} />}

      {loading && (
        <div className="text-5xl text-white flex justify-center mt-48">
          Loading...
        </div>
      )}

      {!loading && data && (
        <div>
          <CityDate data={data} />
          <IconDesc data={data} />
          <HumidityWind data={data} />
          <Forecast data={data} />
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
