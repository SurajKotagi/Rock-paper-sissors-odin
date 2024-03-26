// function which returns computer choice
function getComputerChoice() {
    let choices = ["rock", "paper", "sissor"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
// console.log(getComputerChoice());
// function which plays single round
function singleRound(userChoice, computersChoice) {
    userChoice = userChoice.toLowerCase();
    computersChoice = computersChoice.toLowerCase();

    if (userChoice == "rock") {
        if (computersChoice == "paper") {
            console.log("you lose! paper beats rock");
            return 0;
        } else if (computersChoice == "sissor") {
            console.log("you win🎉 rock beats sissor");
            return 1;
        } else if (computersChoice == "rock") {
            console.log("its tie!!");
            return 2;
        }
    } else if (userChoice == "paper") {
        if (computersChoice == "paper") {
            console.log("its tie!!");
            return 2;
        } else if (computersChoice == "sissor") {
            console.log("you lose! sissor beats paper");
            return 0;
        } else if (computersChoice == "rock") {
            console.log("you win🎉 paper beats rock");
            return 1;
        }
    } else if (userChoice == "sissor") {
        if (computersChoice == "paper") {
            console.log("you win🎉 sissor beats paper");
            return 1;
        } else if (computersChoice == "sissor") {
            console.log("its tie!!");
            return 2;
        } else if (computersChoice == "rock") {
            console.log("you lose! rock beats sissor");
            return 0;
        }
    } else {
        console.log("input given is invalid");
        return 3;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("enter you choice :");
        const computerSelection = getComputerChoice();
        let result = singleRound(playerSelection, computerSelection);
        if (result == 0) {
            computerScore++;
        } else if (result == 1) {
            playerScore++;
        } else if (result == 2) {
        } else {
            i--;
        }
    }
    console.log(`player score : ${playerScore}`);
    console.log(`computer score : ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("Ultimately the winner is player");
    } else if (computerScore > playerScore) {
        console.log("Ultimately the winner is computer");
    } else {
        console.log("Ultimately its tie!");
    }
}
playGame();
