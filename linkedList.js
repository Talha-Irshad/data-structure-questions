class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // add a node to the end of the list
  add(data) {
    // create a new node
    let node = new Node(data);
    let current;

    // if the list is empty, set the head to the new node
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      // loop until you reach the last node
      while (current.next) {
        current = current.next;
      }
      // set the last node's next property to the new node
      current.next = node;
    }
    this.size++;
  }

  // insert a new node at a specific position
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    // create a new node
    let node = new Node(data);
    let current, previous;

    // if the index is 0, set the new node to be the head
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      current = this.head;
      let i = 0;
      // loop until you reach the correct position
      while (i < index) {
        i++;
        previous = current;
        current = current.next;
      }
      // set the new node's next property to the current node
      node.next = current;
      // set the previous node's next property to the new node
      previous.next = node;
    }
    this.size++;
  }

  // remove a node at a specific position
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let i = 0;

    // if the index is 0, set the head to the next node
    if (index === 0) {
      this.head = current.next;
    } else {
      // loop until you reach the correct position
      while (i < index) {
        i++;
        previous = current;
        current = current.next;
      }
      // set the previous node's next property to the current node's next property
      previous.next = current.next;
    }
    this.size--;
  }
}
