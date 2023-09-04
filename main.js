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

    /*
    let myBoard = ["","","","","","","","",""];
    let player = 1; // only two values 1 and 2
    const gameBoard = document.querySelector('.gameboard');
    */
    const init = () => {

    }

    const draw = () => {

    }

    const update = () => {

    }

    return { init, draw, update };
}


let myBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = 1; // only two values 1 and 2
let gameStatus = "waiting to start";

const gameBoard = document.querySelector('.gameboard');
const msg = document.querySelector('.player-info');
const start = document.getElementById('start-button');

const placeMarker = (currentPlayer) => {
    const circleMarker = `<svg xmlns="http://www.w3.org/2000/svg" height="120" viewBox="0 -960 960 960" width="120">
                    <path d="M479.679-59q-86.319 0-163.646-32.604-77.328-32.603-134.577-89.852-57.249-57.249-89.852-134.57Q59-393.346 59-479.862q0-87.41 32.662-164.275 32.663-76.865 90.203-134.412 57.54-57.547 134.411-90.499Q393.147-902 479.336-902q87.55 0 164.885 32.858 77.334 32.858 134.56 90.257 57.225 57.399 90.222 134.514Q902-567.257 902-479.458q0 86.734-32.952 163.382-32.952 76.648-90.499 134.2-57.547 57.551-134.421 90.214Q567.255-59 479.679-59Zm.092-91q136.742 0 233.485-96.387Q810-342.773 810-479.771q0-136.742-96.515-233.485Q616.971-810 479.729-810q-136.242 0-232.985 96.515Q150-616.971 150-479.729q0 136.242 96.387 232.985Q342.773-150 479.771-150ZM480-480Z" /></svg>`;
    const xMarker = `<svg xmlns="http://www.w3.org/2000/svg" height="120" viewBox="0 -960 960 960" width="120">
                <path d="m249-186-63-63 231-231-231-230 63-64 231 230 231-230 63 64-230 230 230 231-63 63-231-230-231 230Z" /></svg>`;
    return (currentPlayer === 1) ? circleMarker : xMarker;
}

const alternatePlayer = (currentPlayer) => {
    return (currentPlayer === 1) ? 2 : 1
}

const updateMyBoard = (clickedCell) => {

    if (myBoard[clickedCell] == "") {
        console.log(myBoard[clickedCell]);
        myBoard[clickedCell] = currentPlayer;
        return true;
    } else {
        return false;
    }
}

const updatePlayerMsg = (currentPlayer) => {
    return `It's Player ${currentPlayer}'s turn.`
}

const allEqual = arr => arr.every(val => val === arr[0]);

const checkWinState = (myBoard) => {

    //winstates contain all win possibilities
    const winstates =
        [[0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]];

    for (let i in winstates) {
        let arr = [];

        console.log(winstates[i]);

        for (let j in winstates[i]) {
            arr.push(myBoard[winstates[i][j]])
            console.log(arr);
        }

        if (arr[0] != "" && allEqual(arr)) {
            return "win"
        }
    }

    //no more empty cells and no winstate triggered
    if (!myBoard.includes("")) {
        return "tie";
    }

    return "continue";
}

function endGame() {
    myBoard = [];
    gameBoard.removeEventListener("click");
}

function startGame() {
    console.log("yo");
    gameBoard.addEventListener("click", function (event) {

        console.log(event.target);

        const clickedCell = event.target.dataset.cell;
        console.log(clickedCell);

        //put marker in the thing
        if (updateMyBoard(clickedCell)) {

            console.log(myBoard);
            event.target.innerHTML = placeMarker(currentPlayer);

            //gamestatus, continue, win or tie
            gameStatus = checkWinState(myBoard);
            console.log(gameStatus);

            if (gameStatus == "win") {
                msg.innerHTML = `Our winner is ${currentPlayer}`
                endGame();
            }
            else if (gameStatus == "continue") {
                currentPlayer = alternatePlayer(currentPlayer);
                msg.innerHTML = updatePlayerMsg(currentPlayer);
            }
            else if (gameStatus == "tie") {
                msg.innerHTML = `The game is a tie!`
                endGame();
            }
        }
    });
}



start.addEventListener("click", startGame);