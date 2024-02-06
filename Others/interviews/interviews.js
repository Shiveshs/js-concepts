// //Create an Iterator


// //write code here

// function

// // ques3
// let iter1 = new Iterator(["7","8","9"]);

// while(iter1.nextValue()) {
//     let final;
//     val = iter1.next()
//     final += ","+val
// }



// //ques1
// remove_item([7,8,9]) // [9]
// remove_item([7,8,9], -1) // [9]
// remove_item([7,8,9], -2) // [8,9]


// //

// let greet = {
//     name: "cat",
//     sayHello: ()=>{
//         console.log(this.name)
//     }
// }

// let sayHello = greet.sayHello;
// sayHello()


// // The below code snippet return hey steve. I want that to return hey frd

// function person (pers){
// if(pers == {name: "fred"}){
//     return "hey fred"
// }
// else
// return "hey steve"
// }

// console.log(person({name:"fred"}))








// _________________________________________


//What is the output of the given code snippet?

//  function sayHi() {
//     var phrase; 

//     alert(phrase);
    
//     phrase = "Hello";
//     }
    
//     sayHi();
    
// ------------------------

    
    // var a = 2; 
    // foo();  
    //     
    
    // function foo() {
    //     a = 3;
    //     console.log(a); 
    //     var a; 
    //                           
    // }
    // console.log(a); 
    
// --------------------------
    
    // console.log("Start");  
    
    // setTimeout(() => {
    //     console.log("Inside setTimeout");
    // }, 2000);
    
    // console.log("End"); 
    
    
//-------------------- */

  // What are generator functions in JS?
    
    //What is recursion in JS? Can you write a function to get factorial of a number using recursion?
    
    // What are the different approaches to complete async operations, say fetching some data? 


    //How do you handle errors in each case?

    // When would you use promise chaining and when will you use async await? (follow up questions on the code)
    
    // What is finally keyword?
    // what is shallow copying and Deep Copying in JS?

    // What are some ways to achieve Deep Copy of a nested object in JS?
    
    // Mention Different ES6 features introduced in JS.
    
    // Explain the lifecycle of a component in react. Cna you mention the life cycle methods used in class based approach?
    
    // How to implement componentWillUnmount in functional component using hooks?

    //What happens if no dependency array is provided in useEffect? 
    
    // can you write a basic skeleton of how would you use react-router in you app? You can use multiple components to demonstrate.
    
    
    // what is @storybook/addon-actions ? Why do we use it? Give me some usecase.
    
    
    // What is flexbox? How do you make an element in center using flex?
    
    // What are different types of positions in css. give examples and explain the differences
    
// How would you write a css code for responsive web App, such that a particular color is being applied only for screen size less than 600 px
    
// ______________________________________________________________________________________________________________

//Write a function to return a deep copy of an object

function createDeepCopy(obj) {
    let newObj = {}
        newObj =  JSON.parse(JSON.stringify(obj));
        return newObj;
    
}

let obj = {
    name: "shivesh",
    level1: {
        level2: {
            name: "level2",
            level3: {
                name: "level3"
            }
        }
    }
}



let newObj = {...obj};

console.log("obj", obj);
console.log("newObj", newObj);

// newObj.level1.level2.level3.name = "new Level 3";

// console.log("obj", obj);
// console.log("newObj", newObj);

let deepCopiedObject = createDeepCopy(obj);

deepCopiedObject.level1.level2.level3.name = "new deep level change";

console.log("deepCopy", obj, "new Object", deepCopiedObject);

//____________________________________________________________________________________________

//mask the email optimise this solution

//shivesh@gmail.com
//s*****h@g***l.com

let str = "shivesh.shandilya@outlook.com";

const maskStr = (str) => {
let arrVal = str.split("");
let finalArr = [];
  for(let i=0; i<str.length ; i++){
  	if(i===0 || i=== str.length-1){
     finalArr.push(str[i]);
    }
    else finalArr.push("*");
  }
  
  return finalArr.join("");
}

const maskedMail = (str) => {
    let initialSplittedString = str.split("@");
  let finalSplit = initialSplittedString[1].split(".");
  let first = maskStr(initialSplittedString[0]);
  let second = maskStr(finalSplit[0]);
return first + "@" + second + "." +   finalSplit[1]
}

console.log(maskedMail(str))