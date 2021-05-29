export function movBishop(box, piece, whitePieces) {
  let moves = [];
  let pieceColor;
  let movContent;
  let diagonalRightUp = -7;
  let diagonalLeftUp = -9;
  let diagonalRightDown = 9;
  let diagonalLeftDown = 7;
  let numBox = Number(box.id.substr(3));

  //if piece color it's white, this variable will be true, if it's black, false
  whitePieces.includes(piece) ? (pieceColor = true) : (pieceColor = false);

  if (numBox % 8 != 0) {
    for (let i = 1; i <= 7; i++) {
      if (diagonalRightUp % 8 != 0) {
        diagonalRightUp = numBox + -7 * i;

        if (diagonalRightUp < 1) {
          diagonalRightUp = 0;
        } else {
          movContent = document.getElementById("box" + String(diagonalRightUp));
          if (movContent.textContent.length > 0) {
            if (pieceColor != whitePieces.includes(movContent.textContent)) {
              moves.push(movContent.id);
            }
            diagonalRightUp = 0;
          } else {
            moves.push(movContent.id);
          }
        }
      }
      /*********************************************************/

      if (diagonalRightDown % 8 != 0) {
        diagonalRightDown = numBox + 9 * i;

        if (diagonalRightDown > 64) {
          diagonalRightDown = 0;
        } else {
          movContent = document.getElementById(
            "box" + String(diagonalRightDown)
          );
          if (movContent.textContent.length > 0) {
            if (pieceColor != whitePieces.includes(movContent.textContent)) {
              moves.push(movContent.id);
            }
            diagonalRightDown = 0;
          } else {
            moves.push(movContent.id);
          }
        }
      }
    }
  }
  //
  //
  if ((numBox + 7) % 8 != 0) {
    for (let i = 1; i < 7; i++) {
      if ((diagonalLeftUp + 7) % 8 != 0) {
        diagonalLeftUp = numBox + -9 * i;

        if (diagonalLeftUp < 1) {
          diagonalLeftUp = 1;
        } else {
          movContent = document.getElementById("box" + String(diagonalLeftUp));
          if (movContent.textContent.length > 0) {
            if (pieceColor != whitePieces.includes(movContent.textContent)) {
              moves.push(movContent.id);
            }
            diagonalLeftUp = 1;
          } else {
            moves.push(movContent.id);
          }
        }
      }
      /*********************************************************/
      if ((diagonalLeftDown + 7) % 8 != 0) {
        diagonalLeftDown = numBox + 7 * i;

        if (diagonalLeftDown > 64) {
          diagonalLeftDown = 1;
        } else {
          movContent = document.getElementById(
            "box" + String(diagonalLeftDown)
          );
          if (movContent.textContent.length > 0) {
            if (pieceColor != whitePieces.includes(movContent.textContent)) {
              moves.push(movContent.id);
            }
            diagonalLeftDown = 1;
          } else {
            moves.push(movContent.id);
          }
        }
      }
    }
  }

  return moves;
}
