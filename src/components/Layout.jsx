import StyledWrapper from "../assets/styles/components/StyledWrapper";
import StyledContainer from "../assets/styles/components/StyledContainer";
import StyledMain from "../assets/styles/components/StyledMain";
import StyledFooterWrapper from "../assets/styles/components/StyledFooterWrapper";
import Navbar from "./Navbar"
import Drawer from "./Drawer"
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <StyledWrapper>
      <Navbar />
      <Drawer />
      <StyledMain>{children}</StyledMain>
    </StyledWrapper>
    <StyledContainer>
      <StyledFooterWrapper>
        <Footer />
      </StyledFooterWrapper>
    </StyledContainer>
  </>
);

export default Layout