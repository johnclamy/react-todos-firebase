import { useState } from "react"
import StyledDrawerContainer from "../assets/styles/components/StyledDrawerContainer"
import StyledDrawer from "../assets/styles/components/StyledDrawer"
import StyledMenu from "../assets/styles/components/StyledMenu"
import Logo from './Logo'
import DrawerIcon from './DrawerIcon'
import NavItems from './NavItems'

const Drawer = () => {
  const [isDrawerShown, setIsDrawerShown] = useState(false)
  const handleDrawerIconClick = () => setIsDrawerShown(!isDrawerShown)

  return (
    <>
      <StyledDrawerContainer>
        <StyledDrawer>
          <Logo />
          <DrawerIcon
            isDrawerShown={isDrawerShown}
            onDrawerIconClick={handleDrawerIconClick}
          />
        </StyledDrawer>
      </StyledDrawerContainer>
      <StyledMenu isDrawerShown={isDrawerShown}>
        <NavItems mobile onDrawerIconClick={handleDrawerIconClick} />
      </StyledMenu>
    </>
  );
}

export default Drawer