# [数据结构] 单调栈

单调栈为栈中元素按照升序排列(递增栈)或降序排列(递减栈)的栈，通常可以用来寻找下一个最大/最小的题。

以 `[1,3,4,2]` 数组实现一个递增栈：

1. ![step 1](https://img-blog.csdnimg.cn/11762f61a42a4d49b469e9b69df31df3.png)

2. ![setp2](https://img-blog.csdnimg.cn/61b3b1a65d734e25840bfd9fda18efd4.png)

   到 `[1, 3, 4]` 这里其实都没有什么问题，一直是处在递增的状态

3. 遇到 `2` 时开始弹栈，遇到 `1` 时完成进栈操作

   ![step3](https://img-blog.csdnimg.cn/236f791991ef4df7bf4157ed0dc6f17c.png)

[496. Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/) 这一题就可以用递减栈来实现。

题目中需要找到的是下一个最大数字，数组依旧时 `[1,3,4,2]` 。

1. ![step 1](https://img-blog.csdnimg.cn/11762f61a42a4d49b469e9b69df31df3.png)
2. 第二个数字为 `3`，$ 3 > 1 $，因此 `3` 是 `1` 的下一个最大数字，在这里进行将 1 弹出，并将 `3` 压入栈中

   ![setp 2](https://img-blog.csdnimg.cn/3cbefab86bfc4b03ab8f16a6042976e3.png)

3. 下一个数字为 `4`，同样也满足下一个最大数字的需求，因此实现同样的弹栈、入栈操作

   ![step 3](https://img-blog.csdnimg.cn/746034f018be467ca4e58ab350a4ca8a.png)

4. 最后一个数字是 `2`，这之后没有更大的数字了，因此将其直接压入栈中

   ![step 4](https://img-blog.csdnimg.cn/c35c56e93cc34152b2724e4acaf8b33d.png)

   递减栈中弹出的值，是碰到了 _比它本身更大的值_，因此可以利用这一特性寻找下一个更大数。

同样的思想可以应用到 [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)，[84. Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) 等题上。
