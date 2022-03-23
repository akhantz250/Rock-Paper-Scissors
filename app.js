//global variables
let playerWins=0, computerWins=0;


//functions

function computerPlay(){

    let computerAction;

    randInt = Math.floor((Math.random() * 3) +1);
    //console.log("rand int is :" + randInt);

    switch(randInt){
        case 1: 
            computerAction = 'rock';
            break
        case 2: 
            computerAction = 'paper';
            break
        case 3: 
            computerAction = 'scissors';
            break    
    }

    //console.log('The computer actions is ' + computerAction);
    return computerAction;
}

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.substring(1);
}

function playRound(playerSelection, computerSelection){

if((playerSelection === 'rock' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'paper')){
        console.log(`Its a tie! You both drew ${playerSelection}.`);

    }else if((playerSelection === 'rock' && computerSelection === 'paper')||
    (playerSelection === 'paper' && computerSelection === 'scissors')||
    (playerSelection === 'scissors' && computerSelection === 'rock')){
        console.log(`You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`);
        computerWins++
    }
    else if((playerSelection === 'rock' && computerSelection === 'scissors')||
    (playerSelection === 'paper' && computerSelection === 'rock')||
    (playerSelection === 'scissors' && computerSelection === 'paper')){
        console.log(`You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)} `)
        playerWins++
    }else console.log('Error, something went wrong.');


}

function game(){

    for(let i=0;i<5;i++){
        let playerAction = prompt('Choose your action: ','').toLowerCase();
        playRound(playerAction,computerPlay())

    }
}

function score(){
    if(playerWins > computerWins){
        console.log("Congrats! You've beaten the computer");
    }else if(computerWins > playerWins){
        console.log("You've lost. Computers are superior.");
    }else{ 
        console.log("It's a tie!")
    }

}

//main code
game();
score();

