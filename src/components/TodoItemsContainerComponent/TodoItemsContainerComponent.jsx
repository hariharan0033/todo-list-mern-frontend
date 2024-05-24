import React, { useEffect, useState } from 'react'
import CreateTodoItemComponent from '../CreateTodoItemComponent/CreateTodoItemComponent'
import axios from 'axios'
import {BsCircleFill, BsFillTrashFill, BsFillCheckCircleFill} from 'react-icons/bs';
import './TodoItemsContainerComponent.css'

const TodoItemsContainerComponent = () => {
    const [todoItems, setTodoItems] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:3500/api/v1/todo/`)
            .then(response => setTodoItems(response.data))
            .catch(error => console.log(error))
    }, [])

    const editHandler = (id) => {
        axios
            .put(`http://localhost:3500/api/v1/todo/${id}`)
            .then(response => {
                if (response.status == 200)
                {
                    window.location.reload();
                }
            })
            .catch(error => {
                alert(`Status (${error.response.status}) - ${error.response.data.message}`)
            })
    }

    const deleteHandler = (id) => {
        axios
            .delete(`http://localhost:3500/api/v1/todo/${id}`)
            .then(response => {
                if (response.status == 200)
                {
                    window.location.reload();
                }
            })
            .catch(error => {
                alert(`Status (${error.response.status}) - ${error.response.data.message}`)
            })
    }

  return (
    <div className="home">
        
        <CreateTodoItemComponent/>

        {todoItems.length === 0 ?
        <div><h2>No Record</h2></div> :
        todoItems.map((todo, index) => (
            <div className='todoItem' key={index}>
                <div className="checkbox" onClick={()=>editHandler(todo._id)}>
                    {todo.done ? 
                    <BsFillCheckCircleFill className='icon'/> :
                    <BsCircleFill className='icon'/>}
                    
                    <p className={todo.done ? "crossed_out" : ""}>{todo.todoItem}</p>
                </div>
                
                <div>
                    <span><BsFillTrashFill className='icon' onClick={() => deleteHandler(todo._id)}/></span>
                </div>
            </div>
        ))}
    </div>
  )
}

export default TodoItemsContainerComponent