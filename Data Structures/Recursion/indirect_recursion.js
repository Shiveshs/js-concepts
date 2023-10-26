// function test(x){
//     // console.log(x) This console will give 6,5,4,3,2,1 as these will be executed each time the function will be pushed to call stack
//     if(x>0){
//         test(x-1)
//     }
//     // console.log(x) This console will give 0,1 , 2,3,4,5,6 as these will be executed one by one from the call stack (see call stack for this)
// }

// test(6)

//---------------------------------------------------------------------------------------------------------------------------------------

//indirect recursion example

const buyApple = (totalMoney) => {
  console.log("total money:", totalMoney, "  total apple:", totalApple);
  if (totalMoney > 0) {
    buyMore(totalMoney);
  } else {
    console.log(
      "i have a total of ",
      totalApple,
      " apple and a total of ",
      totalMoney,
      "rupees"
    );
  }
};

const buyMore = (totalMoney) => {
  totalApple++;
  totalMoney -= 10;
  buyApple(totalMoney);
};
let totalApple = 0;
buyApple(100);
