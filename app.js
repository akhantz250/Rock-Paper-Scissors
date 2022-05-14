//global variables
let playerWins=0, computerWins=0;

const rock = document.querySelector('.rockBtn');
const paper = document.querySelector('.paperBtn');
const scissors = document.querySelector('.scissorsBtn');
const scoreboard = document.querySelector('.scoreboard');
const scoring = document.querySelector('#scoring');
scoring.textContent='0 - 0';
const playerImg = document.querySelector('.left > img');
const CPUimg = document.querySelector('.right > img');
const allBtns = document.querySelectorAll('.btns');



//functions

//randomises the computers move
function computerPlay(){

    let computerAction;

    randInt = Math.floor((Math.random() * 3) +1);
    console.log("rand int is :" + randInt);

    switch(randInt){
        case 1: 
            computerAction = 'rock';
            CPUimg.setAttribute('src','./images/img-rock.png');
            break
        case 2: 
            computerAction = 'paper';
            CPUimg.setAttribute('src','./images/img-paper.png');
            break
        case 3: 
            computerAction = 'scissors';
            CPUimg.setAttribute('src','./images/img-scissors.png');
            break    
    }

    //console.log('The computer actions is ' + computerAction);
    return computerAction;
}

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.substring(1);
}

//implements rock, paper, scissors logic
function playRound(playerSelection, computerSelection){
    
if((playerSelection === 'rock' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'paper')){
        scoreboard.textContent = `Its a tie! You both drew ${playerSelection}.`;

    }else if((playerSelection === 'rock' && computerSelection === 'paper')||
    (playerSelection === 'paper' && computerSelection === 'scissors')||
    (playerSelection === 'scissors' && computerSelection === 'rock')){
        scoreboard.textContent = `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
        computerWins++
    }
    else if((playerSelection === 'rock' && computerSelection === 'scissors')||
    (playerSelection === 'paper' && computerSelection === 'rock')||
    (playerSelection === 'scissors' && computerSelection === 'paper')){
        scoreboard.textContent = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)} `;
        playerWins++
    }else alert('Error, something went wrong.');
}

//checks whether player has won and updates scoring
function updateScoring(){
    scoring.textContent= `${playerWins} - ${computerWins}`;
    if(playerWins === 5){
        scoreboard.textContent='Congrats! You beat the computer.';
        allBtns.forEach((button) => button.disabled = true);
    }
    if(computerWins === 5){
        scoreboard.textContent='You lost. You are no match for a machine.';
        allBtns.forEach((button) => button.disabled = true);
    }
}

//main code

rock.addEventListener('click', () => {
    playerImg.setAttribute('src','./images/img-rock.png')
    playRound('rock',computerPlay());
    updateScoring();  
}
);
paper.addEventListener('click', () => {
    playerImg.setAttribute('src','./images/img-paper.png')
    playRound('paper',computerPlay());
    updateScoring();
});
scissors.addEventListener('click', () => {
    playerImg.setAttribute('src','./images/img-scissors.png')
    playRound('scissors',computerPlay());
    updateScoring();
});


