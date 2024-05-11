import style from './Info.module.css';

const Info = ({ icon, text }) => {
    console.log(text)
    return (
        <div className={style.info}>
            <img src={icon} alt="Info Icon" />
            <p>{text === null ? 'Not provided' : text}</p>
        </div>
    )
}

export default Info;