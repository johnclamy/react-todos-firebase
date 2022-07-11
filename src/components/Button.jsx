import StyledButton from '../assets/styles/components/StyledButton'

const Button = ({ children, primary }) => 
  <StyledButton primary={primary}>
    {children}
  </StyledButton>

export default Button