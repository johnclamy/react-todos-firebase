import { useHistory } from "react-router-dom";
import StyledBannerTitle from "../assets/styles/components/StyledBannerTitle";
import StyledButton from "../assets/styles/components/StyledButton";
import StyledBannerLink from "../assets/styles/components/StyledBannerLink";

const Banner = () => {
  const history = useHistory()
  return (
    <>
      <StyledBannerTitle>
        welcome to the <b>todos app</b>
      </StyledBannerTitle>
      <StyledBannerLink>
        <StyledButton onClick={() => history.push('/todos')}>manage todos</StyledButton>
      </StyledBannerLink>
    </>
  );
}
export default Banner;
