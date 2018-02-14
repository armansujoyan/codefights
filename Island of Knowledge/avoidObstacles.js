// In order to solve this problem we will use greedy
// algorithm, which is iterating over the input and
// checking validitiy for each element. Overall worst
// case complexity if O(n^2).
const avoidObstacles = function(inputArray) {
    let j = 2; // We will start checking from 2, as
    // there is no meaning to check for 1.
    while(true){
        let count = 0; // Store obstacles that will be hitted here
        for(let i = 0; i < inputArray.length; i++){
            if(inputArray[i]%j === 0){
                // Check if the current step has any obstacles on their way
                count++;
            }
        }
        if(count === 0)
            // If there are no obstacles in our way, return
            return j;
        // Otherwise, carry on incrementing our step counter.
        j++;
    }
}