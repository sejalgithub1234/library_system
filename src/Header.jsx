// Header.jsx
import React, { useState } from 'react';
import './Header.css';

const Header = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <header className="header">
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Add a new task" 
          className="task-input"
        />
        <button type="submit" className="add-button">Add</button>
      </form>
    </header>
  );
};

export default Header;
