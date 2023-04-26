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
  const timeDisplay = document.getElementById("time-data");
  const time = data.location.localtime.split(" ");

  if (time[1].length === 4) time[1] = "0" + time[1];

  cityName.textContent = data.location.name;
  region.textContent = data.location.region;
  condition.textContent = data.current.condition.text;
  temperature.textContent = `${data.current.temperatures.temp_c}°C`;
  conditionImg.src = data.current.condition.icon;
  timeDisplay.textContent = time[1];
}

function setWindCard(data) {
  const windDirection = document.getElementById("wind-dir");
  const windArrow = document.getElementById("wind-arrow");
  const windSpeed = document.getElementById("wind-speed");

  windDirection.textContent = data.current.wind.direction;
  windSpeed.textContent = `${data.current.wind.wind_mph} mph`;
  document.documentElement.style.setProperty(
    "--wind-degree",
    `${data.current.wind.wind_degree}deg`
  );
}

async function setWeatherInfo(data) {
  await data;
  setLocationCard(data);
  setWindCard(data);
}

export { handleInput, setWeatherInfo };
