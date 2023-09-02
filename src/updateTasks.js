function updateTasks(obj, ...tasks){

    const newObj = {...obj}

    tasks.forEach((task)=>{
        newObj.tasks.push(task)
    })
    return newObj
}



module.exports = updateTasks;