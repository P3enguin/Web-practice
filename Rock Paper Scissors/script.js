/* function that return a random from one of the three options */
const option = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return option[parseInt(Math.random() * 3)];
}


function playRound(playerSelection,computerSelection){
        if (playerSelection.toLowerCase() === computerSelection)
            return "It's a draw";

        /* Checking only the wining condition  */
        else if ((playerSelection.toLowerCase() === option[0] 
            && computerSelection === option[2]) 
            || (playerSelection.toLowerCase() === option[1] 
            && computerSelection === option[0])
            || (playerSelection.toLowerCase() === option[2] 
            && computerSelection === option[1]) )
            return ("You win! " + playerSelection.toLowerCase() + " beats " + computerSelection);
        else
            return ("You lost! " + computerSelection + " beats " + playerSelection.toLowerCase()); 
}

function announceResult(e) {
    let computerChoice = getComputerChoice();
    let par = document.querySelector('.computer');
    let result = document.querySelector('.annouce');
    par.innerHTML = "computer choice : " + computerChoice;
    result.innerHTML = playRound(this.classList.value,computerChoice);

}


const buttons=document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click',announceResult));
