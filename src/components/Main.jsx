import { useState } from "react";
import { StyledMain } from '../assets/styles/Main.styled';
import Todos from './Todos'
import Stats from './Stats'
import AddTodo from './AddTodo'

const Main = () => {
  const [todos, setTodos] = useState([
    { id: 1, checked: true, task: "walk the dog" },
    { id: 2, checked: false, task: "cook breakfast" },
    { id: 3, checked: false, task: "go to work" },
  ]);

  return (
    <StyledMain>
      <AddTodo todos={todos} onSetTodos={setTodos} />
      <Todos todos={todos} onSetTodos={setTodos} />
      <Stats todos={todos} />
    </StyledMain>
  );
}

export default Main