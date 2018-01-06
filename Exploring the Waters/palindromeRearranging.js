// The string is able to become palindrome, iff
// there are no more than on odd characters in.
const palindromeRearranging = function(inputString) {
    // We create this array for counting how many times
    // the characters occured in the string.
    let count = new Array(26).fill(0);
    // Simple counter for odd numbers.
    let oddCount = 0;
    
    // Count the number of elements occurences
    for(let i = 0; i < inputString.length; i++) {
        // Again using the ASCII Hex number for
        // mapping the character to counter cell
        let charCode = inputString.charCodeAt(i);
        // Increment the counter.
        count[charCode-97]++;
    }
    
    // Count the number of odd occurencies
    for(let j = 0; j < count.length; j++) {
      if(count[j] % 2 !== 0){
        oddCount++;
      }
    }
    
    // Return this boolean expression.
    return oddCount <= 1;
  }