let count = 0;

function cardCounter(card) {
  if (2 <= card && 6 >= card) {
    ++count;
    console.log("count increases");
  } else if (
    card == 10 ||
    card == "J" ||
    card == "Q" ||
    card == "K" ||
    card == "A"
  ) {
    --count;
  }

  let shouldBet = count > 0 ? "Bet" : "Hold";

  return `${count} ${shouldBet}`;
}
