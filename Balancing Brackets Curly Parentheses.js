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

function check_anagrams(first_words, second_words) {
    var results = {}, final = 1, fResult = [];
    
    for (var i = 0; i < first_words.length; i++){
        
        for (var j = 0; j < first_words[i].length; j++){
            if( !results.hasOwnProperty(first_words[i][j]) ){
                results[first_words[i][j]] = 1;
            } else {
                results[first_words[i][j]] += 1;
            }
        }
        
        for (var k = 0; k < second_words[i].length; k++){
            if( !results.hasOwnProperty(second_words[i][k]) ){
                results[second_words[i][k]] = 1;
            } else {
                results[second_words[i][k]] += 1;
            }
        }
        
        for (var prop in results){
            if(results[prop] % 2 !== 0){
                final = 0;
            }
        }
        
        fResult.push(final);
        final = 1;
        results = {};
        
    }
    
    for (var x = 0; x < fResult.length; x++){
        console.log(fResult[x]);
    }
}