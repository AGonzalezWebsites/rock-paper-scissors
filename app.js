const playerChoices = document.querySelectorAll('button');
const resultBox = document.querySelector("#result")
const userScoreBox = document.querySelector("#userScore")
const compScoreBox = document.querySelector("#compScore")
playerChoices.forEach((button) => {
    button.addEventListener('click', () => {
        getPlayerChoice(button.textContent)
    })
}) 


//Way to get computers choice
const randomSelection = () => {
    let selection = "None";
    //generate number between 1 and 3
    let randomNum = Math.floor(Math.random() * 3) + 1;
    //using randomly generated number to select one of three options
    if (randomNum === 1) {
        selection = "Rock";
    } else if (randomNum === 2) {
        selection = "Paper";
    }else if (randomNum === 3) {
        selection = "Scissors";
    }
    return selection
}

//Get players choice

const getPlayerChoice = (x) => {
    //get player choice
    pickWinner(x, randomSelection());
}



//create a function with both choices as parameters
const pickWinner = (userChoice,compChoice) => {
    //create variables for each choice string
    let playerWon;
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";
    //clear results
    //if both choices are the same
    if (userChoice === compChoice) {
        result.textContent = `We both chose ${userChoice}!`
        return
    }
    //compare each option and determine a winner
    if (userChoice == rock) {
        if (compChoice == paper) {
            result.textContent = `Loser: Your ${userChoice} loses to my ${compChoice}!`;
            playerWon = false;
        } else if (compChoice == scissors) {
            result.textContent = `Winner: Your ${userChoice} beats my ${compChoice}!`;
            playerWon = true;
        }
        
    } else if (userChoice == paper) {
        if (compChoice == scissors) {
            result.textContent = `Loser: Your ${userChoice} loses to my ${compChoice}!`;
            playerWon = false;
        } else if (compChoice == rock) {
            result.textContent = `Winner: Your ${userChoice} beats my ${compChoice}!`;
            playerWon = true;
        }
        
    } else if (userChoice == scissors) {
        if (compChoice == rock) {
            result.textContent = `Loser: Your ${userChoice} loses to my ${compChoice}!`;
            playerWon = false;
        } else if (compChoice == paper) {
            result.textContent = `Winner: Your ${userChoice} beats my ${compChoice}!`;
            playerWon = true;
        }
        
    } else {
        console.log(userChoice)
        pickWinner(getPlayerChoice(), randomSelection());
    }
    scoreTally(playerWon)
}

let playerScore = 0;
let compScore = 0;
const scoreTally = (playerWon) => {
    if (playerWon) {
        playerScore++
        userScoreBox.textContent = playerScore;
    }
    else if (!playerWon) {
        compScore++
        compScoreBox.textContent = compScore;
    }
    else "Error"

    checkForWinner(playerScore,compScore)

}

    let resetGame = false;
    const checkForWinner = (playerScore,compScore) => {
    if (playerScore >= 5) {
        userScoreBox.textContent = playerScore;
        resetGame = true;
        alert("YOU WON")
    } else if (compScore >= 5) {
        alert("HAHAHA YOU IDIOT, I KNEW YOU'D LOSE. YOU KNOW WHY? CAUSE YOU'RE A USELESS HUMAN. DUMBASS")
        resetGame = true;
    }

    if (resetGame) {
        location.reload()
    }
}


