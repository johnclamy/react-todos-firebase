import styled from 'styled-components'

export const StyledError = styled.p`
  margin: 0.5rem 0;
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.theme.text.loud};
  border: 2px solid ${props => props.theme.border.loud};
  text-align: center;
`