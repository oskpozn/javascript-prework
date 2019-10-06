function playGame(playerInput) {
    clearMessages()
    let argPlayerMove
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    argComputerMove = getMoveName(randomNumber)
    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    if (playerInput == '1') {
        argPlayerMove = 'kamień';
    } else if (playerInput == "2") {
        argPlayerMove = "papier"
    } else if (playerInput == "3") {
        argPlayerMove = "nożyce"
    }
    console.log('Gracz wpisał: ' + argPlayerMove);
    displayResult(argComputerMove, argPlayerMove)
    //pętle
    /*if (randomNumber == 1) {
        computerMove = "kamień"
    } else if (randomNumber == 2) {
        computerMove = "papier"
    } else if (randomNumber == 3) {
        computerMove = "nożyce"
    }*/
}
//funkcje
function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return "papier"
    } else if (argMoveId == 3) {
        return "nożyce"
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}

function displayResult(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    }
    if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Komputer wygrywa!');
    }
    if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
        printMessage('Remis!');
    }
    if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
        printMessage('Remis!');
    }
    if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Komputer wygrywa!');
    }
    if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    }
    if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Komputer wygrywa!');
    }
    if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    }
    if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
        printMessage('Remis!');
    }
}

function buttonClickedRock() {
    playGame(1)
}

function buttonClickedPaper() {
    playGame(2)
}

function buttonClickedScrissors() {
    playGame(3)
}

let buttonRock = document.getElementById('play-rock');
let buttonScrissors = document.getElementById('play-scrissors');
let buttonPaper = document.getElementById('play-paper');

buttonRock.addEventListener('click', buttonClickedRock);
buttonPaper.addEventListener('click', buttonClickedPaper);
buttonScrissors.addEventListener('click', buttonClickedScrissors);