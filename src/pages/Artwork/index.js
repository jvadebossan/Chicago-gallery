import style from './Artwork.module.css';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Error from '../Error'
import Info from '../../components/Info';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//icons
import author_icon from '../../assets/imgs/author_icon.png';
import date_icon from '../../assets/imgs/date_icon.png';
import origin_icon from '../../assets/imgs/origin_icon.png';
import size_icon from '../../assets/imgs/size_icon.png';
import type_icon from '../../assets/imgs/type_icon.png';


const Artwork = () => {

	const { id } = useParams();
	const [art_data, set_art_data] = useState({ 'data': [] });

	//console.log(id);
	useEffect(() => {
		const fetch_data = async () => {
			const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id,thumbnail,date_start,date_end,date_display,artist_display,place_of_origin,description,short_description,dimensions,medium_display,artwork_type_title,artist_titles,style_title&limit=6`)
				.then(res => res.json())
				.then(data => data)
				.catch(error => {
					console.error('Error:', error);
					return <Error />;
				})
			set_art_data(response);
		}
		fetch_data();
	}, []);

	if (art_data.status === 404) {
		console.log('Error:', art_data);
		return <Error />;
	}

	if(art_data.data.description === null){
		console.log('r')
	}

	return (
		<Container background={'foreground'} height={100} >
			<Header />
			<div className={style.artwork_container}>
				<div className={style.image_and_info}>
					<div className={style.img_box}>
						<img src={`https://www.artic.edu/iiif/2/${art_data.data.image_id}/full/400,/0/default.jpg`} alt="placeholder" />
					</div>
					<div className={style.artwork_text}>
						<h2>{art_data.data.title}</h2>
						<Info 
							icon={author_icon} 
							text={`Author: ${art_data.data.artist_display}`} 
						/>
						<Info 
							icon={origin_icon} 
							text={`Origin: ${art_data.data.place_of_origin}`} 
						/>
						<Info 
							icon={type_icon} 
							text={`Type: ${art_data.data.artwork_type_title}`} 
							/>
						<Info 
							icon={date_icon} 
							text={`Displayed during: ${art_data.data.date_start}  - ${art_data.data.date_end}`} 
						/>
						<Info 
							icon={size_icon} 
							text={`Dimensions: ${art_data.data.dimensions}`} 
						/>
						<input 
							className={style.favorite_btn} 
							type="button" 
							value="Add to favorites" 
						/>
					</div>
				</div>
				<div className={style.artwork_description}>
					<h2>Description:</h2>
					<p>{art_data.data.description === null ?  'Description not provided by author': art_data.data.description}</p>
				</div>
			</div>

		</Container>
	);
}

export default Artwork;