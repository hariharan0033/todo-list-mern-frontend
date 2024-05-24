import axios from 'axios'
import React, { useState } from 'react'
import './CreateTodoItemComponent.css'

const CreateTodoItemComponent = () => {
    const [task, setTask] = useState("")

    const taskHandler = (event) => {
        setTask(event.target.value)
    }

    const dataAddHandler = () => {
        axios
            .post(`http://localhost:3500/api/v1/todo/add`,
            {todoItem : task})
            .then(response => {
                if (response.status == 201)
                {
                    window.location.reload();
                }
            })
            .catch(error => {
                alert(`Status (${error.response.status}) - ${error.response.data.message}`)
            })
    }

  return (
    <div className="create_form">
        <input
            type="text"
            placeholder="Enter a todo item"
            value={task}
            onChange={taskHandler}
        />
        <button type="submit" onClick={dataAddHandler}>Add</button>
        </div>
  )
}

export default CreateTodoItemComponent