import style from './Artwork.module.css';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Error from '../Error'
import Info from '../../components/Info';
import ArtworkSkeleton from '../../components/Skeletons/ArtworkSkeleton';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//icons
import author_icon from '../../assets/imgs/author_icon.png';
import date_icon from '../../assets/imgs/date_icon.png';
import origin_icon from '../../assets/imgs/origin_icon.png';
import size_icon from '../../assets/imgs/size_icon.png';
import type_icon from '../../assets/imgs/type_icon.png';


// class FavoriteArtwork{
// 	constructor(id){
// 		this.id = id;
// 	}
// }

// class FavoriteArtworkList{
// 	constructor(){
// 		this.list = [];
// 	}

// 	addFavorite(artwork){
// 		this.list.push(artwork);
// 	}
// 	get(){
// 		return JSON.parse(localStorage.getItem('favorites')) || [];
// 	}
// 	save(){
// 		let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
// 		favorites.push(this.id);
// 		localStorage.setItem('favorites', JSON.stringify(favorites));
// 	}

// }


const Artwork = () => {

	const { id } = useParams();
	const [favorited, setFavorited] = useState(false);
	const [loading, set_loading] = useState(true);
	const [art_data, set_art_data] = useState({ 'data': [] });

	const url = `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id,thumbnail,date_start,date_end,date_display,artist_display,place_of_origin,description,short_description,dimensions,medium_display,artwork_type_title,artist_titles,style_title`

	useEffect(() => {
		const fetch_data = async () => {
			set_art_data({ 'data': [] });
			set_loading(true);
			const response = await fetch(url)
				.then(res => res.json())
				.then(data => data)
				.catch(error => {
					console.error('Error:', error);
					return <Error />;
				})
			set_art_data(response);
			set_loading(false);
		}
		fetch_data();
	}, []);

	if (art_data.status === 404) {
		console.log('Error:', art_data);
		return <Error />;
	}

	const handleFavorite = (artwork) => {
		let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favorites.includes(artwork)) {
            favorites = favorites.filter(item => item !== artwork);
            localStorage.setItem('favorites', JSON.stringify(favorites))
            setFavorited(false);
        }else{
            favorites.push(artwork);
            localStorage.setItem('favorites', JSON.stringify(favorites))
            setFavorited(true);
        }
	}

	return (
		<>
		{loading ? <ArtworkSkeleton /> : 
		<Container background={'foreground'} height={100} >
			<Header />
			<div className={style.artwork_container}>
				<div className={style.image_and_info}>
					<div className={style.img_box}>
						<img src={`https://www.artic.edu/iiif/2/${art_data.data.image_id}/full/400,/0/default.jpg`} alt="placeholder" />
					</div>
					<div className={style.artwork_text}>
						<h2>{`Title: ${art_data.data.title}`}</h2>
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
							value={favorited ? 'Remove from favorites' : 'Add to favorites'} 
							onClick={() => {handleFavorite(art_data.data.id)}}
						/>
					</div>
				</div>
				<div className={style.artwork_description}>
					<h2>Description:</h2>
					<p>{art_data.data.description === null ?  'Description not provided by author': art_data.data.description}</p>
				</div>
			</div>
		</Container>
		}
		</>
	)
};

export default Artwork;