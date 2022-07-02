import styled from 'styled-components'

const StyledNav = styled.nav`
  position: fixed;
  background-color: var(--secondary);
  padding: 0 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;

  @media ${({ theme }) => theme.media.xs} {
    display: none;
  }
`
export default StyledNav