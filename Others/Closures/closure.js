//Closures

// A closure can be defined as a function having access to it's parent's scope even after the parent function is closed.
// A closure is formed during the phase of function definition.
// not when the function is called
//example:

let globalVar = 20;

const outer = () => {
  let outerVar = 10; //private variable

  const inner = () => {
    console.log((globalVar += 2));
    console.log((outerVar += 2));
  };
  return inner;
};

const parent = outer();
console.log(parent);
parent();
// parent();
// parent();
// console.log(globalVar);
// console.log(outerVar);  //Can not access private variable

//____________________________________________________________________________

//IIFE: Immediately Invoked Function Expressions
//Closures with IIFE

const privateCounter = (() => {
  let initialCount = 0; //private variable
  console.log("initial count is: ", initialCount);
  return () => {
    initialCount+=1
    console.log("incremented count is:", initialCount);
  };
})();

privateCounter()
privateCounter()
privateCounter()

// Here the private Counter is an IIFE and is called immediately.
//After that, whenever privateCounter() fn is called, the anonymous fn is called
//which then increments the value

//______________________________________________________________________________

//another example of IIFE with value passed

const playCreditGame = ((initialCredits)=>{
    let credits = initialCredits;
    console.log(`initial credits value: ${credits}`)
    return () => {
        credits -= 1;
        if(credits > 0) console.log(`playing game again. ${credits} credits remain`)
        else console.log(`No credits remain. signing off`)
    }
})(5)


playCreditGame();
playCreditGame();
playCreditGame();
playCreditGame();
playCreditGame();
playCreditGame();
playCreditGame();

//IIFE with a closure to count after a certain time using settimeout and var keyword

// const a = ((limit)=>{
//     for(var i = 0; i<=limit; i++) {
//         //another IIFE closure inside which setTimeout resides
//         ((i)=>{
//             setTimeout(()=>console.log(i), i*1000)
//         })(i)
        
//     }
// })(8)

//_______________________________________________________

// function createBase(base) {
//   return function (val){
//     console.log(val+base)
//   }
// }

// var addSix = createBase(6);
// addSix(10);

function outerF(outer) {
  return function innerF(inner){
    return inner+outer
  }
}

let addSix = outerF(1);
console.log(addSix(10))
console.log(addSix(18))