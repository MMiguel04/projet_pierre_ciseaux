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
