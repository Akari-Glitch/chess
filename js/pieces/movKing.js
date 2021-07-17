import { getClastleData } from "../move.js";
export function movKing(box, thisPieces) {
  let numBox = Number(box.id.substr(3));
  let movContent;
  let up = numBox > 8;
  let down = numBox < 57;
  let right = numBox % 8 != 0;
  let left = (numBox + 7) % 8 != 0;
  let moves = [];
  let castlingData = getClastleData(box);
  //right
  if (castlingData[0] && castlingData[1]) {
    document.getElementById("box" + String(numBox + 1)).textContent == "" &&
    document.getElementById("box" + String(numBox + 2)).textContent == ""
      ? moves.push("box" + String(numBox + 2))
      : null;
  }
  //left
  if (castlingData[0] && castlingData[2]) {
    document.getElementById("box" + String(numBox - 1)).textContent == "" &&
    document.getElementById("box" + String(numBox - 2)).textContent == "" &&
    document.getElementById("box" + String(numBox - 3)).textContent == ""
      ? moves.push("box" + String(numBox - 2))
      : null;
  }

  function movesBox(num) {
    movContent = document.getElementById("box" + String(num));
    thisPieces.includes(movContent.textContent)
      ? null
      : moves.push(movContent.id);
  }

  if (up) {
    movesBox(numBox - 8);

    if (right) {
      movesBox(numBox - 7);
    }
    if (left) {
      movesBox(numBox - 9);
    }
  }

  if (down) {
    movesBox(numBox + 8);

    if (right) {
      movesBox(numBox + 9);
    }
    if (left) {
      movesBox(numBox + 7);
    }
  }

  if (right) {
    movesBox(numBox + 1);
  }
  if (left) {
    movesBox(numBox - 1);
  }

  return moves;
}
