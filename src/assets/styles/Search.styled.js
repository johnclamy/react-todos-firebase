import styled from "styled-components";

export const StyledSearch = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  background-color: ${(props) => props.theme.bg.grey};
  border: 2px solid ${(props) => props.theme.border.dark};
  border-radius: 3px;
  padding: 0;

  input {
    width: 88%;
    margin: 5px;
    padding: 10px;
    background-color: ${(props) => props.theme.bg.light};
    color: ${(props) => props.theme.text.dark};
    font-size: 1.5rem;
    font-style: italic;
  }

  button {
    width: 12%;
    border: none;
    color: black;
    text-transform: uppercase;
    background-color: gold;
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;

    &:hover {
      background-color: yellow;
    }
  }
`;
