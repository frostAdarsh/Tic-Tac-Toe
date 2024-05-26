let currentPlayer = "X";
let arrry = Array(9).fill(null);

function checkWinner() {
  if (
    (arrry[0] !== null && arrry[0] == arrry[1] && arrry[1] == arrry[2]) ||
    (arrry[3] !== null && arrry[3] == arrry[4] && arrry[4] == arrry[5]) ||
    (arrry[6] !== null && arrry[6] == arrry[7] && arrry[1] == arrry[8]) ||
    (arrry[0] !== null && arrry[0] == arrry[3] && arrry[3] == arrry[6]) ||
    (arrry[1] !== null && arrry[1] == arrry[4] && arrry[4] == arrry[7]) ||
    (arrry[2] !== null && arrry[2] == arrry[5] && arrry[5] == arrry[8]) ||
    (arrry[0] !== null && arrry[0] == arrry[4] && arrry[4] == arrry[8]) ||
    (arrry[2] !== null && arrry[2] == arrry[4] && arrry[4] == arrry[6])
  ) {
    document.write(`Winner is ${currentPlayer}`);
    return;
  }

  if (!arrry.some((e) => e === null)) {
    document.write("Draw");
    return;
  }
}

function handelClick(e) {
  const id = Number(e.id);
  if (arrry[id] !== null) return;
  arrry[id] = currentPlayer;
  e.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}
