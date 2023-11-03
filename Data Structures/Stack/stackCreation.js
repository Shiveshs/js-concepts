const stack = [1, 2, 3, 4];
const maxLength = 10;
let currLength = stack.length;
const pushInput = document.getElementById("stackInput");
const onPushHandler = () => {
  const pushInputValue = pushInput.value;
  if (currLength < 10) {
    stack[currLength] = pushInputValue;
    currLength += 1;
  } else {
    alert("No more elements can be added.");
  }
//   const showStack = document.getElementById("showStack");
// for (value in stack) {
//   let li = document.createElement("li");
//   li.innerText = value;
//   showStack.appendChild(li);
// }
  console.log(stack)
};


