class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Breadth First

// const treeIncludes = (root, target) => {
//     if (root === null) return false;
  
//     const queue = [root];
  
//     while (queue.length > 0) {
//       const node = queue.shift();
//       if (node.val === target) return true;
//       if (node.left !== null) queue.push(node.left);
//       if (node.right !== null) queue.push(node.right);
//     }
  
//     return false;
// };

// Depth First

const treeIncludes = (root, target) => {
    if (root === null) return false;
    if (root.val === target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};


console.log(treeIncludes(a, "e")); 