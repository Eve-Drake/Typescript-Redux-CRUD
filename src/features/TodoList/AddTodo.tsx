import {useState} from 'react'
import { addTodo } from './todoListSlice'
import { useDispatch } from 'react-redux'

const AddTodo = () => {
    const [todo, setTodo] = useState<string>('')
    const dispatch = useDispatch()

    const addTodoToArray =()=>{
        if(todo){
            dispatch(addTodo({todo: todo, id: Math.floor(Math.random()* 1000), completed: false}))
        }
        else{
            return
        }
        setTodo('')
    }
  return (
    <div>
        <input 
        placeholder='Add Todo'
        type='text'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button onClick={addTodoToArray}>Add Todo</button>
    </div>
  )
}

export default AddTodo