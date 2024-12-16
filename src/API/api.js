const fetchWeatherData = async (city) => {
  if (!city.trim()) {
    alert("Please enter location");
    return;
  }

  await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=92bbd26d25125ed33c82a2be7d8cb60b`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Oops! Location not found");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export default fetchWeatherData;
