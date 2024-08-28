// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

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
  
  // Function to simulate a printer queue
  function printerQueue() {
    const queue = new Queue();
  
    // Simulating adding print jobs to the queue
    queue.enqueue("Print Job 1");
    queue.enqueue("Print Job 2");
    queue.enqueue("Print Job 3");
  
    // Processing the print jobs in order
    while (!queue.isEmpty()) {
      const currentJob = queue.dequeue();
      console.log(`Processing ${currentJob}`);
    }
  
    console.log("All print jobs have been processed.");
  }
  
  // Example usage
  printerQueue();
  