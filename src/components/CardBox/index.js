import style from './CardBox.module.css';
import Card from './Card';

import { useState, useEffect } from 'react';

const CardBox = () => {

    const [url, setUrl] = useState('https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,thumbnail,date_start,date_end,date_display,artist_display,place_of_origin,description,short_description,dimensions,medium_display,artwork_type_title,artist_titles,style_title&limit=6');
    const [art_data, set_art_data] = useState({'data': []});

    useEffect(() => {
        const fetch_data = async () => {
            const response = await fetch(url)
                .then(res => res.json())
                .then(data => data);
            set_art_data(response);
        }
        fetch_data();
    }, []);
    
    return (
        <div className={style.card_box}>
            {
                art_data.data.map((artwork, index) => {
                    //console.log(artwork);
                    return <Card key={index} data={artwork} />
                })
            }
        </div>
    );
}

export default CardBox;