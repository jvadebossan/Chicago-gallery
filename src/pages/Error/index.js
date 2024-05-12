import Header from '../../components/Header';
import Container from '../../components/Container';

import { useParams } from "react-router-dom";

function Error() {
  const { code } = useParams();
  console.log(code)

  let error_list = {
    '404': 'Page not found',
    '500': 'Internal Server Error',
    'no_data_found': 'No Data found for this search'
  }
  return (
    <>
      <Header />
      <Container background={'foreground'} height={'100'}>
        <h1>Error</h1>
        <h2>{error_list[code]}</h2>
      </Container>
    </>
  );
}

export default Error;
