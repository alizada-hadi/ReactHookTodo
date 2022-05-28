import React, { useState } from 'react'

function Form({addTask}) {
    const [values, setValues] = useState("");
    const handleSubmit = e => {
        e.preventDefault()
        if(!values){
            return;
        }
        addTask(values)
        setValues("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                className='form-control'
                value={values}
                placeholder="Set a todo"
                onChange={e => setValues(e.target.value)}
            />
        </form>
    </div>
  )
}

export default Form