// 1 = Rock, 2 = Paper, 3 = Scissors

function computerPlay(){
    let choice = Math.floor(Math.random()*3) + 1;
    switch(choice){
        case 1: choice = "rock";
        break;

        case 2: choice = "paper";
        break;

        case 3: choice = "scissors";
        break;
    }
    return choice;
}

function singleRound(playerSelection, computerPlay){
    let human = playerSelection.toLowerCase();
    let computer = computerPlay();
    console.log("You chose: " + human + ", computer chose: " + computer);
    switch (true){
        case (human === computer):
            return "Tie game!";
            break;
        case (human === "rock" && computer === "paper"):
            return "You lose!";
            break;
        case (human === "rock" && computer === "scissors"):
            return "You win!";
            break;
        case (human === "paper" && computer === "rock"):
            return "You win!";
            break;
        case (human === "paper" && computer === "scissors"):
            return "You lose!";
            break;
        case (human === "scissors" && computer === "paper"):
            return "You win!";
            break;
        case (human === "scissors" && computer === "rock"):
            return "You lose!";
            break;
        default: break;
    }
}