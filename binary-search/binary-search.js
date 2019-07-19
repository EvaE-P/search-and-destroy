/* eslint-disable complexity */
"use strict";

// Complete this algo
const binarySearch = (array, target, head = 0, tail = array.length - 1) => {
  // head = 0;
  // tail = array.length - 1;
  let midpoint = Math.floor((tail + head) / 2);
  console.log("this is our midpoint", midpoint);
  if (target > array[tail] || target < array[head]) {
    return false;
  }
  if (
    array[head] === target ||
    array[tail] === target ||
    array[midpoint] === target
  ) {
    return true;
  } else if (target > array[midpoint]) {
    console.log("this is our head", head);
    head = midpoint + 1;
    console.log("after assign", head);
    return binarySearch(array, target, head, tail);
  } else if (target < array[midpoint]) {
    tail = midpoint - 1;
    return binarySearch(array, target, head, tail);
  } else if (head === tail) {
    return false;
  } else {
    return false;
  }
};
console.log(binarySearch([-3, -2, 0, 9, 10, 11, 12, 15, 17, 18, 19, 20], 25));

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
