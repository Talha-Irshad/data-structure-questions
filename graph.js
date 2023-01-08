class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (item) => item != vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (item) => item != vertex1
    );
  }

  removeVertex(vertex) {
    delete this.adjacencyList[vertex];
    for (const [key, value] of Object.entries(this.adjacencyList)) {
      this.adjacencyList[key] = this.adjacencyList[key].filter(
        (item) => item != vertex
      );
    }
  }

  breadthFirstSearch(start) {
    const queue = [start];
    const result = [];
    const visited = {};

    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }

    return result;
  }

  depthFirstSearch(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    })(start);
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
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.addEdge('D', 'E');
graph.addEdge('A', 'E');

// console.log(graph);

console.log(graph.breadthFirstSearch('A'));
console.log(graph.depthFirstSearch('A'));

// graph.removeVertex('E');

// console.log(graph);

// graph.removeEdge('B', 'D');
// console.log(graph);
