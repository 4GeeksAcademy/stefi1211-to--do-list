import React from 'react';

function Task({ index, text, active, deleteTask }) {
  return (
    <li>
      {text}
      {active && (
        <span onClick={() => deleteTask(index)} style={{ marginLeft: '10px', cursor: 'pointer' }}>
          🗑️
        </span>
      )}
    </li>
  );
}

export default Task;

