// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.


class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Remove a node from the end of the list
    remove() {
      if (this.head === null) {
        return null; // List is empty
      }
  
      if (this.head.next === null) {
        const removedNode = this.head;
        this.head = null;
        return removedNode.value;
      }
  
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      const removedNode = current.next;
      current.next = null;
      return removedNode.value;
    }
  
    // Display all nodes in the list
    display() {
      if (this.head === null) {
        console.log("The list is empty.");
        return;
      }
  
      let current = this.head;
      let result = "";
      while (current !== null) {
        result += current.value + (current.next ? " -> " : "");
        current = current.next;
      }
      console.log(result);
    }
  }
  
  const list = new LinkedList();
  list.add(10);
  list.add(20);
  list.add(30);
  
  list.display(); // Output: 10 -> 20 -> 30
  
  list.remove();  // Removes 30
  list.display(); // Output: 10 -> 20
  
  list.remove();  // Removes 20
  list.remove();  // Removes 10
  list.display(); // Output: The list is empty.
  