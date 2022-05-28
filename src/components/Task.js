import React from 'react'

function Task({task, completedTask, index, removeTask}) {
  return (
    <div className=''>
      <div className='my-2' style={{textDecoration : task.completed ? "line-through" : ""}}>
          {task.title}
      </div>
          <button className='btn btn-primary mx-2 mb-3' onClick={() => completedTask(index)}>Complete</button>
          <button className='btn btn-danger mx-2 mb-3' onClick={() => removeTask(index)}>Remove</button>
    </div>
  )
}

export default Task