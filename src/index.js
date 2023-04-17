import "./style.css";
import fetchWeatherData from "./modules/weather";

function handleInput() {
  const input = document.querySelector("input");

  fetchWeatherData(input.value);

  input.value = "";
}

fetchWeatherData("london");

document.getElementById("search").addEventListener("click", (e) => {
  e.preventDefault();
  handleInput();
});
