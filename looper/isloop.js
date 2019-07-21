/* eslint-disable complexity */
"use strict";
const LinkedList = require("./linkedlist");

//Complete this algo
const isLoop = linkedlist => {
  let p1 = linkedlist.head.next.next;
  let p2 = linkedlist.head.next;
  if (linkedlist.head.next == null) {
    return false;
  }
  while (p1 || p1.next || p2 || p2.next) {
    if (p1 === p2) {
      return true;
    } else if (p1 && p1.next) {
      p1 = p1.next.next;
      p2 = p2.next;
    } else {
      return false;
    }
  }

  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
