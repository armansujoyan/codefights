// We will just iterate over the given array
// and find the numbers that don't make stict-
// ly increasing sequence with others and fix
// them. The overall Timae Complexity of the 
// solution is O(n). Space complexity is O(1).
const arrayChange = function(inputArray) {
    // We will store the answer here
    let answer = 0;

    // Simply iterate over the array
    for( let i = 1; i<=inputArray.length; i++){
        // Check if the array is distorting the order or not
        if(inputArray[i] <= inputArray[i-1]){
            // Find the Absolute difference between the distorting
            // number, increment by one to get strictly increasing
            // sequence and add to answer.
            answer += Math.abs(inputArray[i-1]- inputArray[i]) + 1;
            // **Fix the array to make it increaseing (**extra) 
            inputArray[i] = inputArray[i-1] + 1;
        }
    }

    // Return the answer
    return answer;
}