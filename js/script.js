let computerMove
let playerMove 
let randomNumber = Math.floor(Math.random() * 3 + 1)
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == "2") {
    playerMove = "papier"
} else {
    playerMove = "nożyce"
}

//coś nie chce mi dodać commita