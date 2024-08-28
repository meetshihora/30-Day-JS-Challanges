// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the back of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the front element of the queue
    dequeue() {
      if (this.isEmpty()) {
        return null; // Queue is empty
      }
      return this.items.shift();
    }
  
    // View the front element of the queue without removing it
    front() {
      if (this.isEmpty()) {
        return null; // Queue is empty
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  }

  const queue = new Queue();

  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log(queue.front()); // Output: 10
  
  console.log(queue.dequeue()); // Output: 10
  console.log(queue.dequeue()); // Output: 20
  
  console.log(queue.front()); // Output: 30
  
  console.log(queue.dequeue()); // Output: 30
  console.log(queue.isEmpty()); // Output: true
  