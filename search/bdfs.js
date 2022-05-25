const edges = new Map([
  [0, 1],
  [0, 3],
  [0, 4],
  [4, 5],
  [3, 5],
  [1, 2],
  [1, 0],
  [2, 1],
  [4, 1],
  [3, 1],
  [5, 4],
  [5, 3],
]);

const bfs = (edges, startNode) => {
  const queue = [startNode];
  const visitedEdge = new Set();
  const searchPath = [];

  while (queue.length > 0) {
    const currHead = queue.shift();
    searchPath.push(currHead);
    visitedEdge.add(currHead);
    for (const [start, end] of edges) {
      if (start === currHead && !visitedEdge.has(end)) {
        queue.push(end);
        visitedEdge.add(end);
      }
      if (end === currHead && !visitedEdge.has(start)) {
        queue.push(start);
        visitedEdge.add(start);
      }
    }
  }

  return searchPath;
};

console.log(bfs(edges, 0));

const dfs = (edges, startNode) => {
  const stack = [startNode];
  const visitedEdge = new Set();
  const searchPath = [];

  while (stack.length > 0) {
    const currHead = stack.pop();
    searchPath.push(currHead);
    visitedEdge.add(currHead);

    for (const [start, end] of edges) {
      if (start === currHead && !visitedEdge.has(end)) {
        stack.push(end);
        visitedEdge.add(end);
      } else if (end === currHead && !visitedEdge.has(start)) {
        stack.push(start);
        visitedEdge.add(start);
      }
    }
  }

  return searchPath;
};

console.log(dfs(edges, 2));

const edges2 = new Map([
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 3],
  [2, 0],
  [2, 3],
  [3, 4],
  [3, 5],
  [4, 3],
  [5, 3],
]);

console.log(dfs(edges2, 0));
