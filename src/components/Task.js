import React from 'react'

function Task({task, completedTask, index, removeTask}) {
  return (
    <div className=''>
      <div className='my-2' style={{textDecoration : task.completed ? "line-through" : ""}}>
          <div className="row">
            <div className="col-lg-6">
              {task.title}
            </div>
            <div className="col-lg-6">
              <button className='btn float-right btn-primary mx-2 mb-3' onClick={() => completedTask(index)}>Complete</button>
              <button className='btn btn-danger float-right mx-2 mb-3' onClick={() => removeTask(index)}>Remove</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Task