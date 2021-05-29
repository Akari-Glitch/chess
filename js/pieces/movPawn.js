import { eatMovWhitePawn, eatMovBlackPawn } from "./eatMovPawn.js";
let moves = [];

export function movWhitePawn(box) {
  let numBox = Number(box.id.substr(3));
  let doubleMove = document.getElementById("box" + (numBox - 16));
  let singleMove = document.getElementById("box" + (numBox - 8));
  if (singleMove.textContent.length === 0) {
    moves = [singleMove.id];

    if (numBox >= 49 && doubleMove.textContent.length === 0) {
      moves.push(doubleMove.id);
    }
  } else {
    moves = [];
  }

  moves = moves.concat(eatMovWhitePawn(box));
  return moves;
}

export function movBlackPawn(box) {
  let numBox = Number(box.id.substr(3));
  let doubleMove = document.getElementById("box" + (numBox + 16));
  let singleMove = document.getElementById("box" + (numBox + 8));

  if (singleMove.textContent.length === 0) {
    moves = [singleMove.id];

    if (numBox <= 16 && doubleMove.textContent.length === 0) {
      moves.push(doubleMove.id);
    }
  } else {
    moves = [];
  }

  moves = moves.concat(eatMovBlackPawn(box));
  return moves;
}
