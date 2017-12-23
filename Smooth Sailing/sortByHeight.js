const sortByHeight = function(a) {
    // We will filter the humans from the
    // overal array
    let humanArray = [];
    
    // Filter humans from the overal array
    for(let i = 0; i<a.length ; i++){
        if(a[i] != -1)
            humanArray.push(a[i]);
    }
    
    // Sort humans in ascending order
    humanArray.sort(function(a,b){
        return a - b;
    });
    
    // Insert the sorted array items
    for(let i = 0; i<a.length ; i++){
        if(a[i] != -1){
            // Insert item into array and
            // remove the item from sorted array
            a[i] = humanArray[0];
            humanArray.shift();            
        }
    }
    
    // Return the sorted array
    // The time complexity is O(n*logn)
    return a;
}