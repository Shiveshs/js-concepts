//This

// function Car(type, speed) {
//     this.type = type;
//     this.speed = speed
// };

// function setBrand(brand) {
//     Car.call(this, "sports", 500);
//     this.brand = brand;
//     console.log("Car Details:" , this)
// }

// const newBrand = new setBrand("Mercedes")

const name1 = {
  firstName: "shivesh",
  lastName: "shandilya",
};

function printName(place, country) {
  // parameters of function
  console.log(
    this.firstName + " " + this.lastName + " from " + place + " , " + country
  );
}

printName.call(name1, "Buxar", "India");

const name2 = {
  firstName: "Alan",
  lastName: "Rodrigez",
};

const name3 = {
  firstName: "Elvan",
  lastName: "Cooper",
};

printName.call(name2, "Dublin", "Ireland"); // arguments of function

printName.apply(name3, ["Mexico", "New Mexico"]);

//Bind

// Bind doesn't call the function or invokes the function right away
// Bind returns another function which we can call later

let newPrintname = printName.bind(name1, "Dublin", "Ireland");
console.log(newPrintname);
newPrintname();

//__________________________________ Polyfill of bind

Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  console.log("obj", obj);
  return function (...args2) {
    let finalParams = params.concat(args2);
    console.log(finalParams);
    obj.apply(args[0], finalParams);
  };
};

let printName3 = printName.myBind(name1, "dublin");
printName3("Ireland");
