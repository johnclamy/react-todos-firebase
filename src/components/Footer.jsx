
import StyledFooter from "../assets/styles/components/StyledFooter";
import Stats from './Stats'

const Footer = () => (
  <StyledFooter>
    <Stats stat={12}>Total</Stats>
    <Stats stat={4}>Completed</Stats>
    <Stats stat={8}>Active</Stats>
  </StyledFooter>
);

export default Footer;
