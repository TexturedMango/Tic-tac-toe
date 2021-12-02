const cells = document.querySelectorAll('.cell')
const display = document.querySelector('.display')

player1 = {
    score: 0,
    choices: []
};

player2 = {
    score: 0,
    choices: []
};

winConditions = {
    1 : ['1','2','3'],
    2 : ['4','5','6'],
    3 : ['7','8','9'],
    4 : ['1','4','7'],
    5 : ['2','5','8'],
    6 : ['3','6','9'],
    7 : ['1','5','9'],
    8 : ['3','5','7']
}

function containsAll3(array1, array2) {
    counter = 0;
    array1.forEach((e) => {
        if (array2.includes(e)) {
            counter++;
        }
    })
    if (counter == 3) {return true} else {return false}
}

function checkWin(player) {
    for (const each in winConditions) {
        // console.log(`Checking for: ${winConditions[each]}`);
        if (containsAll3(winConditions[each], player.choices)) {return true}
    }
    return false
}

turn = 'X'

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (cell.innerHTML == '' && !checkWin(player1) && !checkWin(player2)) {
            if (turn == 'X') {
                cell.innerHTML = 'X'
                player1.choices.push(cell.id)
                turn = 'O'
                display.innerHTML = "Player O's turn"
                if (checkWin(player1)) {display.innerHTML = 'Player X Wins!'}
            } else {
                cell.innerHTML = 'O'
                player2.choices.push(cell.id)
                turn = 'X'
                display.innerHTML = "Player X's turn"
                if (checkWin(player2)) {display.innerHTML = 'Player O Wins!'}
            } 
        }
    })
});