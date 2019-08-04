export const canMoveUp = board => {
    for (let x = 0; x < 4; x++){
        for (let y = 1; y < 4; y++){
            if (board[x][y] !== 0) {
                if (board[x][y - 1] === 0 || board[x][y] === board[x][y - 1]){
                    return true
                }
            }
        }
    }
    return false
}

export const canMoveDown = board => {
    for (let x = 0; x < 4; x++){
        for (let y = 2; y >= 0; y--){
            if (board[x][y] !== 0) {
                if (board[x][y + 1] === 0 || board[x][y] === board[x][y + 1]){
                    return true
                }
            }
        }
    }
    return false
}

export const canMoveLeft = board => {
    for (let y = 0; y < 4; y++){
        for (let x = 1; x < 4; x++){
            if (board[x][y] !== 0) {
                if (board[x - 1][y] === 0 || board[x][y] === board[x - 1][y]){
                    return true
                }
            }
        }
    }
    return false
}

export const canMoveRight = board => {
    for (let y = 0; y < 4; y++){
        for (let x = 2; x >= 0; x--){
            if (board[x][y] !== 0) {
                if (board[x + 1][y] === 0 || board[x][y] === board[x + 1][y]){
                    return true
                }
            }
        }
    }
    return false
}

export const clearShotHoriz = (row, lowX, highX, board) => {
    for (let x = lowX + 1; x < highX; x++){
        debugger
        if (board[x][row] !== 0 && board[x][row] !== board[highX][row]){
            return false
        }
    }
    return true
}

export const clearShotVert = (col, lowY, highY, board) => {
    for (let y = lowY + 1; y < highY; y++){
        debugger
        if (board[col][y] !== 0 && board[col][y] !== board[col][highY]){
            return false
        }
    }
    return true
}