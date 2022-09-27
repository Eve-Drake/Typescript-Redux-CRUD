import {useState} from 'react'
import { addTodo } from './todoListSlice'
import { useDispatch } from 'react-redux'

const AddTodo = () => {
    const [text, setText] = useState<string>('')
    const dispatch = useDispatch()

    const addTodoToArray =()=>{
        if(text){
            dispatch(addTodo(text))
        }
        else{
            return
        }
        setText('')
    }
  return (
    <div className="input-group">
        <input type="text" 
            className="form-control" 
            placeholder='Add Todo'
            aria-label='Add Todo'         
            value={text}
            onChange={(e)=>setText(e.target.value)}
            aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary" onClick={addTodoToArray} type="button" id="button-addon2">Add</button>
    </div>
  )
}

export default AddTodo