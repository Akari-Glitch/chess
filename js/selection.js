import { movWhitePawn, movBlackPawn } from "./pieces/movPawn.js";
import { movKing } from "./pieces/movKing.js";
import { movTower } from "./pieces/movTower.js";
import { movHorse } from "./pieces/movHorse.js";
import { movBishop } from "./pieces/movBishop.js";
import { move } from "./move.js";
import { checkAnalysis, boardAnalysis } from "./board.js";

let whitePieces = ["♔", "♕", "♖", "♗", "♘", "♙"];
let blackPieces = ["♚", "♛", "♜", "♝", "♞", "♟"];
let round = true; //if round it's true, it's white's turn
let pieceSelect = null;
let moves = [];
let colorBack;
let check = false;
const greenBox = "rgba(172,255,47,0.733)";
const blackBox = "rgb(246,76,76)";
const whiteBox = "white";

document.getElementById("game").addEventListener("click", function (e) {
  let box = document.getElementById(e.target.id);
  let piece = e.target.textContent;

  if (pieceSelect != null && moves.length > 0) {
    if (moves.includes(box.id)) {
      move(pieceSelect, box, moves);
      check = checkAnalysis(
        box,
        moves,
        whitePieces.includes(pieceSelect.textContent)
      );
      moves = [];
      round = !round;
      box = pieceSelect;
      piece = box.textContent;
    }
  }

  select(box, piece);
});

function select(box, piece) {
  if (pieceSelect != box && pieceSelect != null) {
    colorBack = pieceSelect.className == "box box-black" ? blackBox : whiteBox;
    pieceSelect.style.backgroundColor = colorBack;
    pieceSelect = null;
  }
  if (pieceSelect == null) {
    box.style.backgroundColor = greenBox;
    pieceSelect = box;
  }

  movesPiece(box, piece);
}

export function movesPiece(box, piece) {
  if (pieceSelect != null) {
    moves = [];
    if (whitePieces.includes(piece) && round) {
      if (!check) {
        if (piece === "♙") {
          moves = movWhitePawn(box);
        }

        if (piece === "♗") {
          moves = movBishop(box, piece, whitePieces);
        }

        if (piece == "♘") {
          moves = movHorse(box, whitePieces);
        }
        if (piece == "♖") {
          moves = movTower(box, piece, whitePieces);
        }
        if (piece == "♕") {
          moves = moves.concat(
            movBishop(box, piece, whitePieces),
            movTower(box, piece, whitePieces)
          );
        }
      }
      if (piece == "♔") {
        moves = moves.concat(movKing(box, whitePieces));
      }
    }
    /**************************************************/
    if (blackPieces.includes(piece) && !round) {
      if (!check) {
        if (piece === "♟") {
          moves = movBlackPawn(box);
        }
        if (piece === "♝") {
          moves = movBishop(box, piece, whitePieces);
        }
        if (piece == "♞") {
          moves = movHorse(box, blackPieces);
        }
        if (piece == "♜") {
          moves = movTower(box, piece, whitePieces);
        }
        if (piece == "♛") {
          moves = moves.concat(
            movBishop(box, piece, whitePieces),
            movTower(box, piece, whitePieces)
          );
        }
      }
      if (piece == "♚") {
        moves = moves.concat(movKing(box, blackPieces));
      }
    }
  }

  return moves;
}
