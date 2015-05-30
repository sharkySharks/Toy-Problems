/*
Sudoku Checker
Given a full sudoku board, return "solved" if the board is solved, or "invalid" if the board is invalid.

(!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. In other words, when you see a break, it's actually a
\n
character. Check your console when submitting to see the input for yourself.

Examples

Input            Output

boardStr:

735814296
896275314
214963857
589427163
362189745        solved
471356982
923541678
648792531
157638429        

boardStr:

111111111
222222222
333333333
444444444
555555555        invalid
666666666
777777777
888888888
999999999        

*/


function sudokuCheck(boardStr){
    var board = boardStr.split("\n");
    var sudoku = "solved";
    var options = ["1","2","3","4","5","6","7","8","9"];
    
    var checker = function(string){
       return (string.map(function(y){
            for(var i = 0; i < options.length; i++){
                if ( !~y.indexOf(options[i]) ){
                    return false;
                }
            }
        })).every(function(val){ return val === undefined; })
    }
    
    var rowsCheck = checker(board);

    var colsCheck = (function(){
        var cols = [];
        for(var i = 0; i < board.length; i++){
            var temp = [];
            for(var k = 0; k < board.length; k++){
                temp.push(board[k][i]);
            }
            cols.push(temp);
        }
            
        return checker(cols);
        
    })();

    var gridsCheck = (function(){
        var grids = [];
        for (var i = 0; i < board.length; i+=3){
            var zee = board[i].slice(0,3) + 
                      board[i+1].slice(0,3) + 
                      board[i+2].slice(0,3);
            var eff = board[i].slice(3,6) + 
                      board[i+1].slice(3,6) + 
                      board[i+2].slice(3,6);
            var jay = board[i].slice(6,9) + 
                      board[i+1].slice(6,9) + 
                      board[i+2].slice(6,9);

            grids.push(zee, eff, jay);
        }

        return checker(grids);
    })();
   
    return rowsCheck && colsCheck && gridsCheck ? sudoku : "invalid";
};

