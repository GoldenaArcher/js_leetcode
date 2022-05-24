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
        visitedEdge.add(end)
    }
    if (end === currHead && !visitedEdge.has(start)) {
        queue.push(start);
        visitedEdge.add(start)
      }
    }
  }

  return searchPath;
};

console.log(bfs(edges, 0));

console.log(edges);
