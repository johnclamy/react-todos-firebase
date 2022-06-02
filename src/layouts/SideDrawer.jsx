import { useState } from 'react'
import styled from 'styled-components'

import Logo from '../components/Logo'
import NavLinks from '../components/NavLinks'
import MenuButton from '../components/MenuButton'

const Wrapper = styled.div`
  position: fixed;
  background-color: var(--secondary);
  padding: 0rem 2rem;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: none;

  @media ${(props) => props.theme.media.xs} {
    display: flex;
  }
`;

const NavItems = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  height: 100vh;
  background-color: var(--secondary);
  visibility: ${(props) => (props.opened ? "visible" : "hidden")};
  transform: translateY(${(props) => (props.opened ? "0%" : "-100%")});
  transition: all 0.1s cubic-bezier(0.445, 0, 05, 0.55, 0.95);
  display: none;

  @media ${(props) => props.theme.media.xs} {
    display: flex;
  }
`;

const SideDrawer = () => {
const [isOpened, setIsOpened] = useState(false)

  return (
    <>
      <Wrapper>
        <NavItems>
          <Logo />
          <MenuButton
            opened={isOpened}
            onClick={() => setIsOpened(!isOpened)}
          />
        </NavItems>
      </Wrapper>
      <Menu opened={isOpened}>
        <NavLinks mobile onClick={() => setIsOpened(false)} />
      </Menu>
    </>
  );
}

export default SideDrawer