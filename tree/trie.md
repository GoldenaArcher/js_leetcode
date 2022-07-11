# 前缀树 trie

简单的说就是一种空间换时间的数据结构，利用字符具有共同祖先的特性构建一个树，随后加速搜索速度。

最近一次 ~~除了刷题~~ 碰到前缀树是在上 bioinformatics 的课时，主要是因为基因序列太长了，如果不使用 trie 进行搜索的话，搜索时间太长了，确实有些吃不消。

它能够提速的方法很简单，参考以下案例：

1. 有一批蓝本，数量为 $n$
2. 有一批需要被检索的序列，数量为 $n'$

需求就是需要找到被检索的序列与蓝本中 match 的数量。

如果是通过暴力解，那就是一条序列一条序列的进行比对，每一条检索的最差可能性是 $O(m \times n)$ 或是 $O(m' \times n')$，取决于蓝本与被检索序列的数量。

下面是三种做法的对比：

1. 暴力解

   暴力解都不是超不超时的问题了，而是真的跑很久……都不一定跑的出来。

   具体数据量有多大我是真的不记得了，反正最后结果用暴力解的话，肯定是要比对几百万个字符了……

2. HashMap

   HashMap 使用起来的挑战性还是比较大的，毕竟 key 的长度太长，数据量也挺大的……

3. Trie

   使用 Trie 对比字符串应该说是出现比较久的技术了，现在也有一些比较高端的算法可以使用 $O(n)$ 的时间复杂度去构建 trie，这种感兴趣的可以自己搜索一下。

   搜索的做法为：

   1. 根据蓝本和被检索的样本大小，选择较大的那个构建一个 trie

      普遍来说，构建 trie 的时间复杂度为 $O(m \times n)$，其中 $m$ 为字符串长度，$n$ 为数组长度

   2. 遍历另外一部分数据，寻找 match 的结果

      在 trie 中搜索字符串的耗时为 $O(max(m))$，这样对比起来，就少了一个遍历数组的过程。这方面能够提速多快，取决于数据量的大小。

Trie 的应用讲完了，现在讲讲 trie 的结构类型与如何实现。

以这个数组为例：`['apart', 'app', 'ape', 'apathetical', 'apathy']` 为例，其树的构建结果如下：

![trie example](https://img-blog.csdnimg.cn/f39aa8490f3547a4beffd2aaaf6c4c67.png#pic_center)

在被搜索结果重复率比较大的时候，trie 可以避免存储重复值，如案例中所有的单词都起始于 `ap`，在 trie 中的表现方式为起始结点下只有一个 `a` 结点，该 `a` 结点下只有一个 `p` 结点。

在搜索时，如果需要搜索 `ape`，则会从起始结点开始进行搜索，起始结点下存在一个为 `a` 的子节点，则可以继续进行，如此循环。与之对比，暴力解则是需要遍历数组中所有的字符串，才能够判断当前值不包含在原有的数据中。

在搜索的效率上来说，孰优孰劣，一目了然。

一个简单的实现如下：

```javascript
class TrieNode {
  constructor(val) {
    this.val = val;
    this.children = [];
    this.isWord = false;
  }

  getIdx(ch) {
    return ch.charCodeAt(0) - "a".charCodeAt(0);
  }

  hasChild(ch) {
    return this.children[this.getIdx(ch)] !== undefined;
  }

  createChild(ch) {
    this.children[this.getIdx(ch)] = new TrieNode(ch);
  }

  getChild(ch) {
    return this.children[this.getIdx(ch)];
  }
}
```

因为英文只有 26 个字母，这里题中假设只有小写字母会被存储在 trie 中，因此可以这么实现。如果想要一个更加 generic 的实现方法，可以考虑使用 map 或者是对象代替数组进行存储。
