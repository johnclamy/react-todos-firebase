import styled from "styled-components";

const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: ${({ mobile }) => mobile ? 'column' : 'row'};
  align-items: center;
  height: 100%;
`

export default StyledUnorderedList