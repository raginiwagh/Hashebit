import React, { useEffect, useState } from 'react';
import './todo.css';

const ToDo = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState(() => {
    const saved = sessionStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [editIndex, setEditIndex] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const name = prompt('Please enter your name:');
    setUsername(name || 'Guest');
  }, []);

  useEffect(() => {
    sessionStorage.setItem('tasks', JSON.stringify(list));
  }, [list]);

  const addOrEditTodo = () => {
    if (input.trim() === '') return;

    const timestamp = new Date().toLocaleString();
    const newTask = { text: input, time: timestamp };

    if (editIndex !== null) {
      const updatedList = [...list];
      updatedList[editIndex] = newTask;
      setList(updatedList);
      setEditIndex(null);
    } else {
      setList([...list, newTask]);
    }

    setInput('');
  };

  const deleteTodo = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const editTodo = (index) => {
    setInput(list[index].text);
    setEditIndex(index);
  };

  return (
    <div className='App'>
      <h1 className='heading'>Welcome, {username} 👋</h1>
      <div className='input'>
        <input
          type='text'
          className='input_box'
          placeholder='Enter your task'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='btn' onClick={addOrEditTodo}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>

      <ul className='list'>
        {list.map((todo, index) => (
          <li key={index}>
            <div>
              <span className='task-text'>{todo.text}</span>
              <span className='timestamp'>{todo.time}</span>
            </div>
            <div className='actions'>
              <button onClick={() => editTodo(index)}>✏️</button>
              <button onClick={() => deleteTodo(index)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
