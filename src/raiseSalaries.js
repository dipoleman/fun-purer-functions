function raiseSalaries(arr,perIncrease){

    // const newArr = [...arr]

    // newArr.map((person)=>{
    //     person.salary = Math.round(person.salary*(100+perIncrease)/100,0)
    // })

    // return newArr

    const newArr = [...arr]
    

    const newArray2 = newArr.map((personOriginal)=>{
        
        const person = {...personOriginal}
        person.salary = Math.round(person.salary*(100+perIncrease)/100,0)
        return person
    })

    return newArray2
}

module.exports = raiseSalaries