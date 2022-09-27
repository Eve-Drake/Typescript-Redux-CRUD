import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { editTodoArrayItem } from './todoListSlice'

interface Props {
    id : number
}

const EditTodo = ({id}: Props) => {

    const [text, setText] = useState<string>('')
    const dispatch = useDispatch()

    const editTodoToArray =()=>{
        if(text){
            dispatch(editTodoArrayItem({text, id}))
        }
        else{
            alert('Please Edit your Todo')
        }
    }

  return (
    <div className="input-group">
        <input type="text" 
            className="form-control" 
            placeholder='Edit Todo'
            aria-label='Edit Todo'         
            value={text}
            onChange={(e)=>setText(e.target.value)}
            aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary" onClick={editTodoToArray} type="button" id="button-addon2">Save Edit</button>
    </div>

  )
}

export default EditTodo