// In this solution we are going to use
// some simple mathematical principles.
// The Time Complexity of the solution is O(n)

const areSimilar = function (a, b) {
    // A counter for elements that are not the same
    // in the same indexes of two arrays.
    let divergeCounter = 0;
    // This one is used for storing sum of diverging
    // items. if we have 4 numbers that are the same
    // then (a+b)-(b+a)=0. The meaning of this is, that
    // the sum of first two is the same as the sum
    // of the last two elements.
    let sameSum = 0;
    
    // Iterate over the array of elements
    for(let i = 0; i<a.length; i++){
        // Check if the values of indexes are the same
        if(a[i] !== b[i]){
            // If we already found one diverging element,
            // subtract from the sum in order to get 0 if
            // the items had same value.
            if(divergeCounter === 1)
                sameSum -= a[i] + b[i];
            // If this is the first divergent element, then
            // we are going to add the sum of elemnts
            else if(divergeCounter === 0) 
                sameSum += a[i] + b[i];
            // Increment divergence counter
            divergeCounter++;
        }
    }
    
    // Check if there are no more than 2 divergent elements
    // and if they are the same, and return the boolean value
    return divergeCounter <= 2 && sameSum === 0;
}