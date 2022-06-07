import { useState } from "react";
import { StyledMain } from '../assets/styles/Main.styled';
import Todos from './Todos'
import Stats from './Stats'
import AddTodo from './AddTodo'
import Search from "./Search";

const Main = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')));

  return (
    <StyledMain>
      <Search todos={todos} onSetTodos={setTodos} />
      <AddTodo todos={todos} onSetTodos={setTodos} />
      <Todos todos={todos} onSetTodos={setTodos} />
      <Stats todos={todos} />
    </StyledMain>
  );
}

export default Main