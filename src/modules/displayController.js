import fetchWeatherData from "./weather";
import { getDay } from "date-fns";

let globalIndex = 0;
let lastSearchedTerm;

function getWeekdayName(date) {
  const splitDate = date.split("-");

  switch (getDay(new Date(splitDate[0], splitDate[1] - 1, splitDate[2]))) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    default:
      break;
  }
}

function showNextHourlyForecast() {
  if (globalIndex === 16) return;
  globalIndex = globalIndex + 8;
  refreshWeatherDisplay();
}

function showPreviousHourlyForecast() {
  if (globalIndex === 0) return;
  globalIndex = globalIndex - 8;
  refreshWeatherDisplay();
}

function setHourlyCard(data) {
  const hourlyCard = document.getElementById("hour-card-container");
  const hourlyForecast = data.forecast.hour;

  hourlyCard.textContent = "";

  for (let i = globalIndex; i < globalIndex + 8; i++) {
    const hourContainer = document.createElement("div");
    const icon = document.createElement("img");
    const time = document.createElement("h3");
    const temperature = document.createElement("h3");

    hourContainer.classList.add("hour-card");

    icon.src = hourlyForecast[i].condition.icon;
    time.textContent = hourlyForecast[i].time.split(" ")[1];
    temperature.textContent = `${hourlyForecast[i].temp_c}°C`;

    icon.classList.add("hour-img");
    time.classList.add("hour-time");
    temperature.classList.add("hour-temp");

    hourContainer.appendChild(time);
    hourContainer.appendChild(icon);
    hourContainer.appendChild(temperature);

    hourlyCard.appendChild(hourContainer);
  }
}

function setLocationCard(data) {
  const cityName = document.getElementById("location");
  const region = document.getElementById("region");
  const condition = document.getElementById("condition");
  const temperature = document.getElementById("temperature-text");
  const feelslike = document.getElementById("feelslike-temp");
  const conditionImg = document.getElementById("condition-img");
  const timeDisplay = document.getElementById("time-data");
  const time = data.location.localtime.split(" ");

  if (time[1].length === 4) time[1] = "0" + time[1];

  cityName.textContent = data.location.name;
  region.textContent = data.location.region;
  condition.textContent = data.current.condition.text;
  temperature.textContent = `${data.current.temperatures.temp_c}°C`;
  feelslike.textContent = `Feels like ${data.current.temperatures.feelsLike_c}°C`;
  conditionImg.src = data.current.condition.icon;
  timeDisplay.textContent = time[1];
}

function setWindCard(data) {
  const windDirection = document.getElementById("wind-dir");
  const windSpeed = document.getElementById("wind-speed");

  windDirection.textContent = "";
  windSpeed.textContent = "";

  windDirection.textContent = data.current.wind.direction;
  windSpeed.textContent = `${data.current.wind.wind_mph} mph`;
  document.documentElement.style.setProperty(
    "--wind-degree",
    `${data.current.wind.wind_degree}deg`
  );
}

function setForecastCard(data) {
  const forecastCard = document.getElementById("forecast-card");
  const forecastH1 = document.createElement("h2");
  const weeklyForecast = data.weekly;

  forecastCard.textContent = "";
  forecastH1.classList.add("forecast-h1");
  forecastH1.textContent = "Forecast";
  forecastCard.appendChild(forecastH1);

  for (let i = 0; i < weeklyForecast.length; i++) {
    const forecastContainer = document.createElement("div");
    const date = document.createElement("h3");
    const conditionImg = document.createElement("img");
    const temperature = document.createElement("p");
    const avgTemperature = document.createElement("p");

    forecastContainer.classList.add("forecast-card");
    date.classList.add("forecast-date");
    temperature.classList.add("forecast-temp");
    avgTemperature.classList.add("forecast-avg-temp");

    switch (i) {
      case 0:
        date.textContent = "Today";
        break;
      case 1:
        date.textContent = "Tomorrow";
        break;
      default:
        date.textContent = getWeekdayName(weeklyForecast[i].date);
        break;
    }

    conditionImg.src = weeklyForecast[i].day.condition.icon;
    temperature.textContent = `${weeklyForecast[i].day.mintemp_c}°C - ${weeklyForecast[i].day.maxtemp_c}°C`;
    avgTemperature.textContent = `Avg: ${weeklyForecast[i].day.avgtemp_c}°C`;

    forecastContainer.appendChild(date);
    forecastContainer.appendChild(conditionImg);
    forecastContainer.appendChild(temperature);
    forecastContainer.appendChild(avgTemperature);

    forecastCard.appendChild(forecastContainer);
  }
}

async function setWeatherInfo(data) {
  await data;
  setLocationCard(data);
  setWindCard(data);
  setHourlyCard(data);
  setForecastCard(data);
}

async function handleInput() {
  const input = document.querySelector("input");

  const data = await fetchWeatherData(input.value);
  lastSearchedTerm = input.value;

  input.value = "";

  setWeatherInfo(data);
}

async function refreshWeatherDisplay() {
  const data = await fetchWeatherData(lastSearchedTerm);

  setWeatherInfo(data);
}

export { handleInput, showNextHourlyForecast, showPreviousHourlyForecast };
