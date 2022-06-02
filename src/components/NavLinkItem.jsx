import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const ListItem = styled.li`
  display: flex;
  height: 100%;
`

const StyledNavLinkItem = styled(NavLink)`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  border-bottom: ${(props) =>
    props.mobile ? "1px solid transparent" : "2px solid transparent"};
  margin: ${(props) => (props.mobile ? "2rem 0" : "0 1rem")};
  padding: ${(props) => (props.mobile ? ".5rem 1rem" : "1rem")};
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--dark);
  transition: all 0.2s;

  &hover {
    border-bottom: ${(props) =>
      props.mobile
        ? "1px solid var(--primary)"
        : "2px solid var(--dark)"};
  }

  &active {
    border-bottom: ${(props) =>
      props.mobile
        ? "1px solid var(--primary)"
        : "2px solid var(--dark)"};
  }
`;

const NavLinkItem = ({ link, children, mobile, onClick }) => (
  <ListItem>
    <StyledNavLinkItem
      onClick={onClick}
      exact
      activeClassName='active'
      mobile={mobile ? 1 : 0}
      to={link}
    >
      {children}
    </StyledNavLinkItem>
  </ListItem>
)

export default NavLinkItem