import styled from 'styled-components'

export const StyledText = styled.p`
  margin-bottom: 0;
  font-weight: inherit;
  font-size: 1.1rem;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.text.loud};
    letter-spacing: 1px;
    word-spacing: 2px;
  }
`