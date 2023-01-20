
    let winner;
    let playerScore = 0;
    let PCScore = 0;
    const container = document.querySelector('#results');
    const roundWinner = document.createElement('p');
    const gameScore = document.createElement('p');
    const pcSelection = document.createElement('p');


    const sciButton = document.querySelector('#scissors');
    sciButton.addEventListener('click', () => {
        playRound('scissors', getComputerChoice())
        });

    const rockButton = document.querySelector('#rock');
    rockButton.addEventListener('click', () => {
        playRound('rock', getComputerChoice())
        });

    const paperButton = document.querySelector('#paper');
    paperButton.addEventListener('click', () => {
        playRound('paper', getComputerChoice())
        });
    
    container.appendChild(gameScore);
    container.appendChild(pcSelection);
    container.appendChild(roundWinner);
    


function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        pcSelection.textContent = 'computer selected rock'
        return "rock"
    } else if (random === 1) {
        pcSelection.textContent = 'computer selected scissors'
        return "scissors"
    } else {
        pcSelection.textContent = 'computer selected paper'
        return "paper"
    }
}

function playRound(PlayerSelection, ComputerChoice) {
    if (PlayerSelection === ComputerChoice) {
        winner = 'draw;'
    } else if (PlayerSelection === "paper" && ComputerChoice !== "scissors") {
        winner = "player";
    } else if (PlayerSelection === "scissors" && ComputerChoice !== "rock") {
        winner = "player";
    } else if (PlayerSelection === "rock" && ComputerChoice !== "paper") {
        winner = "player";
    } else {
        winner = 'pc'
    }

    decideGame(winner);
}

function decideGame(winner) {
    
        if (winner === "player") {
            playerScore += 1;
            roundWinner.textContent = 'Player won the round!';
        } else if (winner === 'pc') {
            PCScore += 1;
            roundWinner.textContent = 'Pc won the round!';
        } else {
            roundWinner.textContent = 'Draw!';
        }

    gameScore.textContent = `Player score: ${playerScore}. Computer score: ${PCScore}`;
    
    if (playerScore === 5 || PCScore === 5) {
        if (playerScore > PCScore) {
            window.alert("player won");
        } else {
            window.alert('pc won');
        }
    }   
    
}
