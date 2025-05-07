// ToDoList.jsx
import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

const ToDoList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <table className="todo-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <ToDoItem 
            key={task.id} 
            task={task} 
            deleteTask={deleteTask} 
            toggleTaskCompletion={toggleTaskCompletion} 
          />
        ))}
      </tbody>
    </table>
  );
};

export default ToDoList;
