# 二分查找总结

二分查找总共列举了 6 题目：

1. [求开方](https://goldenaarcher.blog.csdn.net/article/details/118638265)

2. [大于给定元素的最小元素](https://goldenaarcher.blog.csdn.net/article/details/118691478)

3. 有序数组的 Single Element

   <https://leetcode.com/problems/single-element-in-a-sorted-array/description/>

4. 第一个错误的版本

   <https://leetcode.com/problems/first-bad-version/description/>

5. 旋转数组的最小数字

   <https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/>

6. 查找区间

   <https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/>

---

正常实现

Input : [1,2,3,4,5]
key : 3
return the index : 2

```java
public int binarySearch(int[] nums, int key) {
int l = 0, h = nums.length - 1;
while (l <= h) {
int m = l + (h - l) / 2;
if (nums[m] == key) {
return m;
} else if (nums[m] > key) {
h = m - 1;
} else {
l = m + 1;
}
}
return -1;
}
```

时间复杂度

二分查找也称为折半查找，每次都能将查找区间减半，这种折半特性的算法时间复杂度为 O(logN)。

m 计算

有两种计算中值 m 的方式：

m = (l + h) / 2
m = l + (h - l) / 2
l + h 可能出现加法溢出，也就是说加法的结果大于整型能够表示的范围。但是 l 和 h 都为正数，因此 h - l 不会出现加法溢出问题。所以，最好使用第二种计算法方法。

未成功查找的返回值

循环退出时如果仍然没有查找到 key，那么表示查找失败。可以有两种返回值：

-1：以一个错误码表示没有查找到 key
l：将 key 插入到 nums 中的正确位置
变种

二分查找可以有很多变种，实现变种要注意边界值的判断。例如在一个有重复元素的数组中查找 key 的最左位置的实现如下：

public int binarySearch(int[] nums, int key) {
int l = 0, h = nums.length;
while (l < h) {
int m = l + (h - l) / 2;
if (nums[m] >= key) {
h = m;
} else {
l = m + 1;
}
}
return l;
}
该实现和正常实现有以下不同：

h 的赋值表达式为 h = m
循环条件为 l < h
最后返回 l 而不是 -1
在 nums[m] >= key 的情况下，可以推导出最左 key 位于 [l, m] 区间中，这是一个闭区间。h 的赋值表达式为 h = m，因为 m 位置也可能是解。

在 h 的赋值表达式为 h = m 的情况下，如果循环条件为 l <= h，那么会出现循环无法退出的情况，因此循环条件只能是 l < h。以下演示了循环条件为 l <= h 时循环无法退出的情况：

nums = {0, 1, 2}, key = 1
l m h
0 1 2 nums[m] >= key
0 0 1 nums[m] < key
1 1 1 nums[m] >= key
1 1 1 nums[m] >= key
...
当循环体退出时，不表示没有查找到 key，因此最后返回的结果不应该为 -1。为了验证有没有查找到，需要在调用端判断一下返回位置上的值和 key 是否相等。
