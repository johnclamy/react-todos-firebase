import { useState } from 'react'
import { StyledSearch } from '../assets/styles/Search.styled'
import { StyledSearchIcon } from '../assets/styles/SearchIcon.styled'
import SearchIcon from '../assets/icons/Search'
import Title from './Title'
import { isSearched } from '../helper'

const Search = ({ todos = [], onSetTodos = f => f }) => {
  const [searchTerm, setSearchTerm] = useState('')

  console.log(searchTerm)

  return (
    <>
      <Title title="search" />
      <StyledSearch>
        <input
          role="searchbox"
          type="text"
          value={searchTerm}
          placeholder="search all todos..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button">
          <StyledSearchIcon>
            <SearchIcon />
          </StyledSearchIcon>
        </button>
      </StyledSearch>
    </>
  );
}

export default Search