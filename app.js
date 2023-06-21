const playerChoices = document.querySelectorAll('button');
const resultBox = document.querySelector("#result")
playerChoices.forEach((button) => {
    console.log(button)
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
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    //clear results
    //if both choices are the same
    if (userChoice === compChoice) {
        result.textContent = `You both chose ${userChoice}!`
    }
    //compare each option and determine a winner
    if (userChoice == rock) {
        if (compChoice == paper) {
            result.textContent = `Loser: Your ${userChoice} loses to the computers ${compChoice}!`;
        } else if (compChoice == scissors) {
            result.textContent = `Winner: Your ${userChoice} beats the computers ${compChoice}!`;
        }

    } else if (userChoice == paper) {
        if (compChoice == scissors) {
            result.textContent = `Loser: Your ${userChoice} loses to the computers ${compChoice}!`;
        } else if (compChoice == rock) {
            result.textContent = `Winner: Your ${userChoice} beats the computers ${compChoice}!`;
        }

    } else if (userChoice == scissors) {
        if (compChoice == rock) {
            result.textContent = `Loser: Your ${userChoice} loses to the computers ${compChoice}!`;
        } else if (compChoice == paper) {
            result.textContent = `Winner: Your ${userChoice} beats the computers ${compChoice}!`;
        }

    } else {
        console.log(userChoice)
        pickWinner(getPlayerChoice(), randomSelection());
    }
    //run the script again to play another round
}


