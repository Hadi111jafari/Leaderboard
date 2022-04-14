// game id = WAUrjt2TEjdFGQcuCks4
import "./style.css";
import refreshBtn from "./modules/refresh.js";
import scoresList from "./modules/scoreL.js";
import submitData from "./modules/submit.js";

const url =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WAUrjt2TEjdFGQcuCks4/scores/";

document.getElementById("submit-btn").addEventListener("click", submitData);

const getScores = async () => {
  const response = await fetch(url);
  const result = await response.json();

  for (const score of result.result) {
    const sC = `
    <li class="score">
      <span class="score-content">${score.user}: ${score.score}</span>
    </li>
    `;
    scoresList.innerHTML += sC;
  }

  return result;
};

getScores();

refreshBtn.addEventListener("click", () => {
  window.location.reload();
  return false;
});
