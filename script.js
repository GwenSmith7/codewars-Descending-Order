'use strict';

function descendingOrder(n) {
  // first make sure it's greater than 1 digit, if not, return the digit
  if (n >= 10) {
    // if it is greater than 1 digit create a new array separating into single digits from the argument
    let splitChars = Array.from(n.toString()).map(Number);

    // sort the new array
    splitChars = splitChars.sort((a, b) => b - a);

    // join it back together into one element and then change from string to number
    return Number(splitChars.join(''));

    console.log(splitChars);
  } else {
    return n;
  }
}

// This probably needs to be refactored but it works
