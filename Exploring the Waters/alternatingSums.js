// Solving this one is really easy, since
// it just needs one iteration over the array
// and the overall time complexity of this
// solution is O(n)

const alternatingSums = function(a) {
    // We have to return array of two
    // numbers representing weights of 
    // two teams.
    let answer = [0,0];

    // Iterating over the array
    for(let i = 0; i<a.length; i++){
        // As it was said in the definition of the problem,
        // odd ones are the first team, and even ones are 
        // the second team. 
        if((i+1)%2 === 0){ // We check this with the help of modulo
            answer[1] += a[i]; // If it is even, add to the second team
        } else {
            answer[0] += a[i]; // If it is odd, add to the first group
        }
    }

    // Don't forget to return it
    return answer;
}