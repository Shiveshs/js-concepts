let data = [];
let currentSize = data.length;

const push = (ele) => {
  data[currentSize] = ele;
  currentSize += 1;
};

const pop = () => {
      const poppedvalue = data[currentSize - 1];
  currentSize -= 1;
  data.length = currentSize;
  return poppedvalue;
};

let str = "my name is Shivesh Shandilya";

const reverseStr = (str) => {
  const strArray = str.split("");
  for (let i = 0; i < strArray.length; i++) {
    push(strArray[i]);
  }
  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = pop();
  }
  str = strArray.join("");
  console.log(str);
};

reverseStr(str);
