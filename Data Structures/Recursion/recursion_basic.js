// const number = document.getElementById("getNumber").ariaValueMax;
// let result;
const findFactorialHandler = (number) => {
    if(number==0)
    return 1;
 return number * findFactorialHandler(number-1);
}  

console.log(findFactorialHandler(5))

// const showResult = document.getElementById("showResult");
// showResult.innerText = result;


