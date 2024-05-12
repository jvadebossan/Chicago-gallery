import style from './CardSkeleton.module.css';
import placeholder from '../../../assets/imgs/img_placeholder.jpg';

const CardSkeleton = () => {

    return (
        <div className={style.card}>
            <div className={style.img_box}>
                <img src={placeholder} alt="placeholder" />
            </div>
            <div className={style.card_text}>
                <span>lorem ipsum dolor sit amet</span>
                <span>lorem ipsum dolor sit amet</span>
            </div>
        </div>
    );
    }

export default CardSkeleton;