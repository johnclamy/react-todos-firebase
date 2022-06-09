import { useState, useEffect } from "react";
import { StyledLoading } from '../assets/styles/Loading.styles';
import { StyledMain } from '../assets/styles/Main.styled';
import { StyledError } from "../assets/styles/Error.styled";
import { fetchData } from '../api'
import { TODOS_API_URL } from "../constants";
import Todos from './Todos'
import Stats from './Stats'
import AddTodo from './AddTodo'
import Search from "./Search";

const isSearched = (term) => (item) =>
  !term || item.task.toLowerCase().includes(term.toLowerCase());

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const renderTodos = isLoading ?
    <StyledLoading>Loading data...</StyledLoading> : (    
    error ? <StyledError>{error}</StyledError> : (
    <>
      <Todos
        todos={todos.filter(isSearched(searchTerm))}
        onSetTodos={setTodos}
      />
      <Stats todos={todos} />
    </>)
  )

  // Load data from RESTful API on initialization
  useEffect(() => {
    setTimeout(() => {
      fetchData(TODOS_API_URL, setTodos, setError, setIsLoading);
    }, 2000)
  }, [])

  return (
    <StyledMain>
      <Search searchTerm={searchTerm} onSetSearchTerm={setSearchTerm} />
      <AddTodo todos={todos} onSetTodos={setTodos} />
      {renderTodos}
    </StyledMain>
  );
}

export default Main