import style from './Search.module.css'
import { useState } from 'react'
import search_svg from '../../assets/imgs/search_icon.svg'

function Search() {

	const [search_text, set_search] = useState('')

	function handleSearch(event) {
		set_search(event.target.value)
	}

	return (
		<div className={style.search}>
			<img
				className={style.search_icon}
				src={search_svg}
				alt="search"
			/>
			<input
				className={style.search_bar}
				type="text"
				placeholder="Search anything you want..."
				value={search_text}
				onChange={handleSearch}
				onKeyDown={(key) => key.key === 'Enter' ? console.log(search_text) : null}
			/>
			<input
				className={style.search_button}
				type="submit"
				value="Search"
				onClick={() => console.log(search_text)}
			/>
		</div>
	);
}

export default Search;