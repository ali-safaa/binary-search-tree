class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(val) {
    let node = new Node(val);

    if (this.root == null) {
      this.root = node;
    } else {
      this.addNode(this.root, node);
    }
  }
  addNode(root, node) {
    if (node.value < root.value) {
      if (this.left == null) {
        this.left = node;
      } else {
        this.addNode(root.left, node);
      }
    } else {
      if (this.right == null) {
        this.right = node;
      } else {
        this.addNode(root.right, node);
      }
    }
  }
}

let tree = new Tree();

tree.add(5);
tree.add(3);
console.log(tree);
