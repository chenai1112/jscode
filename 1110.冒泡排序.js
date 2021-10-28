let sortArray = function (nums) {
  let count = 0,
    sorted = true;
  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      count++;
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        sorted = false;
      }
    }
    if (sorted) {
      break;
    }
  }
  console.log(count);
  return nums;
};
