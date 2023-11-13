import React, { useState } from 'react';

function InputTask({ list, update }) {
  const [value, setValue] = useState('');

  const saveValue = (event) => {
    if (event.key === 'Enter') {
      const newTask = {
        label: event.target.value,
        done: false,
      };

      const newList = [...list, newTask];
      update(newList);

      setValue(''); 
    }
  };

  return (
    <div>
      <input
        className="lead inputTask"
        type="text"
        placeholder="Agrega una tarea"
        value={value}
        onKeyPress={saveValue}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default InputTask;
