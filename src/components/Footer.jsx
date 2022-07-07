
import StyledFooter from "../assets/styles/components/StyledFooter";
import Stats from './Stats'

const Footer = () => (
  <StyledFooter>
    <Stats stat={8}>Total</Stats>
    <Stats stat={6}>Completed</Stats>
    <Stats stat={2}>Active</Stats>
  </StyledFooter>
);

export default Footer;
