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
        default: 
            alert("Please enter rock, paper or scissors");
            break;
    }
}

function game(){
    alert("You are about to play Rochambeau's Revenge, best of five.");
    let computerScore = 0;
    let humanScore = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, paper or scissors?");
        let roundResult = singleRound(playerSelection, computerPlay);
        switch(roundResult){
            case "Tie game!":
                alert(`That one was a tie! You: ` + humanScore 
                + `; Computer: ` + computerScore);
                break;
            case "You win!": 
                humanScore += 1;
                alert(`You won that one! You: ` + humanScore
                + `; Computer: ` + computerScore);
                break;
            case "You lose!":
                computerScore += 1;
                alert(`Dang it! That was a loss. You: ` + humanScore
                + `; Computer: ` + computerScore);
                break;
            default: 
                alert("That round was botched.  Time for a re-do!");
                i -= 1;
                break;
        }
    
    }
    switch(true){
        case (humanScore === computerScore):
            alert("In the end, it was a tie.");
            break;
        case (humanScore > computerScore):
            alert("You are the victor!");
            break;
        case (humanScore < computerScore):
            alert("Dang it, better luck next time.");
            break;
    }
}

game();