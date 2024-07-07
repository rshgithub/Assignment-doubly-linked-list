const Node = require("./Node.js");

class DoublyLinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _getNodeAtIndex(index) {
    if (index < 0 || index >= this.length) return null;
    let current;
    if (index <= this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }
    return current;
  }

  // The push method takes a value as a parameter and assigns it as the tail of the list
  push = (value) => {
    const newNode = new Node(value);
    if (!this.head) {
      // If the list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is NOT empty
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  };

  // The pop method removes the tail of the list
  pop = () => {
    if (!this.head) return undefined;
    const removedTailNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedTailNode.prev;
      this.tail.next = null;
      removedTailNode.prev = null;
    }
    this.length--;
    return removedTailNode.value;
  };

  // The shift method removes the head of the list
  shift = () => {
    if (!this.head) return undefined;
    const removedHeadNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedHeadNode.next;
      this.head.prev = null;
      removedHeadNode.next = null;
    }
    this.length--;
    return removedHeadNode.value;
  };

  // The unshift method takes a value as a parameter and assigns it as the head of the list
  unshift = (value) => {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  };

  // The get method takes an index number as a parameter and returns the value of the node at that index
  get = (index) => {
    if (index < 0 || index >= this.length) return undefined;
    let currentIndex;

    if (index <= this.length / 2) {
      currentIndex = this.head;
      for (let i = 0; i < index; i++) {
        currentIndex = currentIndex.next;
      }
    } else {
      currentIndex = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        currentIndex = currentIndex.prev;
      }
    }
    return currentIndex.value;
  };

  // The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
  set = (index, value) => {
    const node = this._getNodeAtIndex(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  };

  // The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list. It returns true on successful insert or false
  insert = (index, value) => {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      // assign the val in the head of list if it's empty
      this.unshift(val);
    } else if (index === this.length) {
      // assign the val in the tail of the list if the index = the length of the list
      this.push(val);
    } else {
      const newNode = new Node(value);

      // Find the node before the specified index
      const prevNode = this._getNodeAtIndex(index - 1);
      // Find the node immediately after prevNode
      const nextNode = prevNode.next;
      // Insert the new node into the list
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;

      this.length++;
    }
    return true;
  };

  // The remove method takes an index number as a parameter and removes the node at the given index in the list
  remove = (index) => {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift(); // if only one element in the list then remove it 
    if (index === this.length - 1) return this.pop();  // if index is the last in the list then remove the tail of the list

    const removedNode = this._getNodeAtIndex(index);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode.val;

  };
}

module.exports = DoublyLinkedList;