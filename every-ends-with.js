// return true or false if words in array end with the defined letter

function wordEndsWith(arr, letter) {
  return arr.every((w) => w.endsWith(letter));
}

console.log(wordEndsWith(["car", "mother", "baby", "clever"], "r")); // false
console.log(wordEndsWith(["fast", "cot", "newt", "grunt"], "t")); // true
