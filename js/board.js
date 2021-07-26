import { movesPiece } from "./selection.js";
import { board, whitePieces } from "./shared/data.js";

//whiteOrBlack will be true if it's white, or false if it's black
export function checkAnalysis(box, piece, whiteOrBlack) {
  let moves =
    piece !== "♚" && piece != "♔"
      ? movesPiece(box, piece, box, whiteOrBlack)
      : [];
  let king;
  if (whiteOrBlack) {
    for (let i = 0; i < moves.length; i++) {
      if (document.getElementById(moves[i]).textContent == "♚") {
        alert("jaque a negra");
        king = document.getElementById(moves[i]);
        checkmate(king, box, true);
        break;
      }
    }
  } else if (!whiteOrBlack) {
    for (let i = 0; i < moves.length; i++) {
      if (document.getElementById(moves[i]).textContent == "♔") {
        alert("jaque a blanca");
        king = document.getElementById(moves[i]);
        checkmate(king, box, false);
        break;
      }
    }
  }
}

export function boardAnalysis(pieceSelect, box, prevBox) {
  let whiteOrBlack = whitePieces.includes(box.textContent);
  let check = [];
  let changeRound = false;
  if (whiteOrBlack) {
    board.map((boxes) => {
      let piece = document.getElementById(boxes);
      if (!whitePieces.includes(piece.textContent) && piece.textContent != "") {
        check = check.concat(
          movesPiece(piece, piece.textContent, piece, false)
        );
      }
    });

    check.map((check) => {
      if (document.getElementById(check).textContent === "♔") {
        pieceSelect.textContent = box.textContent;
        box.textContent = prevBox;
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
        check = check.concat(movesPiece(piece, piece.textContent, piece, true));
      }
    });

    check.map((check) => {
      if (document.getElementById(check).textContent === "♚") {
        pieceSelect.textContent = box.textContent;
        box.textContent = prevBox;
        alert("No puedes mover ahí, rey negro está amenazado");
        changeRound = false;
      }
    });

    return changeRound;
  }
}

function checkmate(king, enemy, whiteOrBlack) {
  let numEnemy = Number(enemy.id.substr(3));
  let numKing = Number(king.id.substr(3));
  let enemyDirection = [];
  let check = [];
  let defendedKing;
  let defenseMate = [];
  let enemies = [];
  //mayor
  if (numEnemy > numKing) {
    for (let i = 0; i <= numEnemy - numKing; i++) {
      enemyDirection[0] = i;
    }

    if (enemyDirection % 9 == 0) {
      enemyDirection.push(9);
    } else if (enemyDirection % 7 == 0) {
      enemyDirection.push(7);
    } else if (enemyDirection % 8 == 0) {
      enemyDirection.push(8);
    } else if (enemyDirection <= 7) {
      enemyDirection.push(1);
    }

    //menor
  } else if (numEnemy < numKing) {
    for (let i = 0; i <= numKing - numEnemy; i++) {
      enemyDirection[0] = i;
    }
    if (enemyDirection % 9 == 0) {
      enemyDirection.push(9);
    } else if (enemyDirection % 7 == 0) {
      enemyDirection.push(-7);
    } else if (enemyDirection % 8 == 0) {
      enemyDirection.push(-8);
    } else if (enemyDirection <= 7) {
      enemyDirection.push(-1);
    }
  }

  defenseMate = getDefenseMate(enemyDirection, numKing, numEnemy);
  // el siguiente bloque comprueba cuales piezas pueden defender del jaque
  //whiteOrBlack es true si las blancas amenazan a negras
  if (whiteOrBlack) {
    let i = 0;
    board.map((boxes) => {
      let piece = document.getElementById(boxes);

      if (!whitePieces.includes(piece.textContent) && piece.textContent != "") {
        check = movesPiece(piece, piece.textContent, piece, false);
        defendedKing = check.includes(defenseMate[0]);

        defendedKing = check.find((checkBox) => checkBox === defenseMate[i++]);
        console.log(defendedKing);
        console.log(defenseMate);
        console.log(check);
        if (defendedKing != undefined) {
          console.log(piece);
        }
      }
    });
  } else if (!whiteOrBlack) {
    let i = 0;
    board.map((boxes) => {
      let piece = document.getElementById(boxes);

      if (whitePieces.includes(piece.textContent) && piece.textContent != "") {
        check = check.concat(movesPiece(piece, piece.textContent, piece, true));

        defendedKing = check.find((checkBox) => checkBox === defenseMate[i++]);
        if (defendedKing != undefined) {
          console.log(piece);
        }
      }
    });
  }
}

function getDefenseMate(enemyDirection, numKing, numEnemy) {
  let moves = [numEnemy];

  for (
    let i = numKing + enemyDirection[1];
    i != numEnemy;
    i += enemyDirection[1]
  ) {
    moves.push(i);
  }

  return moves;
}
