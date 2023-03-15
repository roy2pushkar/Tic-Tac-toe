const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelectorAll(".game-info");
const newGameBtn = document.querySelectorAll(".btn");

let currentPlayer;
let gameGrid;

const winningPosition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//lets create a function to initialise the game

function initGame() {
  currentPlayer = "X";
  gameGrid = ["", "", "", "", "", "", "", "", ""];

  //Bhai UI par empty v karna padega boxes ko

  boxes.forEach((box, index) => {
    box.innerText = "";
    boxes[index].getElementsByClassName.pointerEvents = "all";

    //one more thing is missing ,initialise box with css properties again

    box.classList = "box box${index+1}";
  });
  newGameBtn.classList.remove("active");
  gameInfo.innerText = "currentPlayer - ${currentPlayer}";
}
initGame();
