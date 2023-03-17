/*const boxes = document.querySelectorAll(".box");
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
*/
const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//let's create a function to initialise the game
function initGame() {
  currentPlayer = "X";
  gameGrid = ["", "", "", "", "", "", "", "", ""];
  //UI pr empty bhi karna padega boxes ko
  boxes.forEach((box, index) => {
    box.innerText = "";
    boxes[index].style.pointerEvents = "all";
    //one more thing is missing, initialise box with css properties again
    box.classList = `box box${index + 1}`;
  });
  newGameBtn.classList.remove("active");
  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

function swapTurn() {
  if (currentPlayer === "X") {
    currentPlayer == "O";
  } else {
    currentPlayer == "X";
  }
  //UI update
  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkGameOver() {
  let answer = " ";
  winningPositions.forEach((position) => {
    if (
      (gameGrid[position[0]] !== " " ||
        gameGrid[position[1]] !== " " ||
        gameGrid[position[2]] !== " ") &&
      gameGrid[position[0]] === gameGrid[position[1]] &&
      gameGrid[position[1]] === gamegrid[position[2]]
    ) {
      //check if winner is X
      if (gameGrid[position[0]] === "X") {
        answer = "X";
      } else {
        answer = "O";
      }
      //disable pointer events
      boxes.forEach((box) => {
        box.style.pointerEvents = "none";

    }
  });
}
