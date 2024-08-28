// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two node

class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    // Add a vertex to the graph
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
      if (this.adjacencyList.has(vertex1)) {
        this.adjacencyList.get(vertex1).push(vertex2);
      }
      if (this.adjacencyList.has(vertex2)) {
        this.adjacencyList.get(vertex2).push(vertex1);
      }
    }
  
    // Perform Breadth-First Search (BFS) to find the shortest path
    shortestPath(startVertex, endVertex) {
      const visited = new Set();
      const queue = [];
      const previous = new Map();
      
      // Initialize
      queue.push(startVertex);
      visited.add(startVertex);
      previous.set(startVertex, null);
      
      while (queue.length > 0) {
        const vertex = queue.shift();
  
        if (vertex === endVertex) {
          return this._reconstructPath(previous, startVertex, endVertex);
        }
  
        const neighbors = this.adjacencyList.get(vertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
            visited.add(neighbor);
            previous.set(neighbor, vertex);
          }
        }
      }
  
      return []; // Return empty path if no path exists
    }
  
    // Helper method to reconstruct the path from the previous map
    _reconstructPath(previous, startVertex, endVertex) {
      const path = [];
      for (let at = endVertex; at !== null; at = previous.get(at)) {
        path.push(at);
      }
      path.reverse();
      return path;
    }
  }

  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('D', 'E');
  
  const shortestPath = graph.shortestPath('A', 'E');
  console.log(shortestPath); // Output: [ 'A', 'C', 'E' ]
  