# Leetcode 刷题目录

- [Leetcode 刷题目录](#leetcode-刷题目录)
  - [算法思想](#算法思想)
    - [双指针](#双指针)
    - [二分查找](#二分查找)
    - [排序](#排序)
    - [搜索](#搜索)
      - [BFS 系列](#bfs-系列)
      - [DFS 系列](#dfs-系列)
      - [Backtracking 系列](#backtracking-系列)
    - [贪心](#贪心)
    - [DP](#dp)
  - [数据结构相关](#数据结构相关)
    - [链表](#链表)
    - [字符串](#字符串)
    - [栈和队列](#栈和队列)
      - [栈](#栈)
      - [队列](#队列)
    - [哈希表](#哈希表)
    - [树](#树)
      - [二叉树](#二叉树)
      - [二叉搜索树](#二叉搜索树)
      - [前缀树 trie](#前缀树-trie)
    - [图](#图)
    - [位运算](#位运算)
    - [数组与矩阵](#数组与矩阵)
      - [数组](#数组)
      - [矩阵](#矩阵)
    - [数学](#数学)
  - [未定](#未定)
  - [相关复习和总结](#相关复习和总结)

~~按照 [Leetcode 题解](https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode%20%E9%A2%98%E8%A7%A3%20-%20%E7%9B%AE%E5%BD%95.md) 这份刷题目录解的题，如果有题目出现在 [Leetcode 题解](https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode%20%E9%A2%98%E8%A7%A3%20-%20%E7%9B%AE%E5%BD%95.md) 以外，就是碰到过的题目或是在刷目标公司的 OA.~~

刚开始的题还是按照 [Leetcode 题解](https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode%20%E9%A2%98%E8%A7%A3%20-%20%E7%9B%AE%E5%BD%95.md) 出现的顺序做的，后面基本上就是散着来的，只能按照类型分类了……。

Github 地址: [Leetcode 刷题目录](https://github.com/GoldenaArcher/js_leetcode)。

## 算法思想

### 双指针

1. [167. 有序数组的 Two Sum](https://goldenaarcher.blog.csdn.net/article/details/117911867)

2. [633. 两数平方和](https://goldenaarcher.blog.csdn.net/article/details/117911867)

3. [345. 反转字符串中的元音字符](https://goldenaarcher.blog.csdn.net/article/details/117968528)

4. [680. 回文字符串](https://goldenaarcher.blog.csdn.net/article/details/118008220)

5. [88. 归并两个有序数组](https://goldenaarcher.blog.csdn.net/article/details/118040111)

6. [141. 判断链表是否存在环](https://goldenaarcher.blog.csdn.net/article/details/118078119)

7. [524. 最长子序列](https://goldenaarcher.blog.csdn.net/article/details/118098338)
8. [142 & 287](https://goldenaarcher.blog.csdn.net/article/details/125241681)

### 二分查找

1. [69. 求开方](https://goldenaarcher.blog.csdn.net/article/details/118638265)

2. [744. 大于给定元素的最小元素](https://goldenaarcher.blog.csdn.net/article/details/118691478)

3. [540. 有序数组的 Single Element](https://goldenaarcher.blog.csdn.net/article/details/118998090)
4. [278. 第一个错误的版本](https://goldenaarcher.blog.csdn.net/article/details/120090799)
5. [74. 搜索二维矩阵](https://goldenaarcher.blog.csdn.net/article/details/125157940)

### 排序

1. [973. 最接近原点的 K 个点](https://goldenaarcher.blog.csdn.net/article/details/125110056)

### 搜索

简单的基础 BFS 和 DFS：

- [bfs](https://goldenaarcher.blog.csdn.net/article/details/124957784)
- [dfs](https://blog.csdn.net/weixin_42938619/article/details/125013749)

#### BFS 系列

1. [1091. 计算在网格中从原点到特定点的最短路径长度](https://blog.csdn.net/weixin_42938619/article/details/124964069)

2. [279. 组成整数的最小平方数数量](https://goldenaarcher.blog.csdn.net/article/details/124977507)

3. [127. 最短单词路径](https://goldenaarcher.blog.csdn.net/article/details/124995612)
4. [102. 二叉树的层序遍历](https://goldenaarcher.blog.csdn.net/article/details/124996421)
5. [994. 腐烂的橘子](https://goldenaarcher.blog.csdn.net/article/details/125025627)
6. [1197. 进击的骑士](https://goldenaarcher.blog.csdn.net/article/details/125112742)

#### DFS 系列

1. [200. 岛屿数量 & 695. 岛屿的最大面积](https://blog.csdn.net/weixin_42938619/article/details/125013811)

2. [547. 省份数量](https://goldenaarcher.blog.csdn.net/article/details/125030401)
3. [130. 被围绕的区域](https://blog.csdn.net/weixin_42938619/article/details/125026379?)
4. [417. 太平洋大西洋水流问题](https://goldenaarcher.blog.csdn.net/article/details/125030632)

#### Backtracking 系列

说起来，Backtracking 的题目，比 BFS 与 DFS 的和还多……

1. [17. 电话号码的字母组合](https://goldenaarcher.blog.csdn.net/article/details/125030421)

   不换汤也不换药的同类型题还有:

   - `257. Binary Tree Paths`
   - `46. Permutations`

   我也放在上面一起解了。

2. [93. 复原 IP 地址](https://goldenaarcher.blog.csdn.net/article/details/125039462)

### 贪心

1. [455. 分配饼干](https://goldenaarcher.blog.csdn.net/article/details/124944952)

2. [1221. 分割平衡字符串](https://goldenaarcher.blog.csdn.net/article/details/125030442)

### DP

1. [279. 组成整数的最小平方数数量](https://goldenaarcher.blog.csdn.net/article/details/124977693)

2. [79. 最大子数组和](https://goldenaarcher.blog.csdn.net/article/details/125043305)

3. [121. 买卖股票的最佳时机](https://goldenaarcher.blog.csdn.net/article/details/125146148)
4. [118. 杨辉三角](https://goldenaarcher.blog.csdn.net/article/details/125148841)

## 数据结构相关

### 链表

1. [160. 相交链表](https://goldenaarcher.blog.csdn.net/article/details/125163897)

2. [21. 合并两个有序链表](https://goldenaarcher.blog.csdn.net/article/details/125176828)
3. [160. 相交链表](https://goldenaarcher.blog.csdn.net/article/details/125163897)
4. [203. 移除链表元素](https://goldenaarcher.blog.csdn.net/article/details/125176975)
5. [206. 反转链表](https://goldenaarcher.blog.csdn.net/article/details/125200337)
6. [876. 链表的中间结点](https://goldenaarcher.blog.csdn.net/article/details/125211679)
7. [146. LRU 缓存](https://goldenaarcher.blog.csdn.net/article/details/125276206)
8. [2 & 23](https://goldenaarcher.blog.csdn.net/article/details/125278007)

### 字符串

1. [2288. 价格减免](https://goldenaarcher.blog.csdn.net/article/details/125030944)

2. [157. 用 Read4 读取 N 个字符](https://goldenaarcher.blog.csdn.net/article/details/125057439)

### 栈和队列

#### 栈

1. [150, 逆波兰表达式求值](https://goldenaarcher.blog.csdn.net/article/details/125100604)

2. [394. 字符串解码](https://goldenaarcher.blog.csdn.net/article/details/125109032)

#### 队列

1. [703. 数据流中的第 K 大元素](https://goldenaarcher.blog.csdn.net/article/details/125468842)

   这题其实解法很多，排序里面也有做过相似的，不过这里主要用的是 leetcode 内置的一个类：`MaxPriorityQueue` 去解的

### 哈希表

1. [1002. 查找共用字符](https://goldenaarcher.blog.csdn.net/article/details/125030458)

2. [217. 存在重复元素](https://blog.csdn.net/weixin_42938619/article/details/125041421?)
3. [359. 日志速率限制器](https://goldenaarcher.blog.csdn.net/article/details/125062087)
4. [1461. 检查一个字符串是否包含所有长度为 K 的二进制子串](https://blog.csdn.net/weixin_42938619/article/details/125063909)
5. [350. 两个数组的交集 II](https://goldenaarcher.blog.csdn.net/article/details/125139560)
6. [560. 和为 K 的子数组](https://goldenaarcher.blog.csdn.net/article/details/125388489)

### 树

#### 二叉树

1. [173. 二叉搜索树迭代器](https://goldenaarcher.blog.csdn.net/article/details/125454664)

   这题感觉还是用二叉树，没用到二叉搜索树的特性，所以就放在这里了

2. [105. 从前序与中序遍历序列构造二叉树](https://goldenaarcher.blog.csdn.net/article/details/125598353)
3. [222. 完全二叉树的节点个数](https://goldenaarcher.blog.csdn.net/article/details/125705544)
4. [112 & 113 Path Sum I, II](https://goldenaarcher.blog.csdn.net/article/details/125713057)
5. [297. 二叉树的序列化与反序列化](https://goldenaarcher.blog.csdn.net/article/details/125734853)

#### 二叉搜索树

1. [98. 验证二叉搜索树](https://goldenaarcher.blog.csdn.net/article/details/125425574)

2. [173. 二叉搜索树迭代器](https://goldenaarcher.blog.csdn.net/article/details/125454664)
3. [701. 二叉搜索树中的插入操作](https://goldenaarcher.blog.csdn.net/article/details/125458856)
4. [750. 删除二叉搜索树中的节点](https://goldenaarcher.blog.csdn.net/article/details/125466404)
5. [235 & 236](https://goldenaarcher.blog.csdn.net/article/details/125578635)

   题目为：235. 二叉搜索树的最近公共祖先 和 236. 二叉树的最近公共祖先

6. [108. 将有序数组转换为二叉搜索树](https://goldenaarcher.blog.csdn.net/article/details/125583360)

#### 前缀树 trie

- [前缀树 trie](https://goldenaarcher.blog.csdn.net/article/details/125719676)

1. [208. 实现前缀树](https://goldenaarcher.blog.csdn.net/article/details/125720739)

### 图

1. [1615. 最大网络秩](https://goldenaarcher.blog.csdn.net/article/details/124777888)

### 位运算

1. [318. 最大单词长度乘积](https://goldenaarcher.blog.csdn.net/article/details/125030472)

### 数组与矩阵

#### 数组

1. [2287. 重排字符形成目标字符串](https://goldenaarcher.blog.csdn.net/article/details/125030624)

2. [1480. 一维数组的动态和](https://goldenaarcher.blog.csdn.net/article/details/125100932)
3. [2293. 极大极小游戏](https://blog.csdn.net/weixin_42938619/article/details/125131635)
4. [2294. 划分数组使最大差为 K](https://goldenaarcher.blog.csdn.net/article/details/125131724)
5. [2295. 替换数组中的元素](https://goldenaarcher.blog.csdn.net/article/details/125131876)

#### 矩阵

1. [463. 岛屿的周长](https://goldenaarcher.blog.csdn.net/article/details/125062580)

2. [867. 转置矩阵](https://goldenaarcher.blog.csdn.net/article/details/125101218)

3. [304. 二维区域和检索 - 矩阵不可变](https://goldenaarcher.blog.csdn.net/article/details/125118318)

4. [566. 重塑矩阵](https://goldenaarcher.blog.csdn.net/article/details/125148345)
5. [36. 有效的数独](https://goldenaarcher.blog.csdn.net/article/details/125157068)

### 数学

1. [1056. 困惑数字](https://goldenaarcher.blog.csdn.net/article/details/125056263)

## 未定

一些周赛碰到的题，暂时还没看到合适的分类。

1. [2296. 设计一个文本编辑器](https://goldenaarcher.blog.csdn.net/article/details/125132105)

## 相关复习和总结

- [时间复杂度 和 空间复杂度](https://goldenaarcher.blog.csdn.net/article/details/120049383)

- [龟兔指针法](https://goldenaarcher.blog.csdn.net/article/details/125225923)
- [链表及双向链表](https://goldenaarcher.blog.csdn.net/article/details/125259758)
- [树的遍历](https://goldenaarcher.blog.csdn.net/article/details/125350745)
- [遍历总结](https://goldenaarcher.blog.csdn.net/article/details/125350745)

  题目包括：

  - 144.  Binary Tree Preorder Traversal
  - 145.  Binary Tree Postorder Traversal
  - 94. Binary Tree Inorder Traversal
  - 102.  Binary Tree Level Order Traversal

  除了层序遍历只用了 BFS，其他遍历方法包括递归和迭代的写法
