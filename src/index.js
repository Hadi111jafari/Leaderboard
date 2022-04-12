import "./style.css";
import scoresData from './modules/scoreData.js';

scoresData.forEach((score) => {
  const scoresList = document.getElementById('score-list');
  const sC = `
  <li class="score">
    <span class="score-content">${score.name}: ${score.score}</span>
  </li>
  `;
  scoresList.innerHTML += sC;
});
    