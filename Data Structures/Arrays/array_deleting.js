const data = [1, 2, 4, 6, 77, 4, 3, 3, 45];
let deleteInput = document.getElementById("deleteInput");
let result = document.getElementById("resultList");
let list;
let deleteArrayHandler = function () {
  let deleteInputValue = (deleteInput.value);
  console.log(deleteInputValue)
  if (deleteInputValue !== undefined && deleteInputValue !== null &&  deleteInputValue !== "" && !isNaN(Number(deleteInputValue)) && data.indexOf(Number(deleteInputValue)) !== -1  ) {
    for (let i = data.indexOf(Number(deleteInputValue)); i < data.length; i++) {
      data[i] = data[i + 1];
    }
  
  data.length = data.length - 1;
  for (let i = 0; i < data.length; i++) {
    list = document.createElement("li");
    list.innerText = data[i];
    result.appendChild(list);
  }
}
  else {
    alert("provide a valid value from above array");
  }
  // deleteInput.value = undefined; Write a statement to reset the input value
};
