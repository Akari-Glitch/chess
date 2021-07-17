import { movesPiece } from "./selection.js";
import { board, whitePieces } from "./shared/data.js";

//whiteOrBlack will be true if it's white, or false if it's black
export function checkAnalysis(box, piece, whiteOrBlack) {
  let moves = piece !== "♚" && piece != "♔" ? movesPiece(box, piece) : [];
  let enemy;
  if (whiteOrBlack) {
    for (let i = 0; i < moves.length; i++) {
      if (document.getElementById(moves[i]).textContent == "♚") {
        alert("jaque a negra");
        enemy = document.getElementById(moves[0]);
        checkmate(enemy, true);
        break;
      }
    }
  } else if (!whiteOrBlack) {
    for (let i = 0; i < moves.length; i++) {
      if (document.getElementById(moves[i]).textContent == "♔") {
        alert("jaque a blanca");
        enemy = document.getElementById(moves[0]);
        checkmate(enemy, false);
        break;
      }
    }
  }
}

export function boardAnalysis(pieceSelect, box) {
  let whiteOrBlack = whitePieces.includes(box.textContent);
  let check = [];
  let changeRound = false;
  if (whiteOrBlack) {
    board.map((boxes) => {
      let piece = document.getElementById(boxes);
      if (!whitePieces.includes(piece.textContent) && piece.textContent != "") {
        check = check.concat(movesPiece(piece, piece.textContent));
      }
    });

    check.map((check) => {
      if (document.getElementById(check).textContent === "♔") {
        pieceSelect.textContent = box.textContent;
        box.textContent = "";
        alert("No puedes mover ahí, rey blanco está amenazado");
        changeRound = true;
      }
    });
    return changeRound;
  } else {
    changeRound = true;

    board.map((boxes) => {
      let piece = document.getElementById(boxes);
      if (whitePieces.includes(piece.textContent) && piece.textContent != "") {
        check = check.concat(movesPiece(piece, piece.textContent));
      }
    });

    check.map((check) => {
      if (document.getElementById(check).textContent === "♚") {
        pieceSelect.textContent = box.textContent;
        box.textContent = "";
        alert("No puedes mover ahí, rey negro está amenazado");
        changeRound = false;
      }
    });

    return changeRound;
  }
}

function checkmate(enemy, whiteOrBlack) {
  console.log(enemy);
}
