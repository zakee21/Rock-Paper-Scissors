
//Global variables for user score and computer's score
let userScore = 0;
let compScore = 0; 

//Computer randomly selects rock, paper, or scissors
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const random = (Math.floor((Math.random() * choice.length)));
    return choice[random];
    }

//function to play one round of rock paper scissors.
function playRound(userSelection) {    

    //Display user's selection in html
    const userChoice = document.querySelector('#userChoice');
    userChoice.textContent = 'Your Choice : ' + userSelection;

    //Invoke function for computer's random selection. Obtain computers selection and display it.
    const compSelection = getComputerChoice();
    const compChoice = document.querySelector('#compChoice');
    compChoice.textContent = "Computer's Choice : " + compSelection;

    //Compare user selection with computer selection, add points to the winner's score, display results for each round.
    if (userSelection === compSelection) {
        document.querySelector('#userScore').textContent = "You : " + userScore;
        document.querySelector('#compScore').textContent = "Computer : " + compScore;
        return document.querySelector('#roundResult').textContent = "It's a tie!";
    }
    else if (userSelection === "rock" && compSelection === "scissors") {
        ++userScore;
        document.querySelector('#userScore').textContent = "You : " + userScore;
        document.querySelector('#compScore').textContent = "Computer : " + compScore;
        document.querySelector('#roundResult').textContent = "You win!";       
        
    }
    else if (userSelection === "paper" && compSelection === "rock") {
        ++userScore;
        document.querySelector('#userScore').textContent = "You : " + userScore;
        document.querySelector('#compScore').textContent = "Computer : " + compScore;
        document.querySelector('#roundResult').textContent = "You win!";
        
    }
    else if (userSelection === "scissors" && compSelection === "paper") {
        ++userScore;
        document.querySelector('#userScore').textContent = "You : " + userScore;
        document.querySelector('#compScore').textContent = "Computer : " + compScore;
        document.querySelector('#roundResult').textContent = "You win!";
    }
    else {
        ++compScore;
        document.querySelector('#userScore').textContent = "You : " + userScore;
        document.querySelector('#compScore').textContent = "Computer : " + compScore;
        document.querySelector('#roundResult').textContent = "You lose!";
    }

    //announce if user wins or loses the game after the user or computer reaches 5 points
    if (userScore >= 5) {
        document.querySelector('#roundResult').textContent = "YOU WIN THE GAME!";
    }
    else if (compScore >= 5) {
        document.querySelector('#roundResult').textContent = "YOU WIN THE GAME!";
    }
} 