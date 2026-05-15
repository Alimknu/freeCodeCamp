const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  let msg = ``;

  if (strokes == 1) {
    msg += names[0];
  } else if (strokes <= par - 2) {
    msg += names[1];
  } else if (strokes == par - 1) {
    msg += names[2];
  } else if (strokes == par) {
    msg += names[3];
  } else if (strokes == par + 1) {
    msg += names[4];
  } else if (strokes == par + 2) {
    msg += names[5];
  } else if (strokes >= par + 3) {
    msg += names[6];
  }

  return msg;
}
