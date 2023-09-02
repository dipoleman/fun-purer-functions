const myFilter = require("../src/myFilter");

describe("myFilter", () => {
    test("empty input array outputs empty array", () => {
        inputArr = [];
        const inputFunc = (x) => true;
        result = myFilter(inputArr, inputFunc);
        expect(result).toEqual([]);
      });
  test("func True returns copy of input", () => {
    inputArr = [1, 2, 3, 4];
    const inputFunc = (x) => true;
    result = myFilter(inputArr, inputFunc);
    expect(result).toEqual(inputArr);
  });
  test("func returns even numbers", () => {
    inputArr = [1, 2, 3, 4];
    const inputFunc = (x) => {
      if (x % 2 === 0) {
        return true;
      } else {
        return false;
      }
    };
    expected = [2, 4];
    result = myFilter(inputArr, inputFunc);
    expect(result).toEqual(expected);
  });
  test("check it does not mutate input array", () => {
    inputArr = [1, 2, 3, 4];
    const inputFunc = (x) => {
      if (x % 2 === 0) {
        return true;
      } else {
        return false;
      }
    };
    myFilter(inputArr, inputFunc);
    expect(inputArr).toEqual([1,2,3,4])
  });
});
