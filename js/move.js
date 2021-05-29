export function move(pieceSelect, box) {
  box.textContent = pieceSelect.textContent;
  pieceSelect.textContent = "";
}
