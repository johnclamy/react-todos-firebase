import StyledStats from "../assets/styles/components/StyledStats"

const Stats = ({ stat, children }) => (
  <StyledStats>
    <b>{children}</b>
    <b>{stat}</b>
  </StyledStats>
)

export default Stats