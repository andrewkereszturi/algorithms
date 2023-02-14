class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Iterative
const reverseList = (head) => {
    let current = head;
    let prev = null;
  
    while (current !== null) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
};

// Recursive 

// const reverseList = (head, prev = null) => {
//     if (head === null) return prev;
//     const next = head.next;
//     head.next = prev;
//     return reverseList(next, head);
// }

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log("Expected: ", "a -> b -> c -> d -> e -> f", " Result: ", reverseList(a)); 

const x = new Node("x");
const y = new Node("y");

x.next = y;

console.log("Expected: ", "y -> x", " Result: ", reverseList(x)); 

const p = new Node("p");

console.log("Expected: ", "p", " Result: ", reverseList(p)); 
