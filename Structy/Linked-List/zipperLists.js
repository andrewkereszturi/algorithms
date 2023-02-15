class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// Iterative solution

const zipperLists = (head1, head2) => {
    const head = head1;
    let tail = head;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;
    
    while (current1 !== null && current2 !== null) {
      if (count % 2 === 0) {
        tail.next = current2;
        current2 = current2.next;
      } else {
        tail.next = current1;
        current1 = current1.next;
      }
      tail = tail.next;
      count += 1;
    }
    
    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;
    
    return head;
};


// Recursive solution 
// const zipperLists = (head1, head2) => {
//     if (head1 === null && head2 === null) return null;
//     if (head1 === null) return head2;
//     if (head2 === null) return head1;
//     const next1 = head1.next;
//     const next2 = head2.next;
//     head1.next = head2;
//     head2.next = zipperLists(next1, next2);
//     return head1;
// };


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

console.log("Expected: ", "a -> x -> b -> y -> c -> z", " Result: ", zipperLists(a, x)); 
