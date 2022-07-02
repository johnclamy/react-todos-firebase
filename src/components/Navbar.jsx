import StyledNav from "../assets/styles/components/StyledNav"
import StyledNavbar from "../assets/styles/components/StyledNavbar"
import StyledContainer from "../assets/styles/components/StyledContainer"
import NavItems from './NavItems'
import Logo from './Logo'

const Navbar = () => (
  <StyledNav>
    <StyledContainer>
      <StyledNavbar>
        <Logo />
        <NavItems />
      </StyledNavbar>
    </StyledContainer>
  </StyledNav>  
)

export default Navbar