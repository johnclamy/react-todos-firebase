import { useState } from "react";
import { StyledMain } from '../assets/styles/Main.styled';
import Todos from './Todos'
import Stats from './Stats'
import AddTodo from './AddTodo'

const Main = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')));

  return (
    <StyledMain>
      <AddTodo todos={todos} onSetTodos={setTodos} />
      <Todos todos={todos} onSetTodos={setTodos} />
      <Stats todos={todos} />
    </StyledMain>
  );
}

export default Main