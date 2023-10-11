//creating objects

//object literals

const sportsCar = {
  name: "Sports Car",
  speedMax: 300,
  getCarName: function () {
    console.log("Sports Car name Function 1");
  },
};

sportsCar.getCarName();

//problem in object literal is that to create a new object you will have to again use the same object literal way

//factory function
const manualCar = (gears, name) => {
  return {
    name, //if the key value pair is having the same name, we can skip the name: name and directly put name as the property
    gears: gears,
    getCarName: () => {
      console.log(`manual car defined using factory Method, car name: ${name}`);
    },
  };
};

//creating new object
const hyundaiManual = manualCar(5, "hyundai manual");
hyundaiManual.getCarName();

//creating new object
const tataManual = manualCar(5, "tata manual");
hyundaiManual.getCarName();

//if we console this here, it will be referring to global object, which is the window object here,
// in node js the windw object is identified with global keyword

//using object.create()
//object.create uses an object as a prototype to define new object

const result = {
  isExamGiven: false,
  name: "Shivam",
  printResult: () =>
    console.log(`print this message. this is the parent object `),
};

const result1 = Object.create(result); //Object created with properties of prototype
result1.printResult(); //parent's value will be called

result1.name = "Shivesh";
result1.marks = "90%";
result1.isExamGiven = true;
result1.printResult = () =>
  console.log(`${result1.name} got marks ${result1.marks} `);

result1.printResult(); //value changed in above statements
