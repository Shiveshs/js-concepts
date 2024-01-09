//Create an Iterator


//write code here

// ques3
let iter1 = new Iterator(["7","8","9"]);

while(iter1.nextValue()) {
    let final;
    val = iter1.next()
    final += ","+val
}


//ques1
remove_item([7,8,9]) // [9]
remove_item([7,8,9], -1) // [9]
remove_item([7,8,9], -2) // [8,9]


//

let greet = {
    name: "cat",
    sayHello: ()=>{
        console.log(this.name)
    }
}

let sayHello = greet.sayHello;
sayHello()


// The below code snippet return hey steve. I want that to return hey frd

function person (pers){
if(pers == {name: "fred"}){
    return "hey fred"
}
else
return "hey steve"
}

console.log(person({name:"fred"}))








_________________________________________


 //spread,function sayHi() {
      var phrase; 

      alert(phrase);
    
      phrase = "Hello";
    }
    
    sayHi(); //
    
    // ------------------------
    
    var a = 2; //global scope
    foo();  //3
        
    
    function foo() {
        a = 3;
        console.log(a);  // 3
        var a; //undefined  //functional scope        
                              
    }
    console.log(a); //2
    
    // ------------
    
    console.log("Start");  //start
    
    setTimeout(() => {
        console.log("Inside setTimeout"); //callback  //callback queue - ()=> {conso...} //2 sec
    }, 2000);
    
    console.log("End"); //End  */
    
    //Inside setTimeout
    
    //-------------------- */
    
     function factorial(value) {
    let fact = 1;
    if(value < 0)
      return -1;
    
    else if(value === 0 || value ===1){
      return 1
    }
    else {
      return factorial(value-1)
    }
    }
    
    console.log("factorial", factorial(5)); 
    
     //approach 1
    fetch("https://jsfiddle.net/#&togetherjs=4LpnHjOdqz")
    .then((data)=>data.json)
    .then((finalData)=>console.log(finalData))
    .catch((err)=>console.log("Data not found"))
    .finally(()=>console.log("the data is either fetched or error has happened"))
    
    //approach 2
    
    const fetchData = async () => {
      try {
      const data = await fetch("https://jsfiddle.net/#&togetherjs=4LpnHjOdqz");
      console.log(data)
      }
      catch {
        console.log("Data not found");
      }
    } 
    
    
    const obj = {
      name: "shivesh",
      org: "mphasis",
      "address": {
        "adr1": "some address",
        "adr2": "some address 2"
      }
    }
    
    const obj2 = obj;
    
    obj2.name = "shandilya";
    
    // obj1.name
    
    const obj3 = {
      ...obj
    };
    
    obj3.name = "Robert";
    
    console.log(obj)
    console.log(obj3)
    
    //spread
    //rest
    //destructing
    //arrow
    
    
    //Mounting
    //constructor()
    // getderivedStateFromProps()
    // render()
    //componentDidmount 
    
    
    //Updation
    //getDerivedStateFromProps()
    // getSnapshotBeforeUpdate()
    // render()
    //componentDidUpdate()
    
    //unmounting
    //componentWillUnmount()
    
    
     useEffect ( ()=> {
      ()=>{
      
      }
    }, []) 
    
    
    
    
    
    import {browserRouter, Routes, Route} from react-router-DOM;
    import Home from "./home"
    
    const App = () => {
      
      <Routes>
        <Route path="home" component="<Home/>"></Route>
      </Routes>
    }
    
    
    
    //_______________________________________
    
    index.js
    
    @storybook/addon-actions
    
    
    // parent  --- 
    daplay: flex
    align-items : center //vertically
    justify-content: center // horizontally
      child 1
      child 2
      child 3 */
    
    // position
    
    //static
    //relative
    
    <div class="parent">
      <div class="child">Child</div>
    </div>
    
    
    .child {
    position: "absolute"
    bottom: "100px"
    right: "100px"
    } 
    
    
    @media(max-width:600px ):{
        background: "blue"
    }
    