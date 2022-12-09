const startButton = document.querySelector('#start');
const gameText = document.querySelector('#gameText');
const gameText2 = document.querySelector('#gameText2');
const result = document.querySelector('#result');

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const playerChoices = ["Rock", "Paper", "Scissors"]; 
let playerChoice = "";
const computerChoiceRange = ["Rock", "Paper", "Scissors"]; 
let computerChoice;
let playerTurn = ""; 


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


    if (playerChoice == computerChoice) {
        result.textContent = "You have drawn!";
    } else if (playerChoice == "Rock" && computerChoice == "Paper") {
        result.textContent = "You have lost!";
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        result.textContent = "You have won!";
    }  else if (playerChoice == "Paper" && computerChoice == "Rock") {
        result.textContent = "You have won!";
    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        result.textContent = "You have lost!";
    }  else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        result.textContent = "You have lost!";
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        result.textContent = "You have won!";
    }




getComputerChoice();
console.log("computer choice is: " + computerChoice);


}


function getComputerChoice(){
    let y = Math.floor(Math.random() * 2)
    gameText.textContent = "Computer has selected " + computerChoice;
    return computerChoice = computerChoiceRange[y];

}
