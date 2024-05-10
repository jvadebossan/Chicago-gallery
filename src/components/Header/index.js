import styles from './Header.module.css';


function Header() {
	return (
		<header className={styles.header}>
			<a href="" className={styles.logo}>Chicago Gallery</a>
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