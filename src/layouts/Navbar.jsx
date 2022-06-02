import styled from 'styled-components'

import { Container } from '../utils/styles'
import Logo from '../components/Logo'
import NavLinks from '../components/NavLinks'

const Wrapper = styled.div`
  position: fixed;
  background-color: var(--primary-bg);
  padding: 0 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;

  @media ${(prosp) => prosp.theme.media.xs} {
    display: none;
  }
`;

const NavItems = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <NavItems>
          <Logo />
          <NavLinks />
        </NavItems>
      </Container>
    </Wrapper>
  );
}

export default Navbar