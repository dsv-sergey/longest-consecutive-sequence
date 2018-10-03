module.exports = function longestConsecutiveLength(array) {
  // your solution here
if (array.length == 0) return 0;
if (array.length == 1) return 1;

  let sortArr = array.sort((a, b) => a - b),
      count = 0,
      maxCount = 0;

  sortArr.forEach((el, index, arr) => {
    if (el == (arr[index + 1] - 1)) {
      count++;
      (count >= maxCount) ? maxCount = count + 1 : null;
    } else if (el == arr[index + 1]) {
      count = count;
    } else count = 0;
  });
  if (sortArr.length > 1 && maxCount == 0) {
    maxCount = 1;
  }
  return maxCount;
}
