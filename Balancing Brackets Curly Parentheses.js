/* Balancing Brackets, Curly Braces, and Parentheses

Check if the brackets, curly braces and parentheses are balanced


Example
Input:
[")(){}", "[]({})", "([])", "{()[]}", "([)]"]

Output:
0
1
1
1
0

*/

/* IN PROGRESS: example from above is outputting 0 1 1 1 1 
   Need to store position of braces to reference incorrect balance position
*/

function check_braces(expressions) {
    var outers = 0, fResults = [];
    
    for (var i = 0; i < expressions.length; i++){
        for (var j = 0; j < expressions[i].length; j++){
            if( expressions[i][j] === ")" || expressions[i][j] === "}" || expressions[i][j] === "]" ){
                outers+=1;
            } else {
                outers-=1;
            }
        }
        
        if(outers < 0 || outers % 2 !==0){
            fResults.push(0);
        } else {
            fResults.push(1);
        }
        outers = 0;
    }
    
    for (var k = 0; k < fResults.length; k++){
        console.log(fResults[k]);
    }
    
}