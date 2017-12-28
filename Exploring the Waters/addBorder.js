// NOTE! The repeat method is new in ES6 and
// now it is supported by all major browsers.
// Instead of this, you can create array of 
// n+1 and perform join("*") to get string
// of n length characters. Time complexity O(n)

const addBorder = function(picture) {
    // Create the strings that are going to be used in the
    // first and last rows of the matrix.
    const stringTopBottom = "*".repeat(picture[0].length+2)
    // Append the top and bottom rows of the border.
    picture.unshift(stringTopBottom);
    picture.push(stringTopBottom);
    // Iterate over the matrix and append "*"
    // to the front and end parts of the matrix
    // rows.
    for(let i=1; i<picture.length-1;i++){
        picture[i] = "*" + picture[i] + "*";
    }
    
    // Return the matrix with border
    return picture;
}