import {useSelector, useDispatch} from 'react-redux'
import EditTodo from './EditTodo'
import { RootState } from './store'
import { deleteTodo, completeTodo, setEditStatus } from './todoListSlice'

const DisplayTodoList = () => {
    const todos = useSelector((state: RootState) => state.todoList.todosList)
    const dispatch = useDispatch()

  return (
    <div>
        {todos.map((i)=>(
            <div className='container mt-2'>
                <div key={i.id} className='d-flex justify-content-between border rounded'>
                    <div className='item'>
                        {(i.editStatus ? <EditTodo id={i.id}/> : <p>{i.todo}</p>)}
                    </div>
                    <div className='item'>
                        <button onClick={()=>dispatch(setEditStatus(i.id))} className="btn btn-outline-secondary">{i.editStatus? 'Close Editor' : 'Edit'}</button>
                        <button onClick={()=>dispatch(completeTodo(i.id))} className='btn btn-outline-success'>{i.completed? 'Undo' : 'Complete'}</button>
                        <button onClick={()=>dispatch(deleteTodo(i.id))} className="btn btn-outline-danger">Delete</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default DisplayTodoList