/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 异或 a ^ b ^ a = b.
  var ret = 0;
  nums.forEach(function (num) {
    ret ^= num;
  });
  return ret;
};
