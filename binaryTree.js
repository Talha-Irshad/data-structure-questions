class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      debugger;
      while (true) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  search(value) {
    if (this.root === null) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  inOrderTraverse(callback) {
    function inOrderTraverseNode(node, callback) {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback);
        callback(node.value);
        inOrderTraverseNode(node.right, callback);
      }
    }

    inOrderTraverseNode(this.root, callback);
  }

  preOrderTraverse(callback) {
    function preOrderTraverseNode(node, callback) {
      if (node !== null) {
        callback(node.value);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
      }
    }

    preOrderTraverseNode(this.root, callback);
  }

  postOrderTraverse(callback) {
    function postOrderTraverseNode(node, callback) {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.value);
      }
    }

    postOrderTraverseNode(this.root, callback);
  }
}

const tree = new BinarySearchTree();

tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log(tree.search(7)); // prints true
console.log(tree.search(1)); // prints false

tree.inOrderTraverse((value) => console.log(value));
// prints 2 3 4 5 6 7 8

tree.preOrderTraverse((value) => console.log(value));
// prints 5 3 2 4 7 6 8

tree.postOrderTraverse((value) => console.log(value));
// prints 2 4 3 6 8 7 5
