import { createSlice,nanoid } from "@reduxjs/toolkit";

//this is state
const initialState = {
    todos:[{id:1,text:"hello world"}]
}

// function sayhello(){
//     console.log("hello world");
// }

export const todoSlice = createSlice({
    //for creating a Slice we need three things name,initialstate,reducer
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            //this is action define
            const todo={
                id:nanoid(),
                text:action.payload
            }
            //push action in to the state
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        }
    }
})

//for exporting we need indivital functionality
export const {addTodo,removeTodo} = todoSlice.actions
//all reducer main source
export default todoSlice.reducer