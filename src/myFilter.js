function myFilter(inputArr, func) {
  result = []
  inputArr.forEach((element) => {
    if (func(element)) {
      result.push(element);
    }
  });
  return result;
}

module.exports = myFilter;

