const printName = (name) => {
    let currTime = new Date;
    console.log(name, " time", Date.now())
}
let lastInvokedAt = 0;
 
const throttleFunc = (func, delay) => {
    return (...args)=>{
        let currTime = new Date;
        if(currTime - lastInvokedAt > delay){
            func(...args);
            lastInvokedAt = currTime;
        }
    }
}

let throttledFunction = throttleFunc(printName, 1000);
throttledFunction("Shivesh");
throttledFunction("Shivesh");
throttledFunction("Shivesh");
throttledFunction("Shivesh");
throttledFunction("Shivesh");
throttledFunction("Shivesh");
throttledFunction("Shivesh");
throttledFunction("Shivesh");
throttledFunction("Shivesh");
throttledFunction("Shivesh");
throttledFunction("Shivesh");
throttledFunction("Shivesh");
throttledFunction("Shivesh");
throttledFunction("Shivesh");
throttledFunction("Shivesh");

setTimeout(()=>throttledFunction("Sanu"), 1200)