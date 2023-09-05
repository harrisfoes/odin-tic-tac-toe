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
    for(let i = 0 ; i < 9; i++){
        myBoard.push(Cell());
    } 

    const getBoard = () => myBoard;

    const addToBoard = (player, cell) => {

        //check if cell is available
        if(myBoard[cell].getValue() === 0){
            myBoard[cell].addValue(player);
        }
        else{
            return;
        }
    }

    const printThisBoard = () => {
        const myBoardWithValues = myBoard.map((cell) => cell.getValue())
        console.log({myBoardWithValues});
    }

    return{getBoard, addToBoard, printThisBoard};
}

function Cell() {
    let value = 0;

    const addValue = (player) => value = player;

    const getValue = () => value;

    return {addValue, getValue};
}

function GameController( player1Name, player2Name ){
    const board = GameBoard();

    const player = [
        {name: player1Name, token:O},
        {name: player2Name, token:X}];

    const currentPlayer = player[0];

    const getActivePlayer = () => currentPlayer;


}
