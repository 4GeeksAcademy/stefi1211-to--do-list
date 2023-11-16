import React, { useState, useEffect } from 'react';
import '../styles/TodoList.css';
import InputTask from './component/InputTask.js';
import Task from './component/Task.js';


function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch('https://playground.4geeks.com/apis/fake/todos/user/stefi1211')
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        setCounter(data.length);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const updateList = (newList) => {
    setTasks(newList);
    setCounter(newList.length);

    
    syncWithAPI(newList);
  };

  const deleteAll = () => {
    setTasks([]);
    setCounter(0);


    syncWithAPI([]);
  };

  const syncWithAPI = (newList) => {
    fetch('https://playground.4geeks.com/apis/fake/todos/user/stefi1211', {
      method: 'PUT',
      body: JSON.stringify(newList),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => console.log('Data synchronized with API:', data))
      .catch((error) => console.error('Error syncing with API:', error));
  };



  return (
    <div className="App">
      <div className="center">
        <h1 className="display-4 fw-semibold">To do List</h1>
      </div>
      <div className="main page">
        <InputTask list={tasks} update={updateList} />
        {counter !== 0 ? (
          <Task list={tasks} update={updateList} />
        ) : (
          <div>
            <p className="lead list-group-item p-2 text-center">No hay tareas pendientes.</p>
          </div>
        )}
        {counter === 1 ? (
          <div className="containerCounter">
            <span className="counter">{counter} tarea</span>
          </div>
        ) : (
          <div className="containerCounter">
            <span className="counter">{counter} tareas</span>
          </div>
        )}
      </div>
      <div className="second page"></div>
      <div className="third page"></div>
      <div className="third page"></div>
      <div className="center">
        <button className="btn mt-3" onClick={deleteAll}>
          Eliminar todas las tareas
        </button>
      </div>
    </div>
  );
}

export default TodoList;
