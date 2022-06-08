import { useState, useEffect } from "react";
import { StyledLoading } from '../assets/styles/Loading.styles';
import { StyledMain } from '../assets/styles/Main.styled';
import { StyledError } from "../assets/styles/Error.styled";
import { fetchData, isSearched } from '../helper'
import { TODOS_API_URL } from "../constants";
import Todos from './Todos'
import Stats from './Stats'
import AddTodo from './AddTodo'
import Search from "./Search";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const renderApp = error ?
    <StyledError>{error}</StyledError>
    : (isLoading ?
      <StyledLoading>Loading data...</StyledLoading>
      : (
      <>      
        <Search searchTerm={searchTerm} onSetSearchTerm={setSearchTerm} />
        <AddTodo todos={todos} onSetTodos={setTodos} />
        <Todos
          todos={todos.filter(isSearched(searchTerm))}
          onSetTodos={setTodos}
        />
        <Stats todos={todos} />
      </>
      )
    );

  // Load data from RESTful API on initialization
  useEffect(() => {
    setTimeout(() => {
      fetchData(TODOS_API_URL, setTodos, setError, setIsLoading);
    }, 2000)
  }, [])

  return <StyledMain>{renderApp}</StyledMain>;
}

export default Main