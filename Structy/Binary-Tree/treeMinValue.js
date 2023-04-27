class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


// Depth First
// const treeMinValue = (root) => {
//     const stack = [root];
  
//     let smallest = Infinity;
//     while (stack.length) {
//       const current = stack.pop();
//       if (current.val < smallest) smallest = current.val;
  
//       if (current.left !== null) stack.push(current.left);
//       if (current.right !== null) stack.push(current.right);
//     }
//     return smallest;
// };
//-2

// Breadth First

const treeMinValue = (root) => {
    const queue = [root];
  
    let smallest = Infinity;
    while (queue.length) {
        const current = queue.shift();
        if (current.val < smallest) smallest = current.val;

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return smallest;
};
console.log(treeMinValue(a))