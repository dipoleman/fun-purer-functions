const updateTasks = require("../src/updateTasks")

describe("Updates tasks",()=>{
    test("Empty obj should return empty object",()=>{
        const input = {};
        const result = updateTasks(input);
        expect(result).toEqual(input)
    })
    test("Check we create a new object",()=>{
        const inputObj = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }
        const result = updateTasks(inputObj)
        expect(result).not.toBe(inputObj)
    })
    test("Check function works",()=>{
        const inputObj = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }
        const result = updateTasks(inputObj,"read books", "tidy room")
        const expected = {
            name: 'Anat',
            tasks: ['feed Schnitzel', 'Go to pottery', 'read books', 'tidy room']
          }
    expect(result).toEqual(expected)
    })
})