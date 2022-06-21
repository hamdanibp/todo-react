import React, { useState } from 'react';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const ToDo = () => {
  const [todos, setTodos] = useState(["menyapu", "mengepel", "memasak"]);
  const [todo, setTodo] = useState("");

  const handleClick = (todo) => {
    setTodos([ ...todos, todo ]);
  }

  const handleSubmit = (todo) => {
    handleClick(todo);
    setTodo("");
  }

  const handleChange = todo => {
    setTodo(todo);
  }

  return (
    <div className='todo'>
      <h2 className='title'>To-Do List</h2>
      <ToDoForm todo={ todo } handleSubmit={ handleSubmit } handleChange={ handleChange } />
      <ToDoList todos={ todos } />
    </div>
  );
};

export default ToDo;
