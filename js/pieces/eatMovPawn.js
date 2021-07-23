let whitePieces = ["♔", "♕", "♖", "♗", "♘", "♙"];
let blackPieces = ["♚", "♛", "♜", "♝", "♞", "♟"];
let eatStep = null;
let rightStep = null;
let leftStep = null;

export function enPassant(eatMov, right, left) {
  rightStep = right;
  leftStep = left;
  eatStep = eatMov;
}

// this function is in charge of determining the pieces to eat
export function eatMovWhitePawn(box) {
  let right;
  let left;

  let movEat = box.id == rightStep || box.id == leftStep ? [eatStep] : [];
  let boxId = Number(box.id.substr(3));
  let rightCont;
  let leftCont;

  right = document.getElementById("box" + String(Number(box.id.substr(3)) - 7));
  rightCont = right.textContent;
  left = document.getElementById("box" + String(Number(box.id.substr(3)) - 9));
  leftCont = left.textContent;

  if (
    boxId % 8 != 0 &&
    rightCont.length > 0 &&
    !whitePieces.includes(rightCont)
  ) {
    movEat.push(right.id);
  }
  if (
    (boxId + 7) % 8 != 0 &&
    leftCont.length > 0 &&
    !whitePieces.includes(leftCont)
  ) {
    movEat.push(left.id);
  }
  return movEat;
}
//////
//////
//////
export function eatMovBlackPawn(box) {
  let right;
  let left;
  let movEat = box.id == rightStep || box.id == leftStep ? [eatStep] : [];
  let boxId = Number(box.id.substr(3));
  let rightCont;
  let leftCont;

  right = document.getElementById("box" + String(Number(box.id.substr(3)) + 9));
  rightCont = right.textContent;
  left = document.getElementById("box" + String(Number(box.id.substr(3)) + 7));
  leftCont = left.textContent;

  if (
    boxId % 8 != 0 &&
    rightCont.length > 0 &&
    !blackPieces.includes(rightCont)
  ) {
    movEat.push(right.id);
  }
  if (
    (boxId + 7) % 8 != 0 &&
    leftCont.length > 0 &&
    !blackPieces.includes(leftCont)
  ) {
    movEat.push(left.id);
  }

  return movEat;
}
