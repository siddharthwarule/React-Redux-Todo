import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// Store configuration
const store = configureStore({
    reducer: {
        todo: todoReducer // Assuming todoReducer is the reducer for the 'todo' slice
    }
});

export default store;