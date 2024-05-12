import style from './Error.module.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';


import { useParams } from "react-router-dom";

function Error() {
  return (
    <>
      <Header />
      <Container background={'foreground'} height={'90'}>
        <div className={style.error}>
          <h1>Error 404</h1>
          <h2>Page not Found</h2>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Error;
