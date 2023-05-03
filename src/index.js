import "./style.css";
import {
  handleInput,
  showNextHourlyForecast,
  showPreviousHourlyForecast,
} from "./modules/displayController";

document.getElementById("search").addEventListener("click", (e) => {
  e.preventDefault();
  handleInput();
});

document.getElementById("hourly-next").addEventListener("click", (e) => {
  showNextHourlyForecast();
});

document.getElementById("hourly-prev").addEventListener("click", (e) => {
  showPreviousHourlyForecast();
});

handleInput();
