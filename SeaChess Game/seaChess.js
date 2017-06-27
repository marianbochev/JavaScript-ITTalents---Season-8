var seaChess = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
var rows = seaChess.length;
var cols = seaChess[0].length;

for (var count = 1; count <= rows * cols; count++) {
    do {
        var row = Math.floor(Math.random() * rows);
        var col = Math.floor(Math.random() * cols);
    }
    while (seaChess[row][col] !== ' ');

    seaChess[row][col] = count % 2 == 1 ? 'X' : 'O';
}

// print seaChess
for (row = 0; row < seaChess.length; row++) {
    for (col = 0; col < seaChess[row].length; col++) {
        process.stdout.write(" " + seaChess[row][col]);
    }
    process.stdout.write("\n");
}
var rowWinner = false;
var xCount = 0;
var colWinner = false;
var oCount = 0;
var diagonalWinner = false;
var diagCount = 0;
var firstDiagonal = false;
var secondDiagonal = false;

// obikalqme po redove
for (row = 0; row < seaChess.length; row++) {
    if (xCount === 3 || oCount === 3) {
        rowWinner = true;
        (xCount > oCount) ? console.log('X Pecheli') : console.log('O Pecheli');
        break;
    }
    xCount = 0;
    oCount = 0;
    for (var col = 0; col < seaChess[row].length; col++) {
        if (seaChess[row][col] === "X") {
            xCount++;
        }
        if (seaChess[row][col] === "O") {
            oCount++;
        }
    }
}

// obikalqme po koloni
if (!rowWinner) {
    for (col = 0; col <= seaChess[0].length; col++) {
        if (xCount === 3 || oCount === 3) {
            colWinner = true;
            (xCount > oCount) ? console.log('X Pecheli') : console.log('O Pecheli');
            break;
        }
        xCount = 0;
        oCount = 0;
        for (row = 0; row < seaChess.length; row++) {
            if (seaChess[row][col] === "X") {
                xCount++;
            }
            if (seaChess[row][col] === "O") {
                oCount++;
            }
        }
    }
}

// obikalqme po glaven diagonal
if (rowWinner === false && colWinner === false) {
    for (index = 0; index < seaChess.length; index++) {
        if (seaChess[index][diagCount] === "X") {
            xCount++;
        }
        if (seaChess[index][diagCount] === "O") {
            oCount++;
        }
        diagCount++;
    }
    if (xCount === 3 || oCount === 3) {
        firstDiagonal = true;
    } else {
        xCount = 0;
        oCount = 0;
    }
}

// obikalqme po vtori diagonal
if (!firstDiagonal) {
    for (index = 0; index < seaChess.length; index++) {
        if (seaChess[index][seaChess.length - 1 - index] === "X") {
            xCount++
        }
        if (seaChess[index][seaChess.length - 1 - index] === "O") {
            oCount++
        }
    }
    if (xCount === 3 || oCount === 3) {
        secondDiagonal = true;
    }
}

//output    
if (firstDiagonal) {
    (xCount > oCount) ? console.log('X Pecheli') : console.log('O Pecheli');
}
if (secondDiagonal) {
    (xCount > oCount) ? console.log('X Pecheli') : console.log('O Pecheli');
}
if (rowWinner === false && colWinner === false && firstDiagonal === false && secondDiagonal === false) {
    console.log('TIED');
}