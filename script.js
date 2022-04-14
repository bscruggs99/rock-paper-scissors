// computer randomly picks rock paper or scissors and return

// prompt user for choice and save to variable and return

// run game calling computer and player choices, loop for 5 rounds

// display winner and choices
let buttons = document.querySelectorAll("button");
let winner = document.querySelector(".winner");
let tieCount = document.getElementById("tie-count");
let winCount = document.getElementById("win-count");
let lossCount = document.getElementById("loss-count");
let win = 0;
let loss = 0;
let tie = 0;

function setText() {
    winCount.textContent = win;
    tieCount.textContent = tie;
    lossCount.textContent = loss;
}


setText();
buttons.forEach(button =>  button.addEventListener("click", game));

function computer() {
    let choices = ['Rock','Paper','Scissors'];
let choice = Math.floor(Math.random() *3)
   
return choices[choice] ;
}


function player(choice) {
    
    let playerChoice = choice;

    return playerChoice;
    
}

function playRound(computerSelection, playerSelection) {

    let player = playerSelection.toString().toLowerCase();
    let computer = computerSelection.toString().toLowerCase();
    if(player == "rock" && computer == "rock" || player == "paper" && computer == "paper" || player == "scissors" && computer == "scissors" ) {
        winner.textContent = "Tie Game!";
        tie++;
        tieCount.textContent = tie;
    } else if (player == "paper" && computer == "rock") {

        winner.textContent = `You win ${player} beats ${computer}`;
        win++;
        winCount.textContent = win;

    }else if (player == "paper" && computer == "scissors") {

        winner.textContent = `You lost ${computer} beats ${player}`;
        loss++;
        lossCount.textContent = loss;

    }else if (player == "rock" && computer == "paper") {

        winner.textContent = `You lost ${computer} beats ${player}`;
        loss++;
        lossCount.textContent = loss;

    }else if (player == "rock" && computer == "scissors") {

        winner.textContent = `You win ${player} beats ${computer}`;
        win++;
        winCount.textContent = win;

    }else if (player == "scissors" && computer == "rock") {

        winner.textContent = `You lost ${computer} beats ${player}`;
        loss++;
        lossCount.textContent = loss;

    }else if (player == "scissors" && computer == "paper") {

        winner.textContent = `You win ${player} beats ${computer}`;
        win++;
        winCount.textContent = win;
    }

    if(win === 3) {
        alert("Congrats! You won 3 games!");
        win = 0;
        tie = 0;
        loss = 0;
        setText();
    } 
    
    if (loss === 3) {
        alert("Sucks to be you, you lost 3 games!");
        win = 0;
        tie = 0;
        loss = 0;
        setText();
    }


}

function game(e) {

let playerChoice = e.target.id;
console.log(playerChoice);
    
      playRound(computer(), player(playerChoice));
  
}

//game();

