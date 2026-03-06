let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    return prompt('choose between \'rock\', \'paper\' or \'scissors\'');
}

function playRound(humanChoice, computerChoice) {
    humanChoice = convertChoiceToInt(humanChoice.toLowerCase());
    computerChoice = convertChoiceToInt(computerChoice);

    // tie = 0;
    // player wins = 1;
    // player loses = 2
    switch ((humanChoice - computerChoice + 3) % 3) {
        case 0:
            break;
        case 1:
            break;
        case 2:
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