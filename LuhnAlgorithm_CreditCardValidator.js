/* LuhnAlgorithm_CreditCardValidator */

/*

 The Luhn Algorithm, which is used to help validate credit card numbers.

Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

*/

function validate(n){
  n = n.toString().split('');
  var result = []
    , num = ''
    , start = n.length % 2 === 0 ? 0 : 1;
  
  for (var i = start; i < n.length; i++){
    num = i % 2 === 0 ? n[i]*2 : n[i]*1;
    num = num > 9 ? num - 9 : num;
    result.push(num);
  } 
  
  return !result.length ? false 
        : result.reduce(function(a,b){ return a+b; }) % 10 === 0;
}