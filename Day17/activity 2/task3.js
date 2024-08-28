// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element of the stack
    pop() {
      if (this.items.length === 0) {
        return null; // Stack is empty
      }
      return this.items.pop();
    }
  
    // View the top element of the stack without removing it
    peek() {
      if (this.items.length === 0) {
        return null; // Stack is empty
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  }

  const stack = new Stack();

  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.peek()); // Output: 30
  
  console.log(stack.pop());  // Output: 30
  console.log(stack.pop());  // Output: 20
  
  console.log(stack.peek()); // Output: 10
  
  console.log(stack.pop());  // Output: 10
  console.log(stack.isEmpty()); // Output: true
  