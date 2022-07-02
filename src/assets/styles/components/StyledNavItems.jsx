import styled from 'styled-components'

const StyledNavItems = styled.div`
  display: flex;
  margin-top: ${({ mobile }) => mobile ? '-6rem' : null};
`

export default StyledNavItems