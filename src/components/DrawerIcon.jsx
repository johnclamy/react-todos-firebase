import StyledDrawerIcon from "../assets/styles/components/StyledDrawerIcon"

const DrawerIcon = ({ isDrawerShown, onDrawerIconClick }) => (
  <StyledDrawerIcon isDrawerShown={isDrawerShown} onClick={onDrawerIconClick}>
    <span />
    <span />
    <span />
    <span />
  </StyledDrawerIcon>
);

export default DrawerIcon