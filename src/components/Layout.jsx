import StyledMain from "../assets/styles/components/StyledMain";
import Navbar from "./Navbar"
import Drawer from "./Drawer"

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Drawer />
    <StyledMain>{children}</StyledMain>
  </>
)

export default Layout