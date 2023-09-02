function myMap(inputArr, func) {
  outArr = [];
  inputArr.forEach((element) => {
    outArr.push(func(element));
  });
  return outArr;
}

module.exports = myMap;
