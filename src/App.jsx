// App.jsx
import React, { useState } from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h1>To-Do List</h1>
      </nav>
      <div style={{ padding: '20px' }}>
        <Header addTask={addTask}/>
        <ToDoList tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />
      </div>
    </div>
  );
};

export default App;
