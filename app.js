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
const getPlayerChoice = () => {
    //get player choice
    let x = prompt("Rock, Paper or Scissors");
    return fixCaps(x);
    
}

const fixCaps = (x) => {
    //lowercase string
    xLowerCase = x.toLowerCase();
    //get first letter
    xFirstLetter = xLowerCase.slice(0, 1);
    //upper case first letter
    xFirstLetter = xFirstLetter.toUpperCase();
    //get rest of string
    xAfterFirstLetter = xLowerCase.substring(1);
    //concatinate both strings
    return `${xFirstLetter}${xAfterFirstLetter}`;
};

//create a function with both choices as parameters
const pickWinner = (userChoice,compChoice) => {
    //create variables for each choice string
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";

    // if else to compare each option and determine a winner
    if (userChoice == rock) {
        
        if (compChoice == paper) {
            alert(`Your ${userChoice} loses to the computers ${compChoice}!`);
        } else if (compChoice == scissors) {
            alert(`Your ${userChoice} beats the computers ${compChoice}!`);
        }

    } else if (userChoice == paper) {
        
        if (compChoice == scissors) {
            alert(`Your ${userChoice} loses to the computers ${compChoice}!`);
        } else if (compChoice == rock) {
            alert(`Your ${userChoice} beats the computers ${compChoice}!`);
        }

    } else if (userChoice == scissors) {

        if (compChoice == rock) {
            alert(`Your ${userChoice} loses to the computers ${compChoice}!`);
        } else if (compChoice == paper) {
            alert(`Your ${userChoice} beats the computers ${compChoice}!`);
        }

    } else {
        console.log(userChoice)
        pickWinner(getPlayerChoice(), randomSelection());
    }
    //run the script again to play another round
    pickWinner(getPlayerChoice(), randomSelection());
}

//compare choices
//declare winner

    //randomSelection();
    
    pickWinner(getPlayerChoice(), randomSelection());


