import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import CardBox from '../../components/CardBox';
import { useParams } from 'react-router-dom';

function SearchRes() {

  const query = useParams();
  
  const query_url = `https://api.artic.edu/api/v1/artworks/search?q=${query.query}&fields=id,title,image_id,thumbnail,date_start,date_end,date_display,artist_display,place_of_origin,description,short_description,dimensions,medium_display,artwork_type_title,artist_titles,style_title`
  
  return (
    <>
      <Header />
      <Container background={'foreground'} height={'100'}>
        <CardBox url={query_url}/>
      </Container>
      <Footer />
    </>
  );
}

export default SearchRes;
