import React, { useState } from 'react';
import NewTodo from './NewTodo';
import Todos from './Todos';



const dummyTodos = ["todo1", "TODO2"];

const Home = () => {

    const [todos, setTodos] = useState(dummyTodos);

    const handleTodos = (newTodo) => {
        setTodos([...todos, newTodo]);
    }
    

    
    return (
      <div>
        <NewTodo onTodos={handleTodos} />
        <Todos todos={todos} />
      </div>
    );
};

export default Home;