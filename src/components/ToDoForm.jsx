import React from 'react';
import { Button, TextField } from '@mui/material';

const ToDoForm = ({ todo, handleSubmit, handleChange }) => {
  return (
    <div className='todo-form'>
      <p>~ Today I need to ~</p>
      <span>
        <TextField onChange={ (e) => handleChange(e.target.value) } value={ todo } label="Add Todo" variant="outlined" />
        <Button onClick={ () => handleSubmit(todo) } variant="contained">Submit</Button>
      </span>
    </div>
  );
};

export default ToDoForm;
