export function movTower(box, piece, whitePieces) {
  let moves = [];
  let movContent;
  let pieceColor;
  let numBox = Number(box.id.substr(3));
  let up = 8;
  let down = 8;
  let left = -1;
  let right = 1;

  //if piece color it's white, this variable will be true, if it's black, false
  whitePieces.includes(piece) ? (pieceColor = true) : (pieceColor = false);

  function movesBox(direction) {
    movContent = document.getElementById("box" + String(direction));
    if (movContent.textContent.length > 0) {
      if (pieceColor != whitePieces.includes(movContent.textContent)) {
        moves.push(movContent.id);
      }
      return 0;
    } else {
      moves.push(movContent.id);
      return direction;
    }
  }
  for (let i = 1; i <= 7; i++) {
    if (up != 0) {
      up = numBox + -8 * i;
      if (numBox > 8 && up > 0) {
        up = movesBox(up);
      }
    }
    if (down != 0) {
      down = numBox + 8 * i;
      if (numBox < 57 && down < 65) {
        down = movesBox(down);
      }
    }
    if (right % 8 != 0 && right != 0) {
      right = numBox + 1 * i;
      if (numBox % 8 != 0) {
        right = movesBox(right);
      }
    }
    if ((left + 7) % 8 != 0 && left != 0) {
      left = numBox + -1 * i;
      if ((numBox + 7) % 8 != 0) {
        left = movesBox(left);
      }
    }
  }
  return moves;
}
