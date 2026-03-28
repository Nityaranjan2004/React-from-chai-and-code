import { createContext,useContext } from "react";

//creating a context object
export const TodoContext = createContext({
    todos:[
        {//these are the main propertied
            id:1,
            todo:"Todo message",
            completed:false
        }
    ],//these are the functionalities
    addTodo : (todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});

export const useTodo = ()=>{
    //we have to provide a context value to the useContext hook
    return useContext(TodoContext);
}

export const Todoprovider = TodoContext.Provider;