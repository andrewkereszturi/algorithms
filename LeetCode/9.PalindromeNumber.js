var isPalindrome = function (x) {
  let arr = x.toString().split("");

  while (arr.length > 1) {
    if (arr.pop() !== arr.shift()) {
      return false;
    }
  }
  return true;
};
