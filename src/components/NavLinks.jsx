import styled from 'styled-components'
import NavLinkItem from './NavLinkItem'

const Nav = styled.nav`
display: flex;
margin-top: ${props => (props.mobile ? '-6rem' : null)}
`;

const List = styled.ul`
  display: flex;
  flex-direction: ${props => (props.mobile ? 'column' : 'row')}
  align-items: center;
  height: 100%;
`;

const NavLinks = ({ mobile, onClick }) => (
  <Nav mobile={mobile}>
    <List mobile={mobile}>
      <NavLinkItem mobile={mobile} onClick={onClick} link='/'>
        Home
      </NavLinkItem>
      <NavLinkItem mobile={mobile} onClick={onClick} link='/todos'>
        Todos
      </NavLinkItem>
    </List>
  </Nav>
)

export default NavLinks