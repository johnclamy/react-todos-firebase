import styled from 'styled-components'

export const StyledListItem = styled.li`
  margin: 5px 0;
  padding: 12px 6px;
  background-color: ${(props) => props.theme.bg.light};
  color: ${(props) => props.theme.text.dark}
`;