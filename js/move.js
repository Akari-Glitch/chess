import { enPassant } from "./pieces/eatMovPawn.js";
import { boardAnalysis } from "./board.js";
let stepPawn = [false];
let towerWhiteR = true;
let towerWhiteL = true;
let kingWhite = true;
let towerBlackR = true;
let towerBlackL = true;
let kingBlack = true;

export function move(pieceSelect, box, moves, round) {
  pawnException(pieceSelect, box, moves);
  castling(pieceSelect, box);
  box.textContent = pieceSelect.textContent;
  pieceSelect.textContent = "";
  return boardAnalysis(pieceSelect, box, round);
}

function pawnException(pieceSelect, box, moves) {
  let numBox = Number(box.id.substr(3));
  let movContentR;
  let movContentL;
  if (pieceSelect.textContent === "♙" || pieceSelect.textContent === "♟") {
    if (stepPawn[0] === box.id) {
      document.getElementById(stepPawn[1]).textContent = "";
    }
    if (box.id === moves[1]) {
      movContentR = document.getElementById("box" + String(numBox - 1));
      movContentL = document.getElementById("box" + String(numBox + 1));
      stepPawn[0] = moves[0];
      stepPawn[1] = moves[1];
      enPassant(moves[0], movContentR.id, movContentL.id);
    }
  } else {
    stepPawn[0] = null;
    enPassant(null);
  }

  if (pieceSelect.textContent === "♙" && numBox < 9) {
    pieceSelect.textContent = "♕";
  } else if (pieceSelect.textContent === "♟" && numBox > 56) {
    pieceSelect.textContent = "♛";
  }
}

function castling(pieceSelect, box) {
  let pieceSelectNum = Number(pieceSelect.id.substr(3));
  let numBox = Number(box.id.substr(3));

  if (pieceSelectNum === 61 && kingWhite) {
    if (numBox === 63) {
      document.getElementById("box62").textContent = "♖";
      document.getElementById("box64").textContent = "";
    } else if (numBox === 59) {
      document.getElementById("box60").textContent = "♖";
      document.getElementById("box57").textContent = "";
    }
    kingWhite = false;
  }
  if (pieceSelectNum === 64 && towerWhiteR) {
    towerWhiteR = false;
  }

  if (pieceSelectNum === 57 && towerWhiteL) {
    towerWhiteL = false;
  }

  if (pieceSelectNum === 5 && kingBlack) {
    if (numBox === 7) {
      document.getElementById("box6").textContent = "♜";
      document.getElementById("box8").textContent = "";
    } else if (numBox === 3) {
      document.getElementById("box4").textContent = "♜";
      document.getElementById("box1").textContent = "";
    }
    kingBlack = false;
  }

  if (pieceSelectNum === 8 && towerBlackR) {
    towerBlackR = false;
  }

  if (pieceSelectNum === 1 && towerBlackL) {
    towerBlackL = false;
  }
}

export function getClastleData(pieceSelect) {
  if (pieceSelect.textContent === "♔") {
    return [kingWhite, towerWhiteR, towerWhiteL];
  } else if (pieceSelect.textContent === "♚") {
    return [kingBlack, towerBlackR, towerBlackL];
  }
}
