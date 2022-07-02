import styled from 'styled-components'

const StyledDrawerIcon = styled.div`
  width: 30px;
  height: 22.5px;
  padding: 1rem;
  position: relative;
  transform: 0.5 ease-in-out;
  cursor: pointer;

  & span {
    display: block;
    position: absolute;
    height: 4.5px;
    width: 100%;
    background: #f1faee;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: ${({ isDrawerShown }) => (isDrawerShown ? "9px" : "0px")};
      width: ${({ isDrawerShown }) => (isDrawerShown ? "0%" : "100%")};
      left: ${({ isDrawerShown }) => (isDrawerShown ? "50%" : null)};
    }
    &:nth-child(2) {
      transform: ${({ isDrawerShown }) =>
        isDrawerShown ? "rotate(45deg)" : null};
    }
    &:nth-child(3) {
      transform: ${({ isDrawerShown }) =>
        isDrawerShown ? "rotate(-45deg)" : null};
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 9px;
    }
    &:nth-child(4) {
      top: ${({ isDrawerShown }) => (isDrawerShown ? "9px" : "18px")};
      width: ${({ isDrawerShown }) => (isDrawerShown ? "0%" : "100%")};
      left: ${({ isDrawerShown }) => (isDrawerShown ? "50%" : null)};
    }
  }
`;

export default StyledDrawerIcon