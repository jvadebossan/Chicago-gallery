import style from './Favorited.module.css'
import Header from '../../components/Header';
import Container from '../../components/Container';
import CardBox from '../../components/CardBox';
import TitleBox from '../../components/TitleBox';
import Footer from '../../components/Footer';

import { useEffect, useState } from 'react';
import { forceUpdate } from 'react';

function Favorited() {
	const [empty, setEmpty] = useState(false);
	const [url, setUrl] = useState('https://api.artic.edu/api/v1/artworks?ids=');

	useEffect(() => {
		const favs = JSON.parse(localStorage.getItem('favorites'));
		if (favs === null || favs.length === 0) {
			setEmpty(true);
		} else {
			setEmpty(false);
			const ids = JSON.parse(localStorage.getItem('favorites')).join(',') + '&fields=id,title,image_id,thumbnail,date_start,date_end,date_display,artist_display,place_of_origin,description,short_description,dimensions,medium_display,artwork_type_title,artist_titles,style_title'
			const full_url = url + ids;
			setUrl(full_url);
		}
	}, []);


	return (
		<>
			<Header />
			<TitleBox title={'Favorited Artworks'} subtitle={'Here you can find all your favorite works of art!'}></TitleBox>
			{empty ? null :
				<div className={style.reset_box}>
					<button className={style.reset_btn} onClick={() => { localStorage.removeItem('favorites'); window.location.reload(); }}>Clear Favorites</button>
				</div>
			}
			<Container background={'foreground'} height={'100'}>
				{
					empty ? <h2 className={style.empty}>You haven't favorited any artwork yet!</h2> : <CardBox url={url}></CardBox>
				}
			</Container>
			<Footer />
		</>
	);
}

export default Favorited;
