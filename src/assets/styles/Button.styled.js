import styled from 'styled-components'

export const StyledButton = styled.button`
  border-radius: 3px;
  border: none;
  box-shadow:  0 0 10px rgba(0, 0, 0, 0.15);
  font-size: inherit;
  font-weight: 400;
  padding : 2px 4px;
  color: ${(props) => props.textColour || "white"};
  background-color: ${(props) => props.bgColour || props.theme.text.loud};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;