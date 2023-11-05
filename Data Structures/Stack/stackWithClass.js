class stack {
  data = [];
  currentSize;
  maxSize;
  constructor(max = 5) {
    this.currentSize = this.data.length;
    this.maxSize = max;
  }
  push(ele) {
    if (this.currentSize < this.maxSize) {
      this.data[this.currentSize] = ele;
      this.currentSize += 1;
    } else {
      alert("Max size of the stack achieved");
    }
  }

  pop() {
    let poppedValue;
    if (this.currentSize > 0) {
      poppedValue = this.data[this.currentSize - 1];
      this.data.length -= 1;
      this.currentSize = this.data.length;
    } else {
      alert("stack is empty");
    }
    return poppedValue;
  }

  display() {
    console.log(this.data);
  }
}

  //   reverse(str) {
  //     let strArray = str.split("");
  //     for (let i = 0; i < strArray.length; i++) {
  //       this.push(strArray[i]);
  //     }
  //     for (let i = 0; i < strArray.length; i++) {
  //       strArray[i] = this.pop();
  //       console.log(strArray)
  //     }
  //     str = strArray.join("");
  //     console.log(str);
  //   }

  // reverseStack() {
  //     for (let i = 0; i < this.currentSize; i++) {
  //         this.data[i] = this.pop();
  //         console.log(this.data)
  //       }
  // }


// const st1 = new reverse(5);
