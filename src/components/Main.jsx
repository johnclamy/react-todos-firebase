import { useState } from "react";
import { StyledMain } from '../assets/styles/Main.styled';
import Todos from './Todos'

const Main = () => {
  const [todos, setTodos] = useState([
    { id: 1, checked: true, task: "walk the dog" },
    { id: 2, checked: false, task: "cook breakfast" },
    { id: 3, checked: false, task: "go to work" },
  ]);

  return (
    <StyledMain>
      <Todos todos={todos} onSetTodos={setTodos} />
    </StyledMain>
  );
}

export default Main