/*
Bubble sort in place
*/
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // using temp val to store j value to then insert into j+1
        const tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;

        // using spread operator - probably better but not as simple to follow
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
     //console.log(arr);
    }
  //console.log("-");
  }

  return arr;
}

console.log(bubbleSort([3,2,1])); // expects [1,2,3]
console.log(bubbleSort([13, 7, 4, 2, 9, 10])); // expects [2,4,7,9,10,13]
console.log(bubbleSort([2, 0, 2, 1, 1, 0])); // expects [0,0,1,1,2,2]