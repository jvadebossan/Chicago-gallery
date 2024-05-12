import style from './Card.module.css';
import favorite_icon from '../../../assets/imgs/favorite_icon.png';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({data}) => {

    const [favorited, setFavorited] = useState(false);

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
        <div className={style.card}>
            <Link to={`/artwork/${data.id}`} className={style.img_box}>
                <img 
                    src={`https://www.artic.edu/iiif/2/${data.image_id}/full/300,/0/default.jpg`} 
                    alt={'artwork without image'} 
                />
            </Link>
            <div className={style.card_text}>
                <h2>{`Title: ${data.title}`}</h2>
                <p>{`Dated from ${data.date_display}`}</p>
            </div>
            <img 
                className={style.add_favorite_icon}
                id={favorited ? style.favorited : ''}
                src={favorite_icon}
                alt='add to favorites'
                onClick={() => {handleFavorite(data.id)}}
            />    
        </div>
    );
    }

export default Card;