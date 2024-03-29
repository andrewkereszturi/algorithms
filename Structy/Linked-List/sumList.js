class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const sumList = (head) => {
    let sum = 0;
    
    let current = head;
    
    while (current !== null) {
      sum += current.val
      current = current.next;
    }
    return sum;
};
  
const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log("Expected: ", 19, " Result: ", sumList(a)); 

const x = new Node(38);
const y = new Node(4);

x.next = y;

console.log("Expected: ", 42, " Result: ", sumList(x)); 

const z = new Node(100);

console.log("Expected: ", 100, " Result: ", sumList(z)); 

console.log("Expected: ", 0, " Result: ", sumList(null)); 

// Structy Iterative Solution

// const sumList = (head) => {
//     let sum = 0;
//     let current = head;
//     while (current !== null) {
//       sum += current.val;
//       current = current.next;
//     }
//     return sum;  
// };

// Structy Recursive Solution

// const sumList = (head) => {
//     if (head === null) return 0;
//     return head.val + sumList(head.next);
// };