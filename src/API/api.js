const fetchWeatherData = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=92bbd26d25125ed33c82a2be7d8cb60b`
    );
    if (!res.ok) {
      throw new Error("Oops! Location not found");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: error.message };
  }
};
export default fetchWeatherData;
