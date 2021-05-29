export function movHorse(box, thisPieces) {
  let moves = [];
  let movesFilter = [];
  let movShort = 8;
  let movLong = 16;
  let numBox = Number(box.id.substr(3));
  let movContent;
  let rightLongUp = numBox % 8 != 0 && numBox > 16;
  let leftLongUp = (numBox + 7) % 8 != 0 && numBox > 16;
  let rightShortUp = (numBox + 1) % 8 != 0 && numBox % 8 != 0 && numBox > 8;
  let leftShortUp =
    (numBox + 6) % 8 != 0 && (numBox + 7) % 8 != 0 && numBox > 8;

  let rightLongDown = numBox % 8 != 0 && numBox < 49;
  let leftLongDown = (numBox + 7) % 8 != 0 && numBox < 49;
  let rightShortDown = (numBox + 1) % 8 != 0 && numBox % 8 != 0 && numBox < 57;
  let leftShortDown =
    (numBox + 6) % 8 != 0 && (numBox + 7) % 8 != 0 && numBox < 57;

  if (rightLongUp) {
    moves.push("box" + (numBox - movLong + 1));
  }
  if (rightShortUp) {
    moves.push("box" + (numBox - movShort + 2));
  }
  if (rightLongDown) {
    moves.push("box" + (numBox + movLong + 1));
  }
  if (rightShortDown) {
    moves.push("box" + (numBox + movShort + 2));
  }

  if (leftLongUp) {
    moves.push("box" + (numBox - movLong - 1));
  }
  if (leftShortUp) {
    moves.push("box" + (numBox - movShort - 2));
  }

  if (leftLongDown) {
    moves.push("box" + (numBox + movLong - 1));
  }
  if (leftShortDown) {
    moves.push("box" + (numBox + movShort - 2));
  }

  for (let i = 0; i < moves.length; i++) {
    movContent = document.getElementById(moves[i]);
    if (!thisPieces.includes(movContent.textContent)) {
      movesFilter.push(movContent.id);
    }
  }

  return movesFilter;
}
