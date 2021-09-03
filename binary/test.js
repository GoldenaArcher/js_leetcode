/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 边界条件
  if (nums.length === 0) return [-1, -1];
  const firstPosition = findFirstPosition(nums, target);
  if (nums.length === 1) return [firstPosition, firstPosition];
  const lastPosition = findLastPosition(nums, target);
};

const getMid = (lo, hi) => {
  return Math.floor((lo + hi) / 2);
};

const findFirstPosition = (nums, target) => {
  let lo = 0,
    hi = nums.length - 1,
    mid;
  while (lo < hi) {
    mid = getMid(lo, hi);
    if (nums[mid] === target) {
      hi = mid;
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return nums[lo] === target ? lo : -1;
};

const findLastPosition = (nums, target) => {
  let lo = 0,
    hi = nums.length - 1,
    mid;
  while (lo < hi) {
    mid = getMid(lo, hi);
    if (nums[mid] === target) {
      lo = mid;
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
};

console.log(searchRange((nums = [5, 7, 7, 8, 8, 10]), (target = 8)));
console.log(searchRange((nums = [5, 7, 7, 8, 8, 10]), (target = 6)));
console.log(searchRange((nums = []), (target = 0)));
