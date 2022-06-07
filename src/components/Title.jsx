import { StyledTitle } from '../assets/styles/Title.styled'

const Title = ({title}) => (
  <header>
    <StyledTitle>
      {title}
      <hr />
    </StyledTitle>
  </header>
)

export default Title