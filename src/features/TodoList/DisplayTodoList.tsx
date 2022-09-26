import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from './store'
import { deleteTodo, completeTodo } from './todoListSlice'

const DisplayTodoList = () => {
    const todos = useSelector((state: RootState) => state.todoList.todosList)
    const dispatch = useDispatch()
  return (
    <div>
        {todos.map((i)=>(
            <div key={i.id} className='todo'>
                <p>{i.todo}</p>
                <div className='buttons'>
                    <button onClick={()=>dispatch(deleteTodo(i.id))}>Delete</button>
                    <button onClick={()=>dispatch(completeTodo(i.id))}>{i.completed? 'Undo' : 'Complete'}</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default DisplayTodoList