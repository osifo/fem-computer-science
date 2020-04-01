class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length) {
      const currentTail = this.tail;
      currentTail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  get(indexToFind) {
    let currentNodeLocation = 0;
    let currentNode = this.head;
    let foundNode = null;

    if (indexToFind === 0 || this.length === 1) {
      return currentNode.value;
    }

    while (currentNodeLocation <= indexToFind - 1) {
      if (currentNodeLocation === indexToFind - 1) {
        foundNode = currentNode.next;
      } else {
        currentNode = currentNode.next;
      }
      currentNodeLocation++;
    }

    return foundNode.value;
  }

  delete(indexToDelete) {
    let currentNodeLocation = 0;
    let currentNode = this.head;
    let nodeToDelete = null;

    if (this.length) {
      if (indexToDelete === 0) {
        nodeToDelete = currentNode;
        this.head = currentNode.next;
        this.length--;
        return nodeToDelete.value;
      }

      while (currentNodeLocation <= indexToDelete - 1) {
        if (currentNodeLocation === indexToDelete - 1) {
          nodeToDelete = currentNode.next;

          if (indexToDelete === this.length - 1) {
            currentNode.next = null;
          } else {
            currentNode.next = currentNode.next.next;
          }
        } else {
          currentNode = currentNode.next;
        }
        currentNodeLocation++;
      }

      this.length--;
      return nodeToDelete.value;
    }
    return null;
  }
}

module.exports = {
  LinkedList
};
