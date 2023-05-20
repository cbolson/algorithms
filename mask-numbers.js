/*
mask string with given character up to given number of characters
*/
const str = "123456789";

console.log(mask(str, "#", 5));

function mask(str, char, num) {
  return str.slice(-num).padStart(str.length, char);
}
