import React, { useState } from 'react';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const ToDo = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "menyapu", complete: false },
    { id: 2, task: "mengepel", complete: true },
  ]);
  const [todo, setTodo] = useState("");

  const handleClick = (todo) => {
    const newTodo = {
      id: +new Date(), 
      task: todo, 
      complete: false
    }
    setTodos([ ...todos, newTodo ]);
  }

  const handleSubmit = (todo) => {
    handleClick(todo);
    setTodo("");
  }

  const handleChange = todo => {
    setTodo(todo);
  }

  const handleCheckbox = index => {
    alert(`checkbox index ${index} is checked`);
  }

  return (
    <div className='todo'>
      <h2 className='title'>To-Do List</h2>
      <ToDoForm todo={ todo } handleSubmit={ handleSubmit } handleChange={ handleChange } />
      <ToDoList todos={ todos } handleCheckbox={ handleCheckbox } />
    </div>
  );
};

export default ToDo;
