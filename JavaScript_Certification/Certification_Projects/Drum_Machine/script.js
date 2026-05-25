const beatBox = [
  [
    { key: "Q", name: "Heater 1", fileName: "Heater-1.mp3" },
    { key: "W", name: "Heater 2", fileName: "Heater-2.mp3" },
    { key: "E", name: "Heater 3", fileName: "Heater-3.mp3" },
    { key: "A", name: "Heater 4", fileName: "Heater-4_1.mp3" },
    { key: "S", name: "Clap", fileName: "Heater-6.mp3" },
    { key: "D", name: "Open-HH", fileName: "Dsc_Oh.mp3" },
    { key: "Z", name: "Kick-n'-Hat", fileName: "Kick_n_Hat.mp3" },
    { key: "X", name: "Kick", fileName: "RP4_KICK_1.mp3" },
    { key: "C", name: "Closed-HH", fileName: "Cev_H2.mp3" },
  ],
];

const nameMap = {};
beatBox[0].forEach((item) => {
  nameMap[item.key] = item.name;
});

const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

drumPads.forEach((pad) => {
  const padAudio = pad.querySelector(".clip");
  pad.addEventListener("click", () => {
    if (!padAudio) return;
    padAudio.currentTime = 0;
    padAudio.play();
    display.innerText = nameMap[padAudio.id] || "";
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  const audioEl = document.getElementById(key);
  if (!audioEl) return;
  audioEl.currentTime = 0;
  audioEl.play();
  display.innerText = nameMap[key] || "";
});
