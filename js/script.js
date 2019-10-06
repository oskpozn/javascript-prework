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

if (randomNumber == 1) {
    computerMove = "kamień"
} else if (randomNumber == 2) {
    computerMove = "papier"
} else {
    computerMove = "nożyce"
}
if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
  if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Komputer wygrywa!');
  }
  if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  }
  if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
  }
  if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Komputer wygrywa!');
  }
  if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }
  if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Komputer wygrywa!');
  }
  if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }
  if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
  }