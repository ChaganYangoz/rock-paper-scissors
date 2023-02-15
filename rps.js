const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

const container = document.querySelector('#container');
const score = document.createElement('div');
const winner = document.createElement('div');

winner.classList.add('winner');
score.classList.add('score');

container.appendChild(score);
container.appendChild(winner);
let player = 0, computer = 0;

    btnRock.onclick= () => {
        if(player!=5 && computer!=5){
            console.log("Rock");
            playRound("Rock");
        }  
    }
    btnPaper.onclick = () => {
        if(player!=5 && computer!=5){
        console.log("Paper");
        playRound("Paper");
        }
    }
    btnScissors.onclick = () => {
        if(player!=5 && computer!=5){
        console.log("Scissors");
        playRound("Scissors");
        }
    }


function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);

    switch (compChoice) {
        case 0: return "Rock";
            break;

        case 1: return "Paper";
            break;

        case 2: return "Scissors";
    }
}

function playRound(playerSelection) {
     computerSelection=getComputerChoice();
    switch (computerSelection) {
        case "Rock":
            if (playerSelection == "Rock") {
                score.textContent ="Tie! Score: "+player +'-'+computer;
            } else if (playerSelection == "Paper") {
                player++;
                score.textContent ="Paper beats Rock Score: "+player +'-'+computer;
            } else if (playerSelection == "Scissors") {
                computer++;
                score.textContent ="Rock beats Scissors Score: "+player +'-'+computer;

            }
            break;
        case "Paper": if (playerSelection == "Rock") {
            computer++;
            score.textContent ="Paper beats Rock Score: "+player +'-'+computer;

        } else if (playerSelection == "Paper") {
            score.textContent ="Tie! Score: "+player +'-'+computer;

        } else if (playerSelection == "Scissors") {
            player++;
            score.textContent ="Scissors beats Paper Score: "+player +'-'+computer;
        }
            break;

        case "Scissors": if (playerSelection == "Rock") {
            player++;
            score.textContent ="Rock beats Scissors Score: "+player +'-'+computer;
        
        }else if(playerSelection== "Paper"){
            computer++;
            score.textContent ="Scissors beats Paper Score: "+player +'-'+computer;
            
        } else if (playerSelection == "Scissors") {
            score.textContent ="Tie! Score: "+player +'-'+computer;

        }
            break;
    }

    if(player==5 || computer==5){
        if(player<computer){
        winner.textContent="You Lose!";
    }else{
        winner.textContent="You Win!";
    }
    }
}
