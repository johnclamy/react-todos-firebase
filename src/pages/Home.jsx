import StyledBanner from '../assets/styles/components/StyledBanner'
import StyledBannerWrapper from '../assets/styles/components/StyledBannerWrapper';
import StyledContainer from '../assets/styles/components/StyledContainer'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <StyledContainer>
      <StyledBannerWrapper>
        <StyledBanner>
          <Banner />
        </StyledBanner>
      </StyledBannerWrapper>
    </StyledContainer>
  );
}

export default Home;
