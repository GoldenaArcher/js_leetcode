# [JavaScript 刷题] 搜索 - DFS(深度优先搜索)

DFS 比起 BFS 来说更加的复杂一些，像 DFS 名词描述一样，这个搜索方法会获取下一个可到达的结点，通常用来解决 **可达性** 问题。其运算过程为：

- 以结点 A 开始
- 搜索下一个可到达的结点 A'
- 搜索下一个可到达的结点 A''
- 重复步骤一直到下一个节点不存在，此时返回到上一个结点

  这个过程又被称之为 backtracking

- 搜索下一个可到达的结点 $A'^n$
- 重复步骤

图示如下：

1. 开具一张空图

   ![new graph](https://img-blog.csdnimg.cn/acfaad3c997e4be08abbac89d886083e.png)

2. 搜索下一个可到结点

   ![find next reachable](https://img-blog.csdnimg.cn/29e41b4033c14d338ce7c221b3d825d9.png)

3. 没有下一个可到结点，那就返回

   ![backtracking](https://img-blog.csdnimg.cn/f48f81a82965406aa55e7da29ebaf8b2.png)

4. 继续搜索下一个可到结点

   ![continue finding next reachable](https://img-blog.csdnimg.cn/f8c2d4c0411a4bdfb12f23b862b1c000.png)

5. 重复搜索，以及没有可到结点后进行返回

   ![continue finding next reachable2](https://img-blog.csdnimg.cn/20ff0e641f8c4053a6f0ecba77f64fc2.png)

   ![find all nodes](https://img-blog.csdnimg.cn/6f98cca0f6084c1089dc4856b6ef511c.png)

   ![backtracking2](https://img-blog.csdnimg.cn/1b3d5b22a920484da0b337572d5ccdf5.png)

DFS 会盯着一条路走到底，在撞了南墙之后返回，所以这种情况下使用 stack(后进先出)的数据结构就比较合适。

这里是 DFS 的迭代实现方法：

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

// [ 2, 1, 0, 3, 5, 4 ]
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

// [ 0, 2, 3, 4, 5, 1 ]
console.log(dfs(edges2, 0));
```

第一个图结构如下：

![graph1](https://img-blog.csdnimg.cn/e8ffa877d0054d3daee92aac44d779da.png)

开始的结点为 2，根据 DFS 一条道走到底的逻辑，肉眼可以比较直接地看出来路径为 `2 -> 1 -> 0 -> 3 -> 5 -> 4`，最后一部分结尾时 `3 -> 5 -> 4` 还是 `3 -> 4 -> 5` 都是一样的，只不过看优先选择哪个 path 而已。

第二个图结构如下：

![graph2](https://img-blog.csdnimg.cn/88cc0fd43509463a8592153e395d5307.png)

开始的结点为 0，这里其实变化还是比较多的，不过第一部分从 `0 -> ... -> 4`, `0 -> ... -> 5`, `0 -> 1 --> 3 --> 2` 或 `0 -> 2 --> 3 --> 1` 这四个路径中选择一个。随后返回(backtracking)到结点 `3`，探索与 `3` 相关联但还没有被探索过的结点。
