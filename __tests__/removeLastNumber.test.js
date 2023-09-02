const removeLastNumber = require("../src/removeLastNumber");

describe("remove last number",()=>{
    test("Check empty array returns empty array",()=>{
        const input = []
        const result = removeLastNumber(input)
        expect(result).toEqual(input)
    })
    test("Check we create a new array",()=>{
        const input = [1,2,3]
        const result = removeLastNumber(input)
        expect(result).not.toBe(input)
    })
    test("check output has last number removed",()=>{
        const input = [1,2,3]
        const result = removeLastNumber(input)
        const expected = [1,2]
        expect(result).toEqual(expected)
    })
    test("Check we don't mutate the input",()=>{
        const input = [1,2,3]
        removeLastNumber(input)
        const expected = [1,2,3]
        expect(input).toEqual(expected)
    })
})