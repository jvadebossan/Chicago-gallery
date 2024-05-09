import style from './TitleBox.module.css'

function TitleBox({ title, subtitle }) {
    return (
        <div className={style.title_box}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    );
    }

export default TitleBox;