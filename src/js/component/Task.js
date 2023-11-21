import React from 'react';
import "../../styles/TodoList.css"
    

function Task({ list, update }) {
  const toggleDone = (index) => {
    const newList = list.map((task, i) => (i === index ? { ...task, done: !task.done } : task));
    update(newList);
  };

  const deleteTask = (index) => {
    const newList = list.filter((_, i) => i !== index);
    update(newList);
  };

  return (
    <div>
      <ul className="list-group">
        {list.map((task, index) => (
          <li className={`list-group-item lead ${task.done ? 'done' : ''}`} key={index}>
            {task.label}
              <div className="delete" onClick={() => deleteTask(index)}>
                <i className="fas fa-times"></i>
              </div>
              {!task.done && (
                <div className="check" onClick={() => toggleDone(index)}>
                  <i className="fas fa-check"></i>
                </div>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;


