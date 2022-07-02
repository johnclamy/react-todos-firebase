import StyledListItem from '../assets/styles/components/StyledListItem'
import StyledNavLink from '../assets/styles/components/StyledNavLink'

const NavItem = ({ link, children, mobile, onDrawerIconClick }) => (
  <StyledListItem>
    <StyledNavLink
      exact
      to={link}
      onClick={onDrawerIconClick}
      activeClassName="active"
      mobile={mobile ? 1 : 0}
    >
      {children}
    </StyledNavLink>
  </StyledListItem>
);

export default NavItem