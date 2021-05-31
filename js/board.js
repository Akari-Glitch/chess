import { movesPiece } from "./selection.js";

let board = [
  "box1",
  "box2",
  "box3",
  "box4",
  "box5",
  "box6",
  "box7",
  "box8",
  "box9",
  "box10",
  "box11",
  "box12",
  "box13",
  "box14",
  "box15",
  "box16",
  "box17",
  "box18",
  "box19",
  "box20",
  "box21",
  "box22",
  "box23",
  "box24",
  "box25",
  "box26",
  "box27",
  "box28",
  "box29",
  "box30",
  "box31",
  "box32",
  "box33",
  "box34",
  "box35",
  "box36",
  "box37",
  "box38",
  "box39",
  "box40",
  "box41",
  "box42",
  "box43",
  "box44",
  "box45",
  "box46",
  "box47",
  "box48",
  "box49",
  "box50",
  "box51",
  "box52",
  "box53",
  "box54",
  "box55",
  "box56",
  "box57",
  "box58",
  "box59",
  "box60",
  "box61",
  "box62",
  "box63",
  "box64",
];

//whiteOrBlack will be true if it's white, or false if it's black
export function checkAnalysis(box, whiteOrBlack) {
  let moves = movesPiece(box, box.textContent);
  if (whiteOrBlack) {
    for (let i = 0; i < moves.length; i++) {
      if (document.getElementById(moves[i]).textContent == "♚") {
        alert("jaque a negra");
        return true;
      }
    }
  } else if (!whiteOrBlack) {
    for (let i = 0; i < moves.length; i++) {
      if (document.getElementById(moves[i]).textContent == "♔") {
        alert("jaque a blanca");
        return true;
      }
    }
  }
}
export function boardAnalysis() {}
