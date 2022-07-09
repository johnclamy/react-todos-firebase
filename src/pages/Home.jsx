import Button from '../components/Button'
import ButtonInfo from '../components/ButtonInfo'
import ButtonLight from '../components/ButtonLight'
import ButtonWarning from '../components/ButtonWarning'

const Home = () => {
  return (
    <>
      <p style={{ marginBottom: "0.5rem" }}>
        <Button>sign in</Button>
      </p>
      <p style={{ marginBottom: "0.5rem" }}>
        <Button primary>sign in</Button>
      </p>
      <p style={{ marginBottom: "0.5rem" }}>
        <ButtonInfo>sign in</ButtonInfo>
      </p>
      <p style={{ marginBottom: "0.5rem" }}>
        <ButtonLight>sign in</ButtonLight>
      </p>
      <p style={{ marginBottom: "0.5rem" }}>
        <ButtonWarning>sign in</ButtonWarning>
      </p>
    </>
  );
}

export default Home;
