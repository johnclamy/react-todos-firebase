import styled from 'styled-components'

export const StyledForm = styled.form`
  margin-bottom: 3rem;
  background-color: ${(props) => props.theme.bg.grey};
  border: 2px solid ${(props) => props.theme.border.dark};
  border-radius: 3px;
  padding: 0.5rem 0.25rem;

  input {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    background-color: ${(props) => props.theme.bg.light};
    color: ${(props) => props.theme.text.dark};
    font-size: 1.5rem;
    font-style: italic;
  }

  button {
    width: 100%;
    border: none;
    padding: 12px;
    color: white;
    text-transform: uppercase;
    background-color: rgb(0, 115, 0, 0.85);
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;

    &:hover {
      background-color: rgb(0, 135, 0);
    }
  }
`;