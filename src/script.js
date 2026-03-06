function getComputerChoice() {
    // TODO: return "rock", "paper" or "scissors", randomly
    // i can use Math.random
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';  
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = convertChoiceToInt(humanChoice.toLowerCase());
    computerChoice = convertChoiceToInt(computerChoice);

    // tie = 0;
    // player wins = 1;
    // player loses = 2
    switch ((humanChoice - computerChoice + 3) % 3) {
        case 0:
            roundWinner.textContent = 'Empate!';
            break;
        case 1: 
            humanScore.textContent = +humanScore.textContent + 1;
            roundWinner.textContent = 'Você ganhou!';
            break;
        case 2:
            computerScore.textContent = +computerScore.textContent + 1;
            roundWinner.textContent = 'Você perdeu!';
            break;
    }
}

function convertChoiceToInt(choice) {
    switch (choice) {
        case 'rock':
            return 0;
        case 'paper':
            return 1;
        case 'scissors':
            return 2;
    }
}

const options = document.querySelector('.options');
const humanScore = document.querySelector('.humanScore .value');
const computerScore = document.querySelector('.computerScore .value');
const roundWinner = document.querySelector('.roundWinner');

options.addEventListener('click', function (event) {
    if (event.target.tagName !== "BUTTON") return;
    playRound(event.target.id, getComputerChoice());
});