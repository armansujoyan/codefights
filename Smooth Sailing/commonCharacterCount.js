const commonCharacterCount = function(s1, s2) {
    // Here we will store the amount of characters
    // in the first string, using the indexing method,
    // where the index of the array is n-th letter in
    // alphabet and the value of index is number or letters.
    // Also we will prefill them all with 0.
    let letterMatrix1 = new Array(26).fill(0);
    let answer = 0;
    
    // Find number of letters in the first string and
    // save them in the array that we have created at
    // the beginning
    for(let i = 0; i < s1.length; i++){
        letterMatrix1[s1.charCodeAt(i)-97] += 1;
    }
    
    // Iterate over the second string and if the 
    // letter is present in the first string, i.e.
    // the index of that letter in the array is not 0,
    // increment answer and decrement the value of array's
    // index. 
    for(let j = 0; j < s2.length; j++){
        if(letterMatrix1[s2.charCodeAt(j)-97] > 0){
            letterMatrix1[s2.charCodeAt(j)-97] = 
                letterMatrix1[s2.charCodeAt(j)-97] - 1;
            answer += 1;
        }
    }
    
    // Return the answer
    // Total time complexity is O(n) and space complexity
    // is O(26) or O(1)
    return answer;
}