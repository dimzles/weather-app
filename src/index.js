import "./style.css";
import fetchWeatherData from "./modules/weather";
import { setWeatherInfo, handleInput } from "./modules/displayController";

handleInput();
document.getElementById("search").addEventListener("click", (e) => {
  e.preventDefault();
  handleInput();
});
