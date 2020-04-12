class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  serialize() {
    const ans = { value: this.value };
    ans.left = this.left === null ? null : this.left.serialize();
    ans.right = this.right === null ? null : this.right.serialize();
    return ans;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let currentNode = this.root;
    if (!this.root) {
      this.root = new Node(value);
      return this.root;
    }

    let isAddingActive = true;
    while (isAddingActive) {
      if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = new Node(value);
          isAddingActive = false;
        }
        continue;
      } else {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = new Node(value);
          isAddingActive = false;
        }
      }
    }

    return currentNode;
  }

  toJSON() {
    return JSON.stringify(this.root.serialize(), null, 4);
  }

  toObject() {
    return this.root.serialize();
  }
}

module.exports = { Tree };
