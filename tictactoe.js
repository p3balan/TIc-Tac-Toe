var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();

const winningCombinations = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9],
 [1, 4, 7],
 [2, 5, 8],
 [3, 6, 9],
 [1, 5, 9],
 [3, 5, 7]
]
handleClick = function (event) {
 var cell = event.target;

 cell.innerHTML = currentPlayer;

 if (currentPlayer === "X") {
   playerSelections = playerXSelections;
   nextPlayer = "O";
 } else {
   playerSelections = playerOSelections;
   nextPlayer = "X";
 }

 playerSelections.push(parseInt(cell.id));


 if (checkWinner(playerSelections)) {
   alert("Player " + currentPlayer + " wins!")
   resetGame();
 }

 if (checkDraw()) {
   alert("Draw!");
   resetGame();
 }

 // Swap players
 currentPlayer = nextPlayer;
}

var cells = document.querySelectorAll("td");

for (var i = 0; i < cells.length; i++) {
 cells[i].addEventListener('click', handleClick)
}

function checkWinner() {
 var matches = 0;
 for (i = 0; i < winningCombinations.length; i++) {
     matches = 0;

     for (j = 0; j < winningCombinations[i].length; j++) {
         if (playerSelections.includes(winningCombinations[i][j])) {
             matches++;
         } else break;
         if (matches == 3) {
             return true;
         }
     }
 }
 if (matches !== 3) {
     return false;
 }
}

function checkDraw() {
 return playerOSelections.length + playerXSelections.length >= cells.length
}

function resetGame() {
 playerXSelections = new Array();
 playerOSelections = new Array();
 for(var i = 0; i < cells.length; i++) {
   cells[i].innerHTML = ""
 }
}