import React from 'react';

const ToDoForm = ({ todo, handleSubmit, handleChange }) => {
  return (
    <div className='todo-form'>
      <p>~ Today I need to ~</p>
      <span>
        <input onChange={ (e) => handleChange(e.target.value) } value={ todo } />
        <button onClick={ () => handleSubmit(todo) }>Submit</button>
      </span>
    </div>
  );
};

export default ToDoForm;
