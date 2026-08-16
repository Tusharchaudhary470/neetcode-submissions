class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
       for(let row of board){
        let rowmap = {}
        for(let i = 0; i < row.length; i++){
            if(rowmap[row[i]] !== undefined){
                return false}
            else if(row[i] != "."){
                rowmap[row[i]] = i
            }
        }
    }
    for(let col= 0; col < 9; col++){
        let colsmap = {}
        for(let i = 0; i < 9; i++){
            if(colsmap[board[i][col]] !== undefined){ 
                return false
            }else if(board[i][col] !="."){
                colsmap[board[i][col]] = i
            }
        }
       
    }
     for(let box = 0; box < 9; box++){
        let sRow = Math.floor(box/3) * 3
        let scol = (box % 3) * 3
        let square = {}
        
        for(let r = sRow; r < sRow + 3; r++){
          for(let c = scol; c < scol + 3; c++ ){
            if(square[board[r][c]] !== undefined){return false}
            else if(board[r][c] != "."){
                square[board[r][c]] = `${r},${c}`
            }
          }
        }
     }
    
    return true
    }
}

