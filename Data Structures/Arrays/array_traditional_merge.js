
const data1 = [1, 2, 4, 6];
const data2 = [77, 4, 3, 3, 45];
let newData = [];
const result = document.getElementById("resultList");
let list;
const mergeArrayHandler = () => {
  if (list) {
    result.removeChild(list);
  }

  for (let i = 0; i < data1.length; i++) {
    newData[i] = data1[i];
  }
  for (let i = 0; i < data2.length; i++) {
    newData[i + data1.length] = data2[i];
  }

  for (let i = 0; i < newData.length; i++) {
    list = document.createElement("li");
    list.innerText = newData[i];
    result.appendChild(list);
  }
};
