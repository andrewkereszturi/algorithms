var isValid = function (s) {
  const parenthesis = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  let arr = [];

  for (let char of s) {
    if (parenthesis[char]) {
      arr.push(char);
    } else if (parenthesis[arr.pop()] !== char) {
      return false;
    }
  }

  return arr.length === 0;
};
