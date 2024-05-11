import Header from '../../components/Header';
import Container from '../../components/Container';
import TitleBox from '../../components/TitleBox';
import Search from '../../components/Search';
import CardBox from '../../components/CardBox';

function Home() {

  return (
    <>
      <Header />
      <Container background={'background'} height={'70'}>
        <TitleBox 
          title={'Chicago Art Gallery'} 
          subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        />
        <Search />
      </Container>
      <Container background={'foreground'} height={'120'}>
        <TitleBox 
          title={'Discover Artworks'} 
          subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        />
        <CardBox/>
      </Container>
    </>
  );
}

export default Home;
