
const data = [1, 2, 4, 6, 77, 4, 3, 3, 45];
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("resultList");
let indexOfSearchedInput = [];
let list;
const searchArrayHandler = () => {
  if (list) {
    result.removeChild(list);
  }

  const searchInputValue = Number(searchInput.value);
  for (let i = 0; i < data.length; i++) {
    if (
      searchInputValue !== "" ||
      searchInputValue !== undefined ||
      searchInputValue !== null
    ) {
      if (data[i] === searchInputValue) {
        indexOfSearchedInput.push(i);
      }
    } else {
      alert("provide a valid value from above array");
    }
  }

  for (let i = 0; i < indexOfSearchedInput.length; i++) {
    list = document.createElement("li");
    list.innerText = indexOfSearchedInput[i];
    result.appendChild(list);
  }
  searchInput.value = "";
};

//Direct Search method to search an element's index inside array
console.log(data.indexOf(3)); // will provide only the first occurence of the element
