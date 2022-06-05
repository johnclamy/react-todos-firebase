import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${props => props.theme.bg.dark};
  margin-top: auto;
  padding: 20px 0;

  p {
    color: white;
    font-weight: 300;
    font-size: 0.75rem;
    text-align: center;
  }
`