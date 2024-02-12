// function declaration
// function expression
// first class function
//anonymous function
// IIFE

//output based questions
//Output and reason
// params vs arguments
// function scopes
//callback function
//arrow functions

//difference between arrow function and regular function
//1. syntax
//2. implicit return keyword (one liner)
//3. arguments keyword (can be used in normal function but not in arrow fn)
//4. this keyword (this points to only a global object in arrow fn)
//5. how constructor is defined in both

(function (x){
    (function (y){
        console.log(x, y)
    })(2)
})(4)

