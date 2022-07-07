import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  padding: 1.2rem 1.8rem;
  font-size: 1.4rem;
  color: var(--white);
  background-color: var(--primary);
  outline: none;
  border: none;
  text-transform: capitalize;

  ${({ primary }) =>
    primary &&
    css`
      color: #fff;
      background-color: #457b9d;
    `}
`;

export default StyledButton