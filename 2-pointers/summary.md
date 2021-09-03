# 双指针总结

双指针总共列举了 7 题目：

1. [有序数组的 Two Sum](https://goldenaarcher.blog.csdn.net/article/details/117911867)

2. [两数平方和](https://goldenaarcher.blog.csdn.net/article/details/117911867)

3. [反转字符串中的元音字符](https://goldenaarcher.blog.csdn.net/article/details/117968528)

4. [回文字符串](https://goldenaarcher.blog.csdn.net/article/details/118008220)

5. [归并两个有序数组](https://goldenaarcher.blog.csdn.net/article/details/118040111)

6. [判断链表是否存在环](https://goldenaarcher.blog.csdn.net/article/details/118078119)

7. [最长子序列](https://goldenaarcher.blog.csdn.net/article/details/118098338)

通过这 7 题大概就对双指针的用法有了一定的感觉。对于双指针的应用题来说：

- 题目要有明确的开始和结尾——不一定要是索引，指的时首尾指针相遇就能结束循环迭代的条件
- 多以字符串、数组为题型
- 目前接触到的指针有首尾指针和快慢指针两种。

之前还做到过也是使用双指针可以完成的题目：

[27. Remove Element](https://leetcode.com/problems/remove-element/)

题目如下：

> Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` **in-place**. The relative order of the elements may be changed.
>
> Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.
>
> Return `k` _after placing the final result in the first `k` slots of `nums`_.
>
> Do **not** allocate extra space for another array. You must do this by **modifying the input array** in-place with $O(1)$ extra memory.

这道题大意说是会给一个数组和一个数字，然后删除数组中出现的数字，如：

nums = [0,1,2,2,3,0,4,2], val = 2

输出的结果为：5, nums = [0,1,4,0,3,_,_,_]

5 为题目中的 k，也就是数组的长度

这道题可以同样用快慢指针的方法去做，一个指针作为原数组的长度，一个指针作为被处理过后的数组长度：

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0,
    index = 0;
  while (index < nums.length) {
    if (nums[index] !== val) {
      nums[k++] = nums[index];
    }
    index++;
  }
  return k;
};

console.log(removeElement((nums = [3, 2, 2, 3]), (val = 3))); // 2
console.log(removeElement((nums = [0, 1, 2, 2, 3, 0, 4, 2]), (val = 2))); // 5
```

## 时间耗费及空间复杂度

通常来说，双指针的原理与遍历是一样的，因此双指针的时间复杂度是 $O(n)$，因为只需要额外的两个空间去储存指针，因此空间复杂度是 $O(1)$，这点在 remove element 这道题中也明确地被标了出来：

> You must do this by **modifying the input array** in-place with $O(1)$ extra memory.

最长子序列是特殊情况，它需要遍历每个子序列，以及包含所有子序列的数组，因此它的时间复杂度是 $O(m \cdot n)$，其中 $n$ 为子序列的长度，$m$ 为数组的长度。同理，因为需要额外的空间去储存最长子序列，因此它的空间复杂度是 $O(n)$。

到这里，基本上说双指针的题就刷的差不多了，下一步开始排序的学习。
