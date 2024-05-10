import style from './Card.module.css';

import { useState, useEffect } from 'react';

const Card = ({data}) => {

    console.log(data.image_id);


    return (
        <div className={style.card}>
            <div className={style.img_box}>
                <img src={`https://www.artic.edu/iiif/2/${data.image_id}/full/300,/0/default.jpg`} alt="placeholder" />
            </div>
            <div className={style.card_text}>
                <h2>{data.title}</h2>
                <p>{data.date_start} - {data.date_end}</p>
            </div>
        </div>
    );
    }

export default Card;