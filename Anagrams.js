/*  Anagrams

Two words are considered anagrams if by rearranging the letters of the first word we get the second word. For instance cinema and iceman are anagrams.
Given a list of word pairs
Your task is to
write a function that determines for each pair if it’s an anagram or not
for each pair of words your function will print to standard output (stdout) the value 1 if the pair is an anagram or 0 otherwise (one result per line)
Note that your function will receive the following arguments:
firstWords
which is an array of strings giving the first word for each of the pairs
secondWords
which is an array of strings giving the corresponding second word
Data constraints
the number of word pairs will not exceed 100
the maximum length of any word in the pairs will not exceed 100 characters
all words will contain only lowercase English letters (a-z)
Efficiency constraints
your function is expected to print the result in less than 2 seconds

Example

Input:
firstWords: “cinema”, “host”, “aba”, “train”
secondWords: “iceman”, “shot”, “bab”, “rain”

Output:
1
1
0
0
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