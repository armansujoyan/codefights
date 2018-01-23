// This solution is pretty trivial and uses the principle
// of liner iteration. We iterate over the array and find
// the difference. Time complexity O(n). Space complexity O(1)
function arrayMaximalAdjacentDifference(inputArray) {
    // We will store the maximum difference here
    let maxDiff = -Infinity;
    // Iterate over the array
    inputArray.forEach((item,i)=>{
        // Find the absolute difference of adjacent elements
        let buffDiff = Math.abs(inputArray[i+1] - item)
        // If it is bigger than the current one, make it the
        // current one.
        if(buffDiff  > maxDiff)
            maxDiff = buffDiff
    })
    // Return the reuslt.
    return maxDiff;
}