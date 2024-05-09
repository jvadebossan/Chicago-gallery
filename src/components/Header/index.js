import styles from './Header.module.css';


function Header() {
	return (
		<header className={styles.header}>
			<span className={styles.logo}>Chicago Gallery</span>
			<nav className={styles.menu}>
				<ul>
					<li>
						<a href="#categories">Categories</a>
					</li>
					<li>
						<a href="#gallery">Most famous</a>
					</li>
					<li>
						<a href="#discover">Discover</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;