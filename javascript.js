
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

function singleRound(playerSelection){
    let human = playerSelection
    let computer = computerPlay();
    let result = "";
    switch (true){
        case (human === computer):
            result =  "Tie game!";
            break;
        case (human === "rock" && computer === "paper"):
            result = "You lose!";
            break;
        case (human === "rock" && computer === "scissors"):
            result = "You win!";
            break;
        case (human === "paper" && computer === "rock"):
            result = "You win!";
            break;
        case (human === "paper" && computer === "scissors"):
            result = "You lose!";
            break;
        case (human === "scissors" && computer === "paper"):
            result = "You win!";
            break;
        case (human === "scissors" && computer === "rock"):
            result = "You lose!";
            break;
        default: 
            alert("Please enter rock, paper or scissors");
            break;
    }
    return "You chose: " + human + ", computer chose: " + computer + ". " + result;
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.className;
        alert(singleRound(playerChoice));
    });
});