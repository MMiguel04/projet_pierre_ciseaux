let playerScore = 0;
let computerScore = 0;


document.querySelector("#papier").addEventListener("click", () =>{
    playRound("papier")
})

document.querySelector("#pierre").addEventListener("click", () =>{
    playRound("pierre");
});

document.querySelector("#ciseaux").addEventListener("click", ()=>{
    playRound("ciseaux")
})


function computerChoice(){
    let choices = ["papier", "pierre", "ciseaux"];
    let randomChoices = Math.floor(Math.random() * choices.length)

    return choices[randomChoices]
}


function playRound(playerSelection){
    
    let computerSelection = computerChoice();
    let divResult = document.querySelector("#result");

    let result = " ";

    if(playerSelection === computerSelection){
        result = "Egalité, vous avez tout les deux choisi " +playerSelection
    } else if (
        (playerSelection === 'pierre' && computerSelection === 'ciseaux') ||
        (playerSelection === 'papier' && computerSelection === 'pierre') ||
        (playerSelection === 'ciseaux'&& computerSelection === 'papier')
    ){
        result = `Vous avez gagné ! ${playerSelection} bat ${computerSelection}.`
        playerScore++
    }else{
        result = `Dommage ! ${computerSelection} bat ${playerSelection}`
        computerScore++
    }

    divResult.textContent = result
    updateScore()
    if(playerScore === 5 || computerScore === 5){
        declareWins()
    }
}

function updateScore(){
    document.querySelector("#player-score").textContent = `Score du joeur : ${playerScore}`
    document.querySelector("#ordinateur-score").textContent= `Score de l'ordinateur : ${computerScore}`;
}

function declareWins(){
    const divFinalResult = document.querySelector("#final-resultat");

    if(playerScore === 5){
        divFinalResult.textContent = 'Felicitations ! Vous avez gagne la partie';
    }else{
        divFinalResult.textContent = 'Dommage ! ordinateur a gagné la partie'
    }
    
    disableBouttons()
}

function disableBouttons(){
    document.querySelector("#papier").disabled = true;
    document.querySelector("#pierre").disabled = true;
    document.querySelector("#ciseaux").disabled = true;
}



