import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    todo: string,
    id: number,
    completed: boolean
}

interface TodoArray {
    todosList : Todo[]
}

const initialState: TodoArray = {
    todosList: [
        {todo: 'check if working', id: 0, completed: false},
        {todo: 'It is', id: 2, completed: false}
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
            prepare: (todo: Todo) => {
                const id = Math.floor(Math.random()*1000)
                const completed = false
                return {payload: todo, id, completed}
            },
       },

       deleteTodo: (state, action: PayloadAction<number>) =>{
        state.todosList = state.todosList.filter(el => el.id !== action.payload)
       },

       completeTodo: (state, action: PayloadAction<number>) =>{
        state.todosList = state.todosList.map((el) => {
            if(el.id ===action.payload){
                return {...el,completed: !el.completed}
            }
            return el
        })
       }


    },
})

export const {addTodo, deleteTodo, completeTodo} = todoListSlice.actions
export default todoListSlice.reducer;



