/*
This modular way of writing JavaScript is designed to
compartmentalize the code into different parts so that each
has a single responsibility. In otherwords, it is a way to make it
not-spaghetti
*/

//board function
function GameBoard() {
    let myBoard = [];

    //board is set up as cell 0-9
    for (let i = 0; i < 9; i++) {
        myBoard.push(Cell());
    }

    const getBoard = () => myBoard;

    const addToBoard = (player, cell) => {
        //check if cell is available
        if (myBoard[cell].getValue() === 0) {
            myBoard[cell].addValue(player);
            return true;
        }
        else {
            return false;
        }
    }

    const printThisBoard = () => {
        const myBoardWithValues = myBoard.map((cell) => cell.getValue())
        console.log({ myBoardWithValues });
    }

    const allEqual = arr => arr.every(val => val === arr[0]);

    const checkGameState = () => {
        //winstates contain all win possibilities
        const winstates =
            [[0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]];

        for (let i in winstates) {
            let arr = [];
            for (let j in winstates[i]) {
                arr.push(myBoard[winstates[i][j]].getValue())
            }
            if (arr[0] != 0 && allEqual(arr)) {
                return "win"
            }
        }

        //no more empty cells and no winstate triggered
        const boardValues = myBoard.map(cell => cell.getValue())
        if (!boardValues.includes(0)) {
            return "tie";
        }

        return "continue";
    }

    return {
        getBoard,
        addToBoard,
        printThisBoard,
        checkGameState
    };
}

function Cell() {
    let value = 0;

    const addValue = (player) => value = player;

    const getValue = () => value;

    return { addValue, getValue };
}

function GameController(player1Name, player2Name) {
    const board = GameBoard();
    let gameState = "continue";
    let winner = "";

    const player = [
        { name: player1Name, token: "X" },
        { name: player2Name, token: "O" }];

    let currentPlayer = player[0];

    const getCurrentPlayer = () => currentPlayer;

    const getWinner = () => winner;

    const switchPlayer = () => currentPlayer = (currentPlayer == player[0]) ? player[1] : player[0];

    const printNewRound = () => {
        console.log(`Time for Player ${currentPlayer.name} to play`);
    }

    const playRound = (cell) => {

        if (gameState != "continue") return;

        if (board.addToBoard(getCurrentPlayer().token, cell)) {
            console.log(`Player ${currentPlayer.name} adds ${currentPlayer.token} to cell ${cell}`);

            //check for win condition here, if we win, then print the winner, same for tie
            gameState = board.checkGameState();

            if (gameState == "win") { 
                console.log(`Winner is ${currentPlayer.name}!`)
                winner = currentPlayer.name;
            }
            else if (gameState == "tie") { 
                console.log(`It's a tie!`) 
            }

            switchPlayer();
            printNewRound();
            printGameLook();
        }
        else {
            console.log(`${cell} is occupied`);
        }
    }

    const printGameLook = () => {
        const values = board.getBoard()
        console.log(`${values[0].getValue()} | ${values[1].getValue()} | ${values[2].getValue()}`)
        console.log(`${values[3].getValue()} | ${values[4].getValue()} | ${values[5].getValue()}`)
        console.log(`${values[6].getValue()} | ${values[7].getValue()} | ${values[8].getValue()}`)
    }

    const getGameState = () => gameState;

    //console / debugging only
    printNewRound();
    printGameLook();

    return {
        playRound,
        getBoard: board.getBoard,
        printBoard: board.printThisBoard,
        getGameState,
        getCurrentPlayer,
        getWinner
    }

}


function ScreenController() {
    const game = GameController("X", "O");
    const boardDiv = document.querySelector(".gameboard");
    const playerInfo = document.querySelector(".player-info");
    const restart = document.getElementById("restart-button");

    const updateBoard = () => {
        //get latest board and player
        const board = game.getBoard();
        const currentPlayer = game.getCurrentPlayer();
        const gameState = game.getGameState();
        //console.log(board);
        boardDiv.textContent = "";

        //display win, lose, or which player to play 
        if(gameState == "win" || gameState == "tie"){ 
            //display winners and show restart
             displayWinner(gameState);
             restart.style.visibility = '';
             restart.addEventListener("click", function(){
                location.reload() 
            });
        }
        else 
        {
            playerInfo.textContent = `It's ${currentPlayer.name}'s turn.`
        }

        //wherein we create the board
        board.forEach((cell, index) => {
            //adding buttons, their class, data columns, and value before adding it to the board
            const cellButton = document.createElement('button');
            cellButton.classList.add("cell");
            cellButton.dataset.cell = index;
            cellButton.textContent = cell.getValue() == 0 ? "" : cell.getValue();
            boardDiv.appendChild(cellButton);
        })

    }

    const clickManager = (e) => {
        const selectedCell = e.target.dataset.cell;

        if (!selectedCell) return;

        game.playRound(selectedCell);

        updateBoard();
    }

    const displayWinner = (gameState) =>{
        if(gameState == "win") {
            playerInfo.textContent = `The winner is ${game.getWinner()}`;
        }
        else{
            playerInfo.textContent = `It's a tie!`
        }
    }

    //initializer
    restart.style.visibility = 'hidden'; //restart button initially hidden
    boardDiv.addEventListener("click", clickManager)
    updateBoard();
}

ScreenController();