import { useState, useRef } from 'react'
import { StyledForm } from '../assets/styles/Form.styled'
import { requestData, setOption } from '../api'
import Title from './Title'

const AddTodo = ({
  todos = [],
  onSetTodos = (f) => f,
  onSetError = (f) => f,
}) => {
  const [task, setTask] = useState("");
  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = { id, checked: false, task };
    const failedPostRequest = await requestData(setOption("POST", newTodo));

    onSetTodos([...todos, newTodo]);
    inputRef.current.focus();
    setTask("");
    if (failedPostRequest) {
      onSetError(failedPostRequest);
    }
  };

  return (
    <>
      <Title title="add a todo" />
      <StyledForm onSubmit={handleSubmit}>
        <input
          autoFocus
          ref={inputRef}
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="what to do next..."
          required
        />
        <button type="submit">add todo</button>
      </StyledForm>
    </>
  );
};

export default AddTodo