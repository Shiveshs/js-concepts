
let data = [1, 2, 5, 6, 56, 73, 89, 1001, 0, 5];
for (let i = 0; i < data.length; i++) {
  document.write(`<div>Element ${i} is ${data[i]} </div>`);
  console.log(`Element ${i} is ${data[i]}`);
}

let x = 5;
document.write(`${x}th element is ${data[x]}`);

const getIndexValue = () => {
  
  let indexValue = Number(document.getElementById("indexValue").value);
  if( indexValue < data.length && indexValue >= 0 && indexValue !== Number("") ){
  document.write(`<div>${indexValue}th value in the array is ${data[indexValue]}</div>`)
  }
  else {
      alert("Please Enter correct value");
      document.getElementById("indexValue").value = "";
  }
}
