import { useState } from 'react'
import { StyledForm } from '../assets/styles/Form.styled'
import { saveAndRender } from '../helper'

const AddTodo = ({ todos = [], onSetTodos = f => f }) => {
  const [task, setTask] = useState('');

  const handleSubmit = e => { 
    e.preventDefault();
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newTodos = [...todos, { id, checked: false, task }];
    saveAndRender(onSetTodos, 'todos', newTodos);
    setTask('');
  }
 
  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="what to do next..."
        required
      />
      <button type="submit">
        add todo
      </button>
    </StyledForm>
  );
}

export default AddTodo