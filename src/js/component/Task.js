import React from 'react';

function Task({ list, update }) {
  const deleteTask = (index) => {
    const newList = list.filter((_, i) => i !== index);
    update(newList);
  };

  return (
    <div>
      <ul className="list-group">
        {list.map((task, index) => (
          <li className="list-group-item lead" key={index}>
            {task.label}
            <div className="delete" onClick={() => deleteTask(index)}>
              <i className="fas fa-times"></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
