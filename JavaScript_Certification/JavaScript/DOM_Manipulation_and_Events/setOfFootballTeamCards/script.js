const footballTeam = {
  team: "teamName",
  year: 2026,
  headCoach: "Dude Name",
  players: [
    { name: "Player One", position: "forward", isCaptain: false },
    { name: "Player Two", position: "midfielder", isCaptain: false },
    { name: "Player Three", position: "defender", isCaptain: false },
    { name: "Player Four", position: "goalkeeper", isCaptain: true },
  ],
};

const headCoachElement = document.getElementById("head-coach");
const teamElement = document.getElementById("team");
const yearElement = document.getElementById("year");

headCoachElement.innerText = footballTeam.headCoach;
teamElement.innerText = footballTeam.team;
yearElement.innerText = footballTeam.year;

const playerCardElement = document.querySelector("#player-cards");
const selectPlayers = document.getElementById("players");

playerCardElement.innerHTML = displayPlayerCard(footballTeam.players);

selectPlayers.addEventListener("change", () => {
  playerCardElement.innerHTML = displayPlayerCard(footballTeam.players);
});

function displayPlayerCard(arr) {
  let res = "";

  if (selectPlayers.value === "all") {
    arr.forEach((playerObj) => {
      res += `<div class="player-card">
  <h2>${playerObj.name} ${playerObj.isCaptain ? "(Captain)" : ""}</h2>
  <p>Position: ${playerObj.position}</p>
  </div>`;
    });
  } else {
    let filteredPlayers = arr.filter(
      (playerObj) => playerObj.position === selectPlayers.value,
    );
    filteredPlayers.forEach((playerObj) => {
      res += `<div class="player-card">
  <h2>${playerObj.name} ${playerObj.isCaptain ? "(Captain)" : ""}</h2>
  <p>Position: ${playerObj.position}</p>
  </div>`;
    });
  }

  return res;
}
