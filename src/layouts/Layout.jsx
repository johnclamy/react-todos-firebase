import { Main } from '../utils/styles'
import Navbar from './Navbar'

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Main>{children}</Main>
  </>
)

export default Layout