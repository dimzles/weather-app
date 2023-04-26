import "./style.css";
import { handleInput } from "./modules/displayController";

handleInput();
document.getElementById("search").addEventListener("click", (e) => {
  e.preventDefault();
  handleInput();
});
