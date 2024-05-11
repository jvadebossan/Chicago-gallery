import styles from './Header.module.css';

import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className={styles.header}>
			<Link to={'/'} className={styles.logo}>Chicago Gallery</Link>
			<nav className={styles.menu}>
				<ul>
					<li>
						<a href="#discover">Discover</a>
					</li>
					<li>
						<a href="#categories">Categories</a>
					</li>
					<li>
						<a href="/favlist">Favorite List</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;