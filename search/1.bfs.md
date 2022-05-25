# [JavaScript 刷题] 搜索 - BFS(广度优先搜索)

BFS 是所有搜索中最简单的方法，它的原理就是：

- 以结点 A 开始
- 搜索所有与 A 相关联的结点 A'
- 继续搜索 A' 相关联的结点

图示如下：

1. 一个空白的图

   ![在这里插入图片描述](https://img-blog.csdnimg.cn/93aa0d9023dd47f0b5355788e429bb0d.png)

2. 第一个访问过的结点为黑色，蓝色为当下正在访问的结点

   ![在这里插入图片描述](https://img-blog.csdnimg.cn/7332fc2b8eee475b8e08a5bb5401519d.png)

3. 以蓝色的结点为基础向外延伸

   ![在这里插入图片描述](https://img-blog.csdnimg.cn/d8301b3251f5478a99c3e03a9e0f9a6c.png)

   ![在这里插入图片描述](https://img-blog.csdnimg.cn/07e3aa35c07043d4abf74b7731832261.png)

4. 完成

   ![在这里插入图片描述](https://img-blog.csdnimg.cn/9559a6f3be7a44fa9a01f816361de81f.png)

总结来说，BFS 会搜索当前 degree 的所有结点后，再搜索下一个 degree 的所有节点，这种情况要求先进先出的情况下，使用 queue 就比较合适了。

这里是 BFS 的简单实现：

```javascript
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

// [ 0, 4, 1, 3, 2, 5 ]
console.log(bfs(edges, 0));
```

图如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/e8ffa877d0054d3daee92aac44d779da.png)

以 0 开始进行搜索的话，就是：

```bash
0     (degree为0)
1-3-4 (degree为1)
2-5   (degree为2)
```

这也和输出的结果相符合。
