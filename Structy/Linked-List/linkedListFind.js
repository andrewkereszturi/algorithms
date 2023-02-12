class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

const linkedListFind = (head, target) => {
    let current = head;
    
    while (current !== null) {
      if (current.val === target) {
        return true;
      }
      current = current.next;
    }
    return false;
};
  
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

console.log("Expected: ", true, " Result: ", linkedListFind(a, "c")); 
console.log("Expected: ", true, " Result: ", linkedListFind(a, "d")); 
console.log("Expected: ", false, " Result: ", linkedListFind(a, "q")); 

const node1 = new Node("jason");
const node2 = new Node("leneli");

node1.next = node2;

console.log("Expected: ", true, " Result: ", linkedListFind(node1, "jason")); 

const node3 = new Node(42);

console.log("Expected: ", true, " Result: ", linkedListFind(node3, 42)); 


// Structy Iterative Solution

// const linkedListFind = (head, target) => {
//     let current = head;
//     while (current !== null) {
//       if (current.val === target) return true;
//       current = current.next;
//     }
//     return false;
// };

// Structy Recursive Solution

// const linkedListFind = (head, target) => {
//     if (head === null) return false;
//     if (head.val === target) return true;
//     return linkedListFind(head.next, target);
// };