// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).

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
      // Add vertex1 to vertex2's adjacency list
      if (this.adjacencyList.has(vertex1)) {
        this.adjacencyList.get(vertex1).push(vertex2);
      }
  
      // Add vertex2 to vertex1's adjacency list (for undirected graph)
      if (this.adjacencyList.has(vertex2)) {
        this.adjacencyList.get(vertex2).push(vertex1);
      }
    }
  
    // Perform Breadth-First Search (BFS) starting from a vertex
    bfs(startVertex) {
      const visited = new Set();
      const queue = [];
      const result = [];
  
      // Add the start vertex to the queue and mark as visited
      queue.push(startVertex);
      visited.add(startVertex);
  
      while (queue.length > 0) {
        // Dequeue a vertex from the queue and add it to the result
        const vertex = queue.shift();
        result.push(vertex);
  
        // Get all adjacent vertices of the dequeued vertex
        const neighbors = this.adjacencyList.get(vertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
            visited.add(neighbor);
          }
        }
      }
  
      return result;
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

const bfsResult = graph.bfs('A');
console.log(bfsResult); 
