function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "rock"
    } else if (random === 1) {
        return "scissors"
    } else {
        return "paper"
    }
}

function getPlayerSelection() {
    let player = prompt("Enter your move")
    if (player !== null) {
        return player.toLowerCase();
    }
}

function playRound(PlayerSelection, ComputerChoice) {
    
    if (PlayerSelection === "rock" && ComputerChoice !== "paper") {
        console.log("You win!");
        return "player";
    } else if (PlayerSelection === "paper" && ComputerChoice !== "scissors") {
        console.log("You win!");
        return "player";
    } else if (PlayerSelection === "scissors" && ComputerChoice !== "rock") {
        console.log("You win!");
        return "player";
    } else {
        console.log("You lose")
        return "pc";
    }
}

function game() {
    let winner;
    let playerScore = 0;
    let PCScore = 0;

    for (let i = 0; i < 5; i++) {
        computer = getComputerChoice();
        player = getPlayerSelection();

        winner = playRound(player, computer);

        if (winner === "player") {
            playerScore += 1;
        } else {
            PCScore += 1;
        }
    }

    if (playerScore > PCScore) {
        console.log("player won")
    } else {
        console.log("pc won")
    }
}


game();
