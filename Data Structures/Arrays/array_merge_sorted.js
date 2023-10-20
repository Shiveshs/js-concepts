
const data1 = [1, 2, 44, 66];
const data2 = [7, 8, 55, 100, 1000];
let data3 = [];
let d1 = 0,
  d2 = 0,
  d3 = 0;
const result = document.getElementById("resultList");
let list;
const mergeArrayHandler = () => {
  if (list) {
    result.removeChild(list);
  }

  while (d1 < data1.length || d2 < data2.length) {
    if (data1[d1] < data2[d2]) {
      data3[d3] = data1[d1];
      d1++;
    }
    else 
    {
      data3[d3] = data2[d2];
      d2++
    }
    d3++;

  }
  console.log(`${d3}th element of new array is ${data3}`);


  for (let i = 0; i < data3.length; i++) {
    list = document.createElement("li");
    list.innerText = data3[i];
    result.appendChild(list);
  }
};
