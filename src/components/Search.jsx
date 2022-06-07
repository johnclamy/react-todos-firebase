import { StyledSearch } from '../assets/styles/Search.styled'
import { StyledSearchIcon } from '../assets/styles/SearchIcon.styled'
import SearchIcon from '../assets/icons/Search'
import Title from './Title'

const Search = ({ searchTerm = '', onSetSearchTerm = f => f }) => {
  return (
    <>
      <Title title="search" />
      <StyledSearch>
        <input
          role="searchbox"
          type="text"
          value={searchTerm}
          placeholder="search all todos..."
          onChange={(e) => onSetSearchTerm(e.target.value)}
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