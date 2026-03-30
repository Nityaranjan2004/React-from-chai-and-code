import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

//there should only one store in a project
export const store = configureStore({
    //here we go th the feature/todoSlice.js here all the reducre present
    reducer:todoReducer
})