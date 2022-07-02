import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  border-bottom: ${({ mobile }) =>
    mobile ? "1px solid transparent" : "2px solid transparent"};
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--white);
  margin: ${({ mobile }) => (mobile ? "2rem 0" : "0 1rem")};
  padding: ${({ mobile }) => (mobile ? ".5rem 1rem" : "1rem")};
  transition: all 0.2s;

  &:hover {
    border-bottom: ${({ mobile }) =>
      mobile ? "1px solid var(--white)" : "2px solid var(--white)"};
  }

  &:active {
    border-bottom: ${({ mobile }) =>
      mobile ? "1px solid var(--white)" : "2px solid var(--white)"};
  }
`;

export default StyledNavLink
