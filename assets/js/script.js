//**constants */
const rock_button = document.getElementById("r");
const scissors_button = document.getElementById("s");

const choiceArea_div = document.getElementsByClassName("choice-area");

const scoreArea_div = document.getElementsByClassName("score-area");
const playerScore_span = document.getElementsByClassName("player-score");
const computerScore_span = document.getElementsByClassName("computer-score");
const playerScore = 0;
const computerScore = 0;

//**the computer choose function */
function getComputerChoice() {
    const choices = ["r", "s"];
    const randomNumber = Math.floor(Math.random() * 2);
    return choices[randomNumber];
}

//**the player choose function */
function game(userChoice) {   
    const computerChoice = getComputerChoice();
    if (userChoice === "r", computerChoice === "s") {
        console.log("Player wins");
    } else if (userChoice === "s", computerChoice === "r") {
        console.log("Computer wins");
    } else if (userChoice === "s", computerChoice === "s") {
        console.log("It's a draw");
    } else if (userChoice === "r", computerChoice === "r") {
        console.log("It's a draw");
    } else {
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

//**compare hands */

//**update score */