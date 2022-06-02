import { Main } from '../utils/styles'
import Navbar from './Navbar'
import SideDrawer from './SideDrawer'

const Layout = ({ children }) => (
  <>
    <Navbar />
    <SideDrawer />
    <Main>{children}</Main>
  </>
)

export default Layout