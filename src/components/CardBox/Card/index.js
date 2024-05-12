import style from './Card.module.css';

//import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card = ({data}) => {

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
        </div>
    );
    }

export default Card;