function almostIncreasingSequence(sequence) {
    // We keep this variable to see if we have already removed one
    // element from the list or not.
    let found = false;
    // Start iterating over the sequence
    for (var i=0;i<sequence.length;i++) {
        if(sequence[i] <= sequence[i-1]) {
            // If we already removed one elemnt, terminate
            if(found){
                return false;
            }
            // Else, set the flag for removed element
            found = true;
            
            if(i === 1 || i + 1 === sequence.length) {
                continue;
            }
            else if (sequence[i] > sequence[i-2]) {
                // If one of the elements is greater then the pre-previous
                // change the place of the element and make it ordered
                sequence[i-1] = sequence[i-2];
            }
            else if(sequence[i-1] >= sequence[i+1]) {
                return false;
            }
        }
    }
    return true;
}