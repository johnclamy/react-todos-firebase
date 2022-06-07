import { useState } from "react";
import { StyledMain } from '../assets/styles/Main.styled';
import { isSearched } from '../helper'
import Todos from './Todos'
import Stats from './Stats'
import AddTodo from './AddTodo'
import Search from "./Search";

const Main = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos'))
  );
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <StyledMain>
      <Search
        searchTerm={searchTerm}
        onSetSearchTerm={setSearchTerm}
      />
      <AddTodo todos={todos} onSetTodos={setTodos} />
      <Todos
        todos={todos.filter(isSearched(searchTerm))}
        onSetTodos={setTodos}
      />
      <Stats todos={todos} />
    </StyledMain>
  );
}

export default Main