import style from './Containter.module.css'

function Container({background, height, children}) {
    return (
        <div 
        className={style.container}
        style={{'backgroundColor':`var(--${background})`, 'minHeight': `${height}vh`}}
        >
            {children}
        </div>
    );
}

export default Container;