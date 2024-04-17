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
function round(playerSelection) {
    let computerScoreDisplay = document.getElementById("computerScore");
    let playerScoreDisplay = document.getElementById("playerScore");

    const computerSelection = getComputerChoice();
    let result = singleRound(playerSelection, computerSelection);
    if (result == 0) {
        computerScoreDisplay.innerText =
            Number(computerScoreDisplay.innerText) + 1 + "";
    } else if (result == 1) {
        playerScoreDisplay.innerText =
            Number(playerScoreDisplay.innerText) + 1 + "";
    }
    checkWinner(
        Number(playerScoreDisplay.innerText),
        Number(computerScoreDisplay.innerText)
    );
}
function finish(text) {
    choiceContainer.style.display = "none";
    scoreDiv[0].style.display = "none";
    scoreDiv[1].style.display = "none";
    let slctAnyTextElmnt = document.getElementById("selectAnyTxt");
    slctAnyTextElmnt.innerText = text;
    let restartBtn = document.createElement("button");
    restartBtn.id = "restart";
    restartBtn.style.backgroundColor = "orange";
    restartBtn.style.borderRadius = "20px";
    restartBtn.style.width = "200px";
    restartBtn.style.height = "40px";
    restartBtn.style.fontFamily = "Monaco";
    restartBtn.innerText = "restart";
    startBtnDiv.appendChild(restartBtn);
    restartBtn.addEventListener("click", function () {
        console.log("clicked on restart");
        location.reload();
    });
}
function checkWinner(playerScore, computerScore) {
    if (playerScore == 5 && computerScore == 5) {
        finish("Ultimately its tie!");
    } else if (computerScore == 5) {
        finish("Ultimately the winner is computer");
    } else if (playerScore == 5) {
        finish("Ultimately the winner is player");
    }
}

let startBtn = document.getElementById("startBtn");
startBtn.style.backgroundColor = "orange";

let choiceContainer = document.getElementById("choicesContainer");
let scoreDiv = document.getElementsByClassName("scorediv");
let startBtnDiv = document.getElementById("startBtnDiv");

let playerScore = 0;
let computerScore = 0;
startBtn.addEventListener("click", function () {
    choiceContainer.style.display = "flex";
    scoreDiv[0].style.display = "flex";
    scoreDiv[1].style.display = "flex";
    startBtn.style.display = "none";

    let selectAnyTxt = document.createElement("h3");
    selectAnyTxt.id = "selectAnyTxt";
    selectAnyTxt.textContent = "Pick anyone of below";
    startBtnDiv.appendChild(selectAnyTxt);
});

let choices = document.getElementsByClassName("choices");
for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener("mouseover", function () {
        choices[i].style.transform = "scale(1.2)";
        choices[i].style.cursor = "pointer";
    });
    choices[i].addEventListener("mouseout", function () {
        choices[i].style.transform = "scale(1)";
    });
}
choices[0].addEventListener("click", function () {
    round("rock");
});
choices[1].addEventListener("click", function () {
    round("paper");
});
choices[2].addEventListener("click", function () {
    round("sissor");
});
