import React, { useReducer, useState } from 'react';

const initialState = {
  todos: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      if (!action.payload.trim()) return state; // Prevent empty todos
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false }
        ]
      };
    case 'toggle':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case 'delete':
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'clear_completed':
      return {
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
}

export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState('');

  const handleAdd = () => {
    dispatch({ type: 'add', payload: newTodo });
    setNewTodo('');
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', textAlign: 'center' }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Enter new task"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleAdd()}
        style={{ padding: '8px', width: '70%' }}
      />
      <button onClick={handleAdd} style={{ padding: '8px 12px', marginLeft: 8 }}>
        Add
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: 20 }}>
        {state.todos.map(todo => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              marginBottom: 10,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#000000ff',
              padding: '8px 12px',
              borderRadius: 4,
            }}
          >
            <span
              onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
              style={{ cursor: 'pointer', flexGrow: 1, textAlign: 'left' }}
              title="Click to toggle complete"
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: 'delete', payload: todo.id })}
              style={{
                marginLeft: 10,
                background: 'red',
                border: 'none',
                color: 'white',
                borderRadius: 4,
                cursor: 'pointer',
                padding: '4px 8px'
              }}
              title="Delete task"
            >
              X
            </button>
          </li>
        ))}
      </ul>

      {state.todos.some(todo => todo.completed) && (
        <button
          onClick={() => dispatch({ type: 'clear_completed' })}
          style={{
            marginTop: 20,
            padding: '8px 12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer'
          }}
        >
          Clear Completed Tasks
        </button>
      )}
    </div>
  );
}
