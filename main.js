/*
#algorithm 

[x] gameboard
start at player 1
when player clicks, that cell is tagged with the symbol
save that symbol to the 2d array (rows / cols)
next player 
player clicks, that cell is tagged with the symbol
cell must be empty
repeat until there is a winner or a draw
    declare who's the winner
    or declare that there's a draw
button appears 
*/
const Game = () => {

    //gameboard starts empty full of 0
    //vlaue will be 1 or two corresponding to player

    let myBoard = [[0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]];
    let player = 1; // only two values 1 and 2

    const gameBoard = document.querySelector('.gameboard');

    const init = () => {
        myBoard = [];
        player = 1;

        console.log(init);

        gameBoard.addEventListener("click", function (event) {
            console.log(event.target);
            console.log('kore wa game boardo desu ne');
        }, once);
        
    }

    const draw = () => {

    }

    const update = () => {

    }

    return { init, draw, update };
}

