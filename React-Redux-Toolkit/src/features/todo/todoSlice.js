import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    todo: []
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todo.push(todo);
        },
        removeTodo: (state, action) => {
            state.todo = state.todo.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoToUpdate = state.todo.find((todo) => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = text;
            }
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
