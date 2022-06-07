import styled from 'styled-components'

export const StyledTitle = styled.h1`
  margin-top: 0.75rem;
  font-weight: 700;
  text-transform: capitalize;
  color: ${(props) => props.theme.text.light};

  hr {
    color: ${(props) => props.theme.text.light};
    margin-bottom: 1rem;
  }
`;