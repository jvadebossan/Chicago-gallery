import style from './ArtworkSkeleton.module.css';
import Header from '../../../components/Header';
import Container from '../../../components/Container';
import placeholder from '../../../assets/imgs/img_placeholder.jpg';


const ArtworkSkeleton = () => {

	return (
		<Container background={'foreground'} height={100} >
			<Header />
			<div className={style.artwork_container}>
				<div className={style.image_and_info}>
					<div className={style.img_box}>
						<img src={placeholder} alt="placeholder" />
					</div>
					<div className={style.artwork_text}>
						<h2 className={style.palceholder_span}>Lorem ipsum dolor sit amet</h2>
						<span className={style.palceholder_span}>Lorem ipsum dolor sit amet lorem ipsum</span>
                        <span className={style.palceholder_span}>lorel ipsum dolor</span>
                        <span className={style.palceholder_span}>lorem ipsum dolor sit</span>
                        <span className={style.palceholder_span}>lorem ipsum dolor sit amet</span>
                        <span className={style.palceholder_span}>Lorem ipsum dolor sit amet lorem </span>
					</div>
				</div>
				<div className={style.artwork_description}>
                    <h2 className={style.palceholder_span}>Lorem ipsum </h2>
					<span className={style.palceholder_span}>Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet lorem </span>
                    <span className={style.palceholder_span}>Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet lorem </span>
				</div>
			</div>

		</Container>
	);
}

export default ArtworkSkeleton;