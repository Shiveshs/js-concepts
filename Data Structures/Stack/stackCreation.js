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

  pushInput.value = "";
  console.log(stack);
};

const onPopHandler = () => {
  if (currLength > 0) {
    stack.length -= 1;
  }
  console.log(stack);
};
