const cloneObject = require("../src/cloneObject");

describe("cloneObject", () => {
  test("empty objects returns empty object", () => {
    result = cloneObject({}, {});
    expect(result).toEqual({});
  });
  test("function mutates target ", () => {
    target = { a: 3, b: 8, d: 19 };
    source = { a: 2, b: 7, c: 3 };
    result = cloneObject(target, source);
    expect(target).toEqual({ a: 2, b: 7, c: 3, d: 19 });
  });
  test("function works as expected ", () => {
    target = { a: 3, b: 8, d: 19 };
    source = { a: 2, b: 7, c: 3 };
    result = cloneObject(target, source);
    expect(result).toEqual({ a: 2, b: 7, c: 3, d: 19 });
  });
});
