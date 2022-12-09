const startButton = document.querySelector('#start');
const gameText = document.querySelector('#gameText');
const gameText2 = document.querySelector('#gameText2');
const result = document.querySelector('#result');
const history = document.querySelector('#history');
const win = document.querySelector('#win');
const lose = document.querySelector('#lose');
const draw = document.querySelector('#draw');
const winorlose = document.querySelector('#winorlose');

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const playerChoices = ["Rock", "Paper", "Scissors"]; 
let playerChoice = "";
const computerChoiceRange = ["Rock", "Paper", "Scissors"]; 
const gameResult = ["Win", "Lose", "Draw"]; 
let computerChoice;
let playerTurn = ""; 
const gameHistory = [];

//game stats

let wonGame = 0;
let loseGame = 0;
let drawGame = 0;


startButton.onclick = () => game();

rockButton.addEventListener("click", playRound);

rockButton.addEventListener("click", function(){
    playRound(0) });


paperButton.addEventListener("click", function(){
        playRound(1) });

scissorsButton.addEventListener("click", function(){
            playRound(2) });



function game() {

   
    
       
    
}

function playRound(x){
 
    playerChoice = playerChoices[x];
    gameText2.textContent = "You have selected " + playerChoice;
    
    console.log("player choice is: " + playerChoice);

  console.log(gameHistory);
    if (playerChoice == computerChoice) {
        result.textContent = "You have drawn!";
        updateHistory(2);
    } else if (playerChoice == "Rock" && computerChoice == "Paper") {
        result.textContent = "You have lost!";
        updateHistory(1);
        console.log(gameHistory);
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        result.textContent = "You have won!";
        updateHistory(0);
    }  else if (playerChoice == "Paper" && computerChoice == "Rock") {
        result.textContent = "You have won!";
        updateHistory(0);
    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        result.textContent = "You have lost!";
        updateHistory(1);
    }  else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        result.textContent = "You have lost!";
        updateHistory(1);
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        result.textContent = "You have won!";
        updateHistory(0)
    }




getComputerChoice();
console.log("computer choice is: " + computerChoice);


}


function getComputerChoice(){
    let y = Math.floor(Math.random() * 2)
    gameText.textContent = "Computer has selected " + computerChoice;
    return computerChoice = computerChoiceRange[y];

}


function updateHistory(x) {


    
    gameHistory.push(gameResult[x] + " ");
    history.textContent = gameHistory;
    console.log(gameHistory);

    if(gameResult[x] == gameResult[0]) {

        wonGame++
        win.textContent = "Wins: " + wonGame;
        console.log(wonGame);
    } else if(gameResult[x] == gameResult[1]) {

        loseGame++
        lose.textContent = "Loses: " + loseGame;
        console.log(loseGame);
    } else if(gameResult[x] == gameResult[2]) {

        drawGame++
        draw.textContent = "Draw: " + drawGame;
        console.log(drawGame);
    }


    if (wonGame < loseGame) {

        winorlose.textContent = "You are losing!";
        
    } else if (wonGame > loseGame) {
        winorlose.textContent = "You are winning!";
    } else if (wonGame == loseGame){
        winorlose.textContent = "You are drawing!";
    }

}
