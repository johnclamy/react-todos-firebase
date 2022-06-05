import styled from 'styled-components'

export const List = styled.ul`
  border: 2px solid ${(props) => props.theme.bg.dark};
  background-color: ${(props) => props.theme.bg.grey};
  border-radius: 3px;
  padding: 0.5rem 0.25rem;
  list-style-type: none;
`;