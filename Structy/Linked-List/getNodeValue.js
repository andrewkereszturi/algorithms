class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getNodeValue = (head, index) => {
    let counter = 0;
    let current = head;
  
    while (current !== null) {
      if (counter === index) {
        return current.val;
      }
      counter++;
      current = current.next;
    }
  return null;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

console.log("Expected: ", "c", " Result: ", getNodeValue(a, 2)); 
console.log("Expected: ", "d", " Result: ", getNodeValue(a, 3));
console.log("Expected: ", null, " Result: ", getNodeValue(a, 7));

// Structy Iterative Solution

// const getNodeValue = (head, index) => {
//     let count = 0;
//     let current = head;
//     while (current !== null) {
//       if (count === index) return current.val;
//       current = current.next;
//       count += 1;
//     }
//     return null;
// };

// Structy Recursive Solution

// const getNodeValue = (head, index) => {
//     if (head === null) return null;
//     if (index === 0) return head.val;
//     return getNodeValue(head.next, index - 1);
// };