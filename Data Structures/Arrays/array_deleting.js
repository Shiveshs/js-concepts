"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = [1, 2, 4, 6, 77, 4, 3, 3, 45];
var deleteInput = document.getElementById("deleteInput");
var result = document.getElementById("resultList");
var list;
var deleteArrayHandler = function () {
    if (list) {
        result.removeChild(list);
    }
    var deleteInputValue = Number(deleteInput.value);
    for (var i = data.indexOf(deleteInputValue); i < data.length; i++) {
        if (deleteInputValue !== undefined ||
            deleteInputValue !== null) {
            data[i] = data[i + 1];
        }
        else {
            alert("provide a valid value from above array");
        }
    }
    data.length = data.length - 1;
    for (var i = 0; i < data.length; i++) {
        list = document.createElement("li");
        list.innerText = data[i];
        result.appendChild(list);
    }
    // deleteInput.value = undefined; Write a statement to reset the input value
};
