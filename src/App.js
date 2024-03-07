import React, { useState } from 'react';
import './App.css'; 

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Enter task"
        />
        <button className="btn btn-primary" onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className={`list-group-item ${task.completed ? 'completed' : ''}`}>
            <span className={task.completed ? 'completed-text' : ''}>{task.text}</span>
            <div className="buttons">
              <button className="btn btn-success" onClick={() => handleToggleComplete(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button className="btn btn-danger" onClick={() => handleRemoveTask(task.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
