import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    todo: string,
    id: number,
    completed: boolean,
    editStatus: boolean
}

interface TodoArray {
    todosList : Todo[]
}

interface EditTodo{
    text : string,
    id: number
}
const initialState: TodoArray = {
    todosList: [
        {todo: 'Typescript - redux todo list', id: 0, completed: false, editStatus: false},
        {todo: 'Finish Styling', id: 2, completed: false, editStatus: false}
    ],
}


   
export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers:{
       addTodo : {
            reducer: (state, action: PayloadAction<Todo>) => {
                state.todosList.push(action.payload)
            },
            prepare: (todo: string) => {
                const id = Math.floor(Math.random()*1000)
                const completed = false
                const editStatus = false
                return { payload: {todo, id, completed, editStatus}}
            },
       },

       deleteTodo: (state, action: PayloadAction<number>) =>{
        state.todosList = state.todosList.filter(el => el.id !== action.payload)
       },

       completeTodo: (state, action: PayloadAction<number>) =>{
        state.todosList = state.todosList.map((el) => {
            if(el.id === action.payload){
                return {...el, completed: !el.completed}
            }
            return el
        })
       },
       editTodoArrayItem: (state, action: PayloadAction<EditTodo>) =>{
        state.todosList = state.todosList.map((el)=> {
            if(el.id === action.payload.id){
                return {...el, todo: action.payload.text, editStatus: false}
            }
            return el
        })
       },
       setEditStatus : (state, action: PayloadAction<number>) =>{
        state.todosList = state.todosList.map((el) => {
            if(el.id === action.payload){
                return {...el, editStatus: !el.editStatus}
            }
            return el
        })
       }


    },
})

export const {addTodo, deleteTodo, completeTodo, setEditStatus, editTodoArrayItem} = todoListSlice.actions
export default todoListSlice.reducer;



