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
    let human;
    let computer = computerPlay();
    console.log();
    if (human === computer){
        return true;
    } else {
        return false;
    }
}