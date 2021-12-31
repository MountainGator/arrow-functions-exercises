// refactor this old code into es2015 standards

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
// solution



const double = arr => arr.map(val => val * 2);

// Replace ALL functions with arrow functions:

function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}

// solution

function squareAndFindEvens(numbers) {
    const squares = numbers.map(num => num ** 2);
    const evens = squares.filter(square => square % 2 === 0);
    return evens;
}