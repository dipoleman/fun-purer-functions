const raiseSalaries = require("../src/raiseSalaries");

describe("function to raise the value of employees salaries",()=>{
    test("Check empty array returns empty array",()=>{
        const input = []
        const result = raiseSalaries(input,8)
        expect(result).toEqual(input)
    })
    test("Check we create a new array",()=>{
        const inputArr = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 },
          ]
        const result = raiseSalaries(inputArr)
        expect(result).not.toBe(inputArr)
    })
    test("Check the function calculates the correct answer",()=>{
        const inputArr = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 },
          ]
        const perChange = 10
        const result = raiseSalaries(inputArr,perChange)
        const expected = [
            { name: "Alice", salary: 3300 },
            { name: "Bob", salary: 2200 },
            { name: "Vel", salary: 4950 },
          ]
        expect(result).toEqual(expected)
    })
    test("Check the rounding up to nearest integer",()=>{
        const inputArr = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 },
          ]
        const perChange = 7.72
        const result = raiseSalaries(inputArr,perChange)
        const expected = [
            { name: "Alice", salary: 3232 },
            { name: "Bob", salary: 2154 },
            { name: "Vel", salary: 4847 },
          ]
        expect(result).toEqual(expected)
    })
    test("Check we don't mutate the input",()=>{
        const inputArr = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 },
          ]
        const perChange = 7.72
        raiseSalaries(inputArr,perChange)
        const expected = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 },
          ]
        expect(inputArr).toEqual(expected)
    })
})