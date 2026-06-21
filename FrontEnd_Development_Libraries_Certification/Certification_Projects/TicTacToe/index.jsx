const { useState } = React;

export function Board() {
  const n = 3;

  const [turnVariable, setTurnVariable] = useState("X");
  const [turnCounter, setTurnCounter] = useState(0);
  const [isOver, setIsOver] = useState(false);
  const [gameMessage, setGameMessage] = useState("");

  const [grid, setGrid] = useState(() => {
    return Array.from({ length: n }, () => {
      return Array(n).fill(null);
    });
  });

  function checkWin(currentGrid) {
    for (let i = 0; i < n; i++) {
      if (currentGrid[i].every((val) => val === turnVariable)) {
        return true;
      }

      if (
        currentGrid.map((row) => row[i]).every((val) => val === turnVariable)
      ) {
        return true;
      }
    }

    if (
      currentGrid.map((row, i) => row[i]).every((val) => val === turnVariable)
    ) {
      return true;
    }

    if (
      currentGrid
        .map((row, i) => row[n - 1 - i])
        .every((val) => val === turnVariable)
    ) {
      return true;
    }

    return false;
  }

  const handleSquareClick = (row, col) => {
    if (grid[row][col] !== null || isOver) {
      return;
    }

    const newGrid = grid.map((arr) => [...arr]);
    newGrid[row][col] = turnVariable;
    setGrid(newGrid);

    if (checkWin(newGrid)) {
      setIsOver(true);
      setGameMessage(`Winner: ${turnVariable}`);
      return;
    }

    if (turnCounter == 8) {
      setIsOver(true);
      setGameMessage("Game is a draw.");
      return;
    }

    setTurnVariable(turnVariable == "X" ? "O" : "X");
    setTurnCounter(turnCounter + 1);
  };

  const handleResetClick = () => {
    setGrid(
      Array.from({ length: n }, () => {
        return Array(n).fill(null);
      }),
    );
    setTurnVariable("X");
    setTurnCounter(0);
    setIsOver(false);
    setGameMessage("");
  };

  return (
    <div>
      {gameMessage && <div className="message">{gameMessage}</div>}

      {grid.map((row, i) => (
        <div className={`row-${i}`} key={i}>
          {row.map((squareValue, j) => (
            <button
              className="square"
              key={`${i}-${j}`}
              onClick={() => handleSquareClick(i, j)}
            >
              {squareValue}
            </button>
          ))}
        </div>
      ))}
      <button className="reset" id="reset" onClick={() => handleResetClick()}>
        Reset
      </button>
    </div>
  );
}
