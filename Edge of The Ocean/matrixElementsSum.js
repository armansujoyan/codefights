function matrixElementsSum(matrix) {
    // We will keep the sum and coordinates of 
    // free rooms.
    let sum = 0;
    let haunted = [];

    // Find the sum of ALL elements in the matrix,
    // zeros included, and push free room coordinates
    // to the array
    for (let [index, floor] of matrix.entries()){
        for (let [index2, room] of floor.entries()){
            if(room === 0){
                haunted.push({floor: index, room: index2});
            }
            sum += room;
        }
    }
    
    // Iterate over the free room coordinates and remove
    // "extra" sum from overall sum.
    for(let haunt of haunted){
    		let counter = haunt.floor;
    		while(counter < matrix.length){
                sum -= matrix[counter][haunt.room];
                // Set the found col items to 0, in order
                // to avoid subtracing them twice
                matrix[counter][haunt.room] = 0;
            counter++;
        }
    }
    return sum;
}