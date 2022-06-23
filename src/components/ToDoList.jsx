import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

const ToDoList = ({ todos, handleCheckbox }) => {
  return (
    <div className='todo-list'>
      <List>
        {
          todos.map((todo, index) => ( 
            <ListItem key={ index } disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox disableRipple onChange={ () => handleCheckbox(index) } />
                </ListItemIcon>

                <ListItemText primary={ todo.task } />
              </ListItemButton>
            </ListItem> 
          ))
        }
      </List>
    </div>
  );
};

export default ToDoList;
