/*
leet - 27. Remove Element

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, 
you must instead have the result be placed in the first part of the array nums. 
More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. 
It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. 
You must do this by modifying the input array in-place with O(1) extra memory.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/* 
this was my initial answer but it was NOT accepted by Leet as 
Leet expects the function to return the array length. It checks that the original array contents has been modified
*/
var removeElement1 = function (nums, val) {
  // this returns the correct array value but Leet wants the original array to be modified, filter creates a new shallow copy
  return (nums = nums.filter((num) => num !== val));
};

// accepted answer
var removeElement2 = function (nums, val) {
  while (nums.indexOf(val) !== -1) {
    nums.splice(nums.indexOf(val), 1);
  }
  return nums.length;
};

/* 
this passes the test BUT it shouldm't as Leet states that you must not 
allocate extra space - eg by creating a new array
*/
var removeElement3 = function (nums, val) {
  const arr = nums.filter((num) => num !== val);
  // console.log(arr);
  nums.length = 0;
  nums.push(...arr);
  return nums.length;
};

// my solution - similar to function2 but using reverse loop and comparison instead of indexOf
var removeElement4 = function (nums, val) {
  // reverse loop
  const len = nums.length - 1;
  for (let i = len; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

const nums1 = [3, 2, 2, 3];
const nums2 = [3, 2, 2, 3];
const nums3 = [3, 2, 2, 3];
const nums4 = [3, 2, 2, 3];
const val = 3;

console.log(removeElement1(nums1, 3));
console.log("func 1 new val:", nums1);

console.log(removeElement2(nums2, 3));
console.log("func 2 new val:", nums2);

console.log(removeElement3(nums3, 3));
console.log("func 3 new val:", nums3);

console.log(removeElement4(nums4, 3));
console.log("func 4 new val:", nums4);
