function removeLastNumber(arr){


    // arr.pop()
    // return arr


    const newArr = [...arr]
    newArr.pop()
    return newArr
    
}

module.exports = removeLastNumber