import styles from './Header.module.css';

import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className={styles.header}>
			<Link to={'/'} className={styles.logo}>Chicago Gallery</Link>
			<nav className={styles.menu}>
				<ul>
					<li>
						<Link to={'/favorited'}>Favorite List</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;