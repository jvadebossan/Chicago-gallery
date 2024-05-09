import Header from '../../components/Header';
import Container from '../../components/Container';
import TitleBox from '../../components/TitleBox';

function Home() {
  return (
    <>
      <Header />
      <Container background={'background'} height={'70'}>
        <TitleBox 
          title={'Chicago art gallery'} 
          subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        />
      </Container>
    </>
  );
}

export default Home;
