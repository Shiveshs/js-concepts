let data = [1, 2, 5, 6, 56, 73, 89, 1001, 0, 5];

const newList = document.getElementById("newList");
if (data.length > 0) {
  let list = document.getElementById("showArray");
  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    li.innerText = data[i];
    list.appendChild(li);
  }
}

const addNewElement = () => {
  let position = Number(document.getElementById("position").value);
  let newEl = Number(document.getElementById("newEl").value);
  for (let i = data.length - 1; i >= 0; i--) {
    if (i >= position) {
      data[i + 1] = data[i];
      if (i === position) {
        data[i] = newEl;
      }
    }
  }

  if (data.length > 0) {
    let list = document.getElementById("showArray");
    list.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      let li = document.createElement("li");
      li.innerText = data[i];
      list.appendChild(li);
    }
  }
};


//Direct way to insert is by using splice method:

const arrayDirectInsert =  [1,2,6,77,88,33,2];
 arrayDirectInsert.splice(3,0,45); //inserts new element at 3rd position
console.log("newArrayDirectInsert", arrayDirectInsert);

