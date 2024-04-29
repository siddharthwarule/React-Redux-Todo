import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
import Update from './Update';

function TodoList() {
    const todoList = useSelector((state) => state.todo.todo); // Corrected
    const dispatch = useDispatch();

    const [updatedText,setUpdatedText]=useState("");

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id));
    };

    const handleUpdateTodo=(id,text)=>{
      
         dispatch(updateTodo(id,text))
       
    }

    return (
        <>
            <h4>To Do List</h4>
            <ul>
                {todoList.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() =>handleRemoveTodo(todo.id)}>Remove</button>
                        <button >update</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;
