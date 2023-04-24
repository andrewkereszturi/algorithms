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

// const treeSum = (root) => {
//     if (root === null) return 0;
  
//     return root.val + treeSum(root.left) + treeSum(root.right);
// };


// Breadth First
const treeSum = (root) => {
    if (root === null) return 0;
  
    const queue = [root];
    let totalSum = 0;
    while (queue.length > 0) {
      const node = queue.shift();
      totalSum += node.val;
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  
    return totalSum;
};
// 21
console.log(treeSum(a)); 
