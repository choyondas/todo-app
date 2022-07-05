import React from 'react';
import Todo from './Todo';
import './Todos.css'
const Todos = (props) => {

    return (
        <div className="todos">
            <h3>All Todos Here</h3>
            {props.todos.map((todo, index) => <Todo key={index} todo={ todo} />)}
        </div>
    );
};

export default Todos;