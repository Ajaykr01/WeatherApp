import { useState } from "react";
import Search from "./components/Search";
import Error from "./components/Error";
import WeatherInfo from "./components/WeatherInfo";
import HumidityWind from "./components/HumidityWind";
import Forecast from "./components/Forecast";

function WeatherData() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const getData = (event) => {
    event.preventDefault();
    setError("");
    setWeatherData(null);

    if (!city.trim()) {
      alert("Please enter location");
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=92bbd26d25125ed33c82a2be7d8cb60b`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Oops! Location not found");
        }
        return res.json();
      })
      .then((data) => setWeatherData(data))
      .catch((error) => setError(error.message));
    setCity("");
  };

  return (
    <div className="bg-black h-screen">
      <div className="bg-gray-500 h-[40rem] w-[35rem] m-auto relative top-10 flex flex-col items-center rounded-md">
        <Search city={city} setCity={setCity} getData={getData} />
        {error && <Error error={error} />}
        {!error && weatherData && (
          <>
            <WeatherInfo weatherData={weatherData} />
            <HumidityWind weatherData={weatherData} />
            <Forecast weatherData={weatherData} />
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherData;
