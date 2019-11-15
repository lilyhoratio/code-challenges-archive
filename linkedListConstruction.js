// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1) time
  setHead(node) {
    // if LL is empty
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.insertBefore(this.head, node);
  }

  // O(1) time
  setTail(node) {
    // if LL is empty
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  // O(1) time
  insertBefore(node, nodeToInsert) {
    // inserting a node that is the only one in a linkedlist before itself
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }
    // if node is in LL, then remove it
    this.remove(nodeToInsert);

    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;

    if (node.prev === null) {
      // if head
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }

    node.prev = nodeToInsert; // this must happen after nodeToInsert.prev = node.prev
  }

  // O(1) time
  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }

    this.remove(nodeToInsert);

    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;

    if (node.next == null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }

    node.next = nodeToInsert;
  }

  // O(p) time b/c iterating until we hit that position
  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let node = this.head;
    let currentPosition = 1;

    while (node !== null && currentPosition !== position) {
      node = node.next;
      currentPosition++;
    }
    // at end of LL - either node is null, so it is the tail we should set. or current position was reached.
    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }

  removeNodesWithValue(value) {
    // mix of containsNodeWithValue (search for node) && remove

    let node = this.head;

    while (node !== null) {
      const nodeToRemove = node; // important to keep in temp variable
      node = node.next; // then update the node
      if (nodeToRemove.value == value) {
        this.remove(nodeToRemove);
      }
      // node = node.next - GOTCHA. Can't do this because we've already lost track of the node
    }
  }

  remove(node) {
    // edge case: if we are at the head,
    // update the head to be the following node
    // so that LL still has a head
    if (node === this.head) {
      this.head = this.head.next;
    }
    // edge case: if we are at the tail,
    // update the tail to be the previous node
    // so that LL still has a tail
    if (node === this.tail) {
      this.tail = this.tail.prev;
    }

    // if we are in the middle of the LL, update pointers of surrounding nodes & remove pointers of current node

    // H ---> 1 ---> 2 ----> T
    // update the previous nodes' next to current nodes' next
    if (node.prev !== null) {
      node.prev.next = node.next;
    }

    // update the next nodes' previous to the curren nodes' previous
    if (node.next !== null) {
      node.next.prev = node.prev;
    }

    // remove pointers of current node - must do this after the above!
    // could also store node prev/next in temp variables, and set node props to null prior to updating node bindings around it
    node.prev = null;
    node.next = null;
  }

  // O(n) time for searching through LL
  containsNodeWithValue(value) {
    let node = this.head; // start at the head

    // if node is null, then we are at the end of the LL
    // so loop through until node's value is input value
    while (node !== null && node.value !== value) {
      node = node.next;
    }

    // return node
    return node !== null;
  }
}

// Do not edit the line below.
exports.DoublyLinkedList = DoublyLinkedList;

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
const linkedList = new DoublyLinkedList();
const node = new Node(1);

linkedList.setHead(node);
console.log(linkedList);
