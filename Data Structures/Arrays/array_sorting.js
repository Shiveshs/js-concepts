const unsorted = [102, 45, 65, 87, 74, 1002, 100025, 5667, 876, 90];
let temp;
for (let i = 0; i < unsorted.length; i++) {
  for (let i = 0; i < unsorted.length; i++)
    if (unsorted[i] > unsorted[i + 1]) {
      temp = unsorted[i];
      unsorted[i] = unsorted[i + 1];
      unsorted[i + 1] = temp;
    }
  console.log(unsorted);
}
