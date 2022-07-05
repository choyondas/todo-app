import React, { useState } from 'react';

import './NewTodo.css';
const NewTodo = (props) => {
    const [todo, setTodo]= useState("")


    const handleAddTodo = (e) => {
        e.preventDefault();
        
        props.onTodos(todo)

        setTodo("")
      
    
    }
    const handleChange = (e) => {
        setTodo(e.target.value);
        
    }


    return (
        <div>
            <form onSubmit={handleAddTodo}>

                <div>
                    <label htmlFor="todo">New Todo: </label>
                    <input onChange={handleChange} type="text" id='todo' name ="todo" value ={todo} />

                </div>
                <button type="submit">Add Todo</button>

            </form>
            <br />
            <br />
        </div>
    );
};

export default NewTodo;