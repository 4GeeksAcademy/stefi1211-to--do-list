import React, { useState } from 'react';
import Task from './component/Task';
import '../styles/TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, active: true }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
 <div>
      <h1> To Do List </h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Escribir una tarea'
        />
        <ul>
          {tasks.length === 0 ? (
            <p>No hay tareas, añadir tareas</p>
          ) : (
            tasks.map((task, index) => (
              <Task
                key={index}
                index={index}
                text={task.text}
                active={task.active}
                deleteTask={deleteTask}
              />
            ))
          )}
        </ul>
      </div>
  );
};
export default TodoList;


