// computer randomly picks rock paper or scissors and return

// prompt user for choice and save to variable and return

// run game calling computer and player choices, loop for 5 rounds

// display winner and choices


function computer() {
    let choices = ['Rock','Paper','Scissors'];
let choice = Math.floor(Math.random() *3)
   
return choices[choice] ;
}


function player() {
    let playerChoice = prompt("Choose Rock Paper or Scissors");
    return playerChoice;
}

//player();

// let computerSelection = computer();
// let playerSelection = player();

function playRound(computerSelection, playerSelection) {

    let player = playerSelection.toString().toLowerCase();
    let computer = computerSelection.toString().toLowerCase();
    if(player == "rock" && computer == "rock" || player == "paper" && computer == "paper" || player == "scissors" && computer == "scissors" ) {
        return "Tie Game!";
    } else if (player == "paper" && computer == "rock") {

        return `You win ${player} beats ${computer}`;

    }else if (player == "paper" && computer == "scissors") {

        return `You lost ${computer} beats ${player}`;

    }else if (player == "rock" && computer == "paper") {

        return `You lost ${computer} beats ${player}`;

    }else if (player == "rock" && computer == "scissors") {

        return `You win ${player} beats ${computer}`;

    }else if (player == "scissors" && computer == "rock") {

        return `You lost ${computer} beats ${player}`;

    }else if (player == "scissors" && computer == "paper") {

        return `You win ${player} beats ${computer}`;
    }


}

function game() {

    for (let i = 0; i < 5; i++) {
        console.log(playRound(computer(), player()));
    }
}

game();

