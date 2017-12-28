// In order to solve this one, we are going to use RegExp.
// You can find additional information about RegExp here 
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp
// Also we are going to use recursion here.

// The main function declaration
function reverseParentheses(s){
    if (s.includes('(')){
        // Check and see if there are any unreversed
        // parts left in the string and make a recursive
        // call. We pass as the argument of recursive call
        // a string where first found part is reversed and
        // processed.
        return reverseParentheses(reverseFound(s));
    } else {
        return s;
    }
}

// A function for reversing the frist found part
const reverseFound = function(found){
    // This is the RegExp for finding any '()' pattern
    let regexp = /\(([^()]*)\)/i;
    // We then use the RegExp to find the pattern and
    // get what's inside '()' this brackets.
    let chosen = regexp.exec(found)[1];
    // Simple way to reverse a string
    chosen = chosen.split('').reverse().join('');
    // Finally, we find and replace the substrings
    // that match '()' pattern with reversed string
    // and return it.
    return found.replace(regexp, chosen);
}