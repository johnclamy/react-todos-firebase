import StyledStats from "../assets/styles/components/StyledStats"

const Stats = ({ stat, children }) => (
  <StyledStats>
    <b>{children}</b>
    <b style={{paddingLeft: (stat < 10 ? '6px ' : '4px')}}>{stat}</b>
  </StyledStats>
)

export default Stats