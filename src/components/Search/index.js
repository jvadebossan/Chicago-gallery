import style from './Search.module.css'
import search_svg from '../../assets/imgs/search_icon.svg'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Search() {

	const [search_text, set_search] = useState('')
	const navigate = useNavigate()

	function handleSearch(event) {
		set_search(event.target.value)
	}

	const redirect_search = () => {
		navigate(`/search/${search_text}`)
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
				onKeyDown={(key) => key.key === 'Enter' ? redirect_search() : null}
			/>
			<input
				className={style.search_button}
				type="submit"
				value="Search"
				onClick={() => redirect_search()}
			/>
		</div>
	);
}

export default Search;