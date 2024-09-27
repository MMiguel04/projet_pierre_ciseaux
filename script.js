let playerScore = 0;
let computerScore = 0;

let btnPapier = document.querySelector("#papier")
let btnPierre = document.querySelector("#pierre")
let btnCiseaux = document.querySelector("#ciseaux")

function computerChoice(){
    let choices = ["papier", "pierre", "ciseaux"];
    let randonChoices = Math.floor(Math.random() * choices.length)

    return choices[randonChoices]
}


function playRound(playerSelection){
    playerSelection.toLowerCase()
    let computerSelection = computerChoice();
    let divResult = document.querySelector("#result");

    let result = " ";

    if(playerSelection === computerSelection){
        result = "Egalité, vous avez tout les deux choisi" +playerSelection
    } else if (
        (playerSelection === 'pierre' && computerSelection === 'ciseaux') ||
        (playerSelection === 'feuille' && computerSelection === 'pierre') ||
        (playerSelection === 'ciseaux' && computerSelection === 'feuille')
    ){
        result = `Vous avez gagné ! ${playerSelection} bat ${computerSelection}.`
        playerScore++
    }else{
        result = `Dommage ! ${computerSelection} bat ${playerSelection}`
        computerScore++
    }
    divResult.textContent = result
    updateScore()
}

function updateScore(){
    document.querySelector("#player-score").textContent = playerScore;
    document.querySelector("#ordinateur-score").textContent= computerScore;
}

playRound("pierre")
playRound("papier")
playRound("ciseaux")

