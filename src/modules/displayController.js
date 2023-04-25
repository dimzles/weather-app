import fetchWeatherData from "./weather";

async function handleInput() {
  const input = document.querySelector("input");

  const data = await fetchWeatherData(input.value);

  input.value = "";

  setWeatherInfo(data);
}

function setLocationCard(data) {
  const cityName = document.getElementById("location");
  const region = document.getElementById("region");
  const condition = document.getElementById("condition");
  const temperature = document.getElementById("temperature-text");
  const conditionImg = document.getElementById("condition-img");

  cityName.textContent = data.location.name;
  region.textContent = data.location.region;
  condition.textContent = data.current.condition.text;
  temperature.textContent = `${data.current.temperatures.temp_c}°C`;
  conditionImg.src = data.current.condition.icon;
}

function setWindCard(data) {
  const windDirection = document.getElementById("wind-dir");
  const windArrow = document.getElementById("wind-arrow");
  const windSpeed = document.getElementById("wind-speed");

  windDirection.textContent = data.current.wind.direction;
  windSpeed.textContent = `${data.current.wind.wind_mph} mph`;
}

async function setWeatherInfo(data) {
  await data;
  setLocationCard(data);
  setWindCard(data);
}

export { handleInput, setWeatherInfo };
