// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0) {
        return null; // Stack is empty
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.items.length === 0) {
        return null; // Stack is empty
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Function to reverse a string using the Stack class
  function reverseString(input) {
    const stack = new Stack();
    
    // Push all characters of the string onto the stack
    for (let char of input) {
      stack.push(char);
    }
  
    // Pop all characters from the stack and build the reversed string
    let reversed = '';
    while (!stack.isEmpty()) {
      reversed += stack.pop();
    }
  
    return reversed;
  }
  
  // Example usage
  const originalString = "hello";
  const reversedString = reverseString(originalString);
  
  console.log(reversedString); // Output: "olleh"
  