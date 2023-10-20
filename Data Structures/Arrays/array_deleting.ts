
const data = [1, 2, 4, 6, 77, 4, 3, 3, 45];
const deleteInput = <HTMLInputElement>document.getElementById("deleteInput");
const result = (<HTMLInputElement>document.getElementById("resultList"));
let list;
const deleteArrayHandler = () => {
  if (list) {
    result.removeChild(list);
  }

  const deleteInputValue = Number(deleteInput.value);
  for (let i = data.indexOf(deleteInputValue); i < data.length; i++) {
    if (
      deleteInputValue !== undefined ||
      deleteInputValue !== null
    ) {
      data[i] = data[i + 1];
    } else {
      alert("provide a valid value from above array");
    }
  }
  data.length = data.length - 1;

  for (let i = 0; i < data.length; i++) {
    list = document.createElement("li");
    list.innerText = data[i];
    result.appendChild(list);
  }
  // deleteInput.value = undefined; Write a statement to reset the input value
};

//Direct Remove method to search an element's index inside array
// console.log(data.indexOf(3)); // will provide only the first occurence of the element

export {}