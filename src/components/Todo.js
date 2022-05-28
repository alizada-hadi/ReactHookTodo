import React from 'react'
import Task from './Task'
import Form from './Form'



function Todo() {
    const [tasks, setTasks] = React.useState([
        {
            title : "first task", 
            completed : true
        },
        {
            title : "second task", 
            completed : false
        },
        {
            title : "third task", 
            completed : false
        },
    ])
    const addTask = title => {
        const newTasks = [...tasks, {title : title, completed  : false}]
        setTasks(newTasks)
    }

    const completedTask = index => {
        const newTasks = [...tasks]
        if (newTasks[index].completed == true){
            newTasks[index].completed = false
        }
        else{
            newTasks[index].completed = true
        }
        setTasks(newTasks)
    }

    const removeTask = index => {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
    }


  return (
    <div className='container'>
        <h3 className='text-center'>Todo - Items</h3>
        {tasks.map((task, index) => (
            <Task 
            task={task} 
            index={index} 
            key={index}
            completedTask={completedTask}
            removeTask={removeTask}
            />
        ))}
        <Form addTask={addTask} />
    </div>
  )
}

export default Todo