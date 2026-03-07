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
    // os valores em int significam:
    // pedra: 0
    // papel: 1
    // tesoura: 2
    const humanChoiceInt = convertChoiceToInt(humanChoice.toLowerCase());
    const computerChoiceInt = convertChoiceToInt(computerChoice);

    // o cálculo resulta em: 
    // tie = 0
    // player wins = 1
    // player loses = 2
    if (!matchEnded) {
        humanText.children[0].textContent = emojis[humanChoiceInt];
        computerText.children[0].textContent = emojis[computerChoiceInt];
        switch ((humanChoiceInt - computerChoiceInt + 3) % 3) {
            case 0:
                scoreText.children[0].textContent = 'It\'s a tie!';
                scoreText.children[1].textContent = `${capitalize(humanChoice)} ties with ${capitalize(humanChoice)}.`
                break;
            case 1:
                scoreText.children[0].textContent = 'You won!';
                scoreText.children[1].textContent = `${capitalize(humanChoice)} beats ${computerChoice}.`;
                humanScore.classList.add('highlight');
                humanScore.textContent = +humanScore.textContent + 1;
                setTimeout(() => {
                    humanScore.classList.remove('highlight');
                }, 300);
                break;
            case 2:
                scoreText.children[0].textContent = 'You lost!';
                scoreText.children[1].textContent = `${capitalize(computerChoice)} beats ${humanChoice}.`;
                computerScore.textContent = +computerScore.textContent + 1;
                computerScore.classList.add('highlight');
                setTimeout(() => {
                    computerScore.classList.remove('highlight');
                }, 300);
                break;
        }
    }

    if (+humanScore.textContent >= 5) {
        declareWinner('human');
        return;
    }
    if (+computerScore.textContent >= 5) {
        declareWinner('computer');
        return;
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

function declareWinner(winner) {
    modal.style.display = 'block';
    setTimeout(() => {
        modalContent.classList.add('open');
    }, 10);
    if (winner === 'human') {
        winnerText.textContent = 'You won!';
    }

    else if (winner === 'computer') {
        winnerText.textContent = 'You lost...';
    }
    
    matchEnded = true;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function resetStatus() {
    humanScore.textContent = 0;
    computerScore.textContent = 0;
    humanText.children[0].textContent = '?';
    computerText.children[0].textContent = '?';
    scoreText.children[0].textContent = 'Choose below to start';
    scoreText.children[1].textContent = 'The first to get 5 points win';
    matchEnded = false;
}

const scoreText = document.querySelector(".scoreSection .text");

const humanText = document.querySelector(".human");
const computerText = document.querySelector(".computer")

const humanScore = document.querySelector(".human .score > span")
const computerScore = document.querySelector(".computer .score > span")

const options = document.querySelector(".options");
const emojis = ['👊', '🖐️', '✌️'];
const moves = ['rock', 'paper', 'scissors'];

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const closeModal = document.querySelector("#again");
const winnerText = document.querySelector(".modal-content > p");
let matchEnded = false;

document.addEventListener("click", function (event) {
    const id = event.target.id;

    if (moves.includes(id)) {
        playRound(id, getComputerChoice());
    }
    else if (id === 'again' || event.target === modal) {
        modalContent.classList.remove('open');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 200);
        if (id === 'again') resetStatus();
    }
});