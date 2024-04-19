import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function TodoList() {
    const todoList = useSelector((state) => state.todo.todo); // Corrected
    const dispatch = useDispatch();

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id));
    };

    return (
        <>
            <h4>To Do List</h4>
            <ul>
                {todoList.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;
