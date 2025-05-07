// ToDoItem.jsx
import React from 'react';
import './ToDoItem.css';

const ToDoItem = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <tr>
      <td 
        className={task.completed ? 'completed' : ''}
      >
        {task.text}
      </td>
      <td>
        <button className="complete-button" onClick={() => toggleTaskCompletion(task.id)}>Complete</button>
        <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
      </td>
    </tr>
  );
};

export default ToDoItem;
