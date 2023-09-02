const myMap = require('../src/myMap')

describe('myMap',()=>{
    test('const func returns copy of input',()=>{
        inputArr = [1,2,3,4]
        const inputFunc = x => x;
        result = myMap(inputArr,inputFunc)
        expect(result).toEqual(inputArr)
    })
    test('function should not mutate input array',()=>{
        inputArr = [1,2,3,4]
        const inputFunc = x => x;
        myMap(inputArr,inputFunc)
        expect(inputArr).toEqual([1,2,3,4])
    })
    test('function works correctly',()=>{
        inputArr = [1,2,3,4]
        const inputFunc = x => x*x;
        result = myMap(inputArr,inputFunc)
        expect(result).toEqual([1,4,9,16])
    })
})