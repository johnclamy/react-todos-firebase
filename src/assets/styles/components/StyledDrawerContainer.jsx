import styled from 'styled-components'

const StyledDrawerContainer = styled.section`
  position: fixed;
  background-color: var(--secondary);
  padding: 0rem 2rem;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: none;

  @media ${({theme}) => theme.media.xs} {
    display: flex;
  }
`;

export default StyledDrawerContainer