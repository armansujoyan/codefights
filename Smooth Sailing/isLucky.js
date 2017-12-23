const isLucky = function(n) {
    // We store total sum, half sum and initial length
    let totalSum = 0;
    let halfSum = 0;
    const initLength = n.toString().length;
    
    // We will loop till the length of the nubmer
    // is greater the one
    while(n.toString().length > 1){
        // Here we take the last digit of the number
        let buff = n%10;
        // We then take away the last digit of the number
        n = Math.floor(n/10);
        // Add the digit to the total sum
        totalSum+=buff;
        // If we reach the middle, we assign total sum to 
        // half sum, as it is half sum;
        if(n.toString().length === initLength/2)
            halfSum = totalSum;
    }
    
    // Then we add the remaining digit
    totalSum += n;
    
    // Return the boolean value of comparison
    // The time complexity of this is O(n)
    return (totalSum-halfSum) === halfSum;
}