//**constants */
const rock_button = document.getElementById("r");
const scissors_button = document.getElementById("s");

const choiceArea_h2 = document.querySelector(".choice-area > h2");

const scoreArea_div = document.getElementsByClassName("score-area");
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");

//**scores */
let userScore = 0;
let computerScore = 0;

//**the computer choose function */
function getComputerChoice() {
    const choices = ["r", "s"];
    const randomNumber = Math.floor(Math.random() * 2);
    return choices[randomNumber];
}

//**to get understandable words on page */
function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "s") return "Scissors";
}

//**add scores to the page and add scentence about what has been played */
function win(userChoice, computerChoice) {
    userScore++;
    playerScore_span.innerHTML = userScore;
    choiceArea_h2.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    choiceArea_h2.innerHTML = convertToWord(userChoice) + " covers " + convertToWord(computerChoice) + ". You lost!";

}

function draw(userChoice, computerChoice) {
   choiceArea_h2.innerHTML = convertToWord(userChoice) + " is the same as " + convertToWord(computerChoice) + ". It's a draw!";
}

//**the player choose function */
function game(userChoice) {   
    const computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        draw(userChoice, computerChoice);
    } else if(userChoice === "r", computerChoice === "s") {
        win(userChoice, computerChoice);
    } else if (userChoice === "s", computerChoice === "r") {
        lose(userChoice, computerChoice);
    }  else {
        console.log("fail");
    }
} 

//** the game function*/
function main () {

    // event listener/
    rock_button.addEventListener("click", function() {
        game("r");
    })

    scissors_button.addEventListener("click", function() {
        game("s");
    })
}

main();
