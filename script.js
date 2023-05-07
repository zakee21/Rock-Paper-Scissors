//Variables for user score and computer's score
let userScore = 0;
let compScore = 0; 

//Computer randomly selects rock, paper, or scissors
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const random = (Math.floor((Math.random() * choice.length)));
    return choice[random];
    }

//function to play one round of rock, paper, scissors.
function playRound(userSelection) {

/*User selects rock, paper or scissors, case instensitive
    const choice = prompt("Enter your choice: ");
    const userSelection = choice.toLowerCase();*/
    console.log("Your Selection: " + userSelection);

//Obtain computers selection.
    const compSelection = getComputerChoice();
    console.log("Computer's Selection: " + compSelection);  

//Compare user selection with computer selection, add points to the winner's score.
    if (userSelection === compSelection) {
        console.log("You: ", userScore, "\nComputer: ", compScore);
        return console.log("It's a tie!");
    }
    else if (userSelection === "rock" && compSelection === "scissors") {
        ++userScore;
        console.log("You: ", userScore, "\nComputer: ", compScore);
        return console.log("You win!");
    }
    else if (userSelection === "paper" && compSelection === "rock") {
        ++userScore;
        console.log("You: ", userScore, "\nComputer: ", compScore);
        return console.log("You win!");
    }
    else if (userSelection === "scissors" && compSelection === "paper") {
        ++userScore;
        console.log("You: ", userScore, "\nComputer: ", compScore);
        return console.log("You win!");
    }
    else {
        compScore = ++compScore;
        console.log("You: ", userScore, "\nComputer: ", compScore);
        return console.log("You lose!");
    }
} 

//play 5 rounds of rock, paper, scissors and display score results and whether the use wins, loses, or if it is a tie game.
//removed this for the new ui-rps branch of rock papper scissors repo.
/*function game(){
    for(let i = 0; i < 5; i++) {
        playRound(i);
    }
    if (userScore > compScore) {
        console.log("YOU WIN THE GAME!");
    }
    else if (userScore === compScore){
        console.log("TIE GAME!")
    }
    else {
        console.log("YOU LOST THE GAME!");
    }
    return console.log("FINAL SCORE:\n","You: ", userScore, "\nComputer: ", compScore);
}

//invoke function to start full game
game();*/