import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;
        dispatch(addTodo(text));
        setText(''); // Clear input after submitting
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter the todo name"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default AddTodo;
