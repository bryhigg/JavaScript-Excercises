// Make your changes to store and update game state in this file
let board = 
[[null,null,null], 
[null,null,null], 
[null,null,null]]

let record = [[0,0,0], [0,0,0], [0, 0, 0]]

let counter = 0
let nought = "nought"
let cross = "cross"
// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
    console.log("takeTurn was called with row: "+row+", column:"+column);
    if(board[row][column] != null){
        console.log("ILLEGAL MOVE, TRY AGAIN")
    }
    else{
        if(counter % 2 == 0){
            board[row][column] = nought
            record[row][column] = -1
            counter++
        }
        else{
            board[row][column] = cross
            record[row][column] = 1
            counter++
        }
    }

}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    
    let winCheck = 0
    let noughtCount = 0
    let crossCount = 0

    for(i = 0; i < board.length; i++){
        for(j = 0; j < board[i].length; j++){
            if(board[i][j] == "nought"){
                noughtCount += 1
                console.log("NOUGHT COUNT");
            }
            else if(board[i][j] == "cross"){
                crossCount += 1
            }
            if(noughtCount == 3){
                return "noughts"
            }
            else if(crossCount == 3){
                return "crosses"
            }
           
        }
        noughtCount = 0
        crossCount = 0
    }

    if(board[0][0] == "nought" && board[1][1] == "nought" && board[2][2] == "nought" ){
        return "noughts"
    }
    else if(board[0][0] == "cross" && board[1][1] == "cross" && board[2][2] == "cross"){
        return "crosses"
    }

    if(board[0][2] == "nought" && board[1][1] == "nought" && board[2][0] == "nought" ){
        return "noughts"
    }
    else if(board[0][2] == "cross" && board[1][1] == "cross" && board[2][0] == "cross"){
        return "crosses"
    }
    
    noughtCount = 0
    crossCount = 0
    let colCount = 0

    for(i=0; i < 3; i++){
        for(j = 0; j < 3; j++){
            if(board[j][colCount] == "nought"){
                noughtCount += 1
            }
            else if(board[j][colCount] == "cross"){
                crossCount += 1
            }
            if(noughtCount == 3){
                return "noughts"
            }
            else if(crossCount == 3){
                return "crosses"
            }

        } 
        noughtCount = 0
        crossCount = 0
        colCount += 1
    }

    if(counter == 9){
        counter = 0
        return "nobody"
    }
}

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    counter = 0
    board = [[null,null,null], 
    [null,null,null], 
    [null,null,null]]
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
