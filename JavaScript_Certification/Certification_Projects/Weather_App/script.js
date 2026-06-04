const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherResultEl = document.getElementById("weather-result");
const locationSelect = document.getElementById("location-select");

const iconEl = document.getElementById("weather-icon");
const mainTempEl = document.getElementById("main-temperature");
const feelsLikeEl = document.getElementById("feels-like");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const windGustEl = document.getElementById("wind-gust");
const weatherMainEl = document.getElementById("weather-main");
const locationEl = document.getElementById("location");

let weatherData;

async function getWeather(city) {
  try {
    const res = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`,
    );
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

async function showWeather(city) {
  try {
    weatherData = await getWeather(city);

    if (weatherData) {
      const temp = weatherData.main?.temp ?? "N/A";
      const feelsLike = weatherData.main?.feels_like ?? "N/A";
      const humidity = weatherData.main?.humidity ?? "N/A";
      const wind = weatherData.wind?.speed ?? "N/A";
      const windGust = weatherData.wind?.gust ?? "N/A";
      const weatherMain = weatherData.weather?.[0]?.main ?? "N/A";
      const iconCode = weatherData.weather?.[0]?.icon;
      const locationName = weatherData.name ?? "N/A";

      iconEl.src = iconEl.src = iconCode || "";
      mainTempEl.textContent = temp;
      feelsLikeEl.textContent = feelsLike;
      humidityEl.textContent = humidity;
      windEl.textContent = wind;
      windGustEl.textContent = windGust;
      weatherMainEl.textContent = weatherMain;
      locationEl.textContent = locationName;

      weatherResultEl.hidden = false;
    } else {
      throw new Error("Something went wrong, please try again later.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong, please try again later.");
  }
}

getWeatherBtn.addEventListener("click", () => {
  const currentCity = locationSelect.value;

  if (currentCity === "") {
    return;
  }

  showWeather(currentCity);
});
