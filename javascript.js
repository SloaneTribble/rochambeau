
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
            result =  "tie";
            break;
        case (human === "rock" && computer === "paper"):
            result = "lose";
            break;
        case (human === "rock" && computer === "scissors"):
            result = "win";
            break;
        case (human === "paper" && computer === "rock"):
            result = "win";
            break;
        case (human === "paper" && computer === "scissors"):
            result = "lose";
            break;
        case (human === "scissors" && computer === "paper"):
            result = "win";
            break;
        case (human === "scissors" && computer === "rock"):
            result = "lose";
            break;
        default: 
            alert("Please enter rock, paper or scissors");
            break;
    }
    return result;
}

function resultMaster(result){
    switch(result){
        case "tie": break;

        case "win": yourScore += 1;
        break;

        case "lose": rochambeauScore += 1;
        break;  
    }
}

const btnContainer = document.querySelector('.btn-container');
btnContainer.classList.add('rock','paper','scissors');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.className;
        let result = singleRound(playerChoice);
        
    });
});


// const results = document.querySelector('.results');

// const you = document.querySelector('div');
// results.classList.add('you');
// let yourScore = 0;

// you.textContent = "You: " + yourScore;

// results.appendChild(you);

// const rochambeau = document.querySelector('.rochambeau');
// let rochambeauScore = 0;

// rochambeauScore.textContent = "Rochambeau: " + rochambeauScore;