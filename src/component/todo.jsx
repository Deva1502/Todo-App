// Todo.js
import React, { useState, useEffect } from 'react';
import pic from './th.jpeg';
// import './App.css';

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputData.trim()) {
      setTodos([...todos, inputData]);
      setInputData('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <div className="input-section">
        <div className="child-div">
          <figure>
            <img src={pic} alt="todologo" className="logo" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Item..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
          </div>
        </div>
      </div>
      <div className="list-section">
        <div className="child-div">
          <h3>Your Todos</h3>
          <div className="showItems">
            {todos.map((todo, index) => (
              <div key={index} className="eachItem">
                <h3>{todo}</h3>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
