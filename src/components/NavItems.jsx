import StyledUnorderedList from '../assets/styles/components/StyledUnorderedList'
import StyledNavItems from '../assets/styles/components/StyledNavItems'
import NavItem from './NavItem'

const NavItems = ({ mobile, onDrawerIconClick }) => (
  <StyledNavItems mobile={mobile}>
    <StyledUnorderedList mobile={mobile}>
      <NavItem mobile={mobile} onDrawerIconClick={onDrawerIconClick} link="/">
        home
      </NavItem>
      <NavItem mobile={mobile} onDrawerIconClick={onDrawerIconClick} link="/todos">
        todos
      </NavItem>
    </StyledUnorderedList>
  </StyledNavItems>
);

export default NavItems