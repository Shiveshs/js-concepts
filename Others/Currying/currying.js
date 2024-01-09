// Currying in JS

function multiple(multiple) {
  function multiply(val) {
    return multiple * val;
  }
  return multiply;
}

const double = multiple(2);

console.log(double(2), " ", double(4));

const tripple = multiple(3)(8);
console.log(tripple);


// more examples to do
//Create a function which creates a crried function of any function