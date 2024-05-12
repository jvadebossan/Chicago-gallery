import style from './CardBox.module.css';
import Card from './Card';
import CardSkeleton from '../Skeletons/CardSkeleton';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CardBox = ({ url }) => {
	const navigate = useNavigate();
	const [loading, set_loading] = useState(true);
	const [page, set_page] = useState(1);
	const [limit, set_limit] = useState(6);
	const [art_data, set_art_data] = useState({ 'data': [], 'pagination': { 'total_pages': 1 } });

	useEffect(() => {
		const fetch_data = async () => {
			set_loading(true);
			set_art_data({ 'data': [], 'pagination': { 'total_pages': 1 } });
			const response = await fetch(`${url}&page=${page}&limit=${limit}`)
				.then(res => res.json())
				.then(data => data);
				if (response.pagination == undefined) {
					response.pagination = { 'total_pages': 1 }
				}
				if (response.data.length === 0 || response.status === 403) {
					console.log('No data found')
					navigate('/error');
				}
			set_art_data(response);
			set_loading(false);
		}
		fetch_data();

	}, [page, limit]);

	function next_page() {
		if (page < art_data.pagination.total_pages) {
			let actual_page = parseInt(page);
			actual_page += 1;
			set_page(actual_page);
		}
	}

	function prev_page() {
		if (page > 1) {
			let actual_page = parseInt(page);
			actual_page -= 1;
			set_page(actual_page);
		}
	}

	return (
		<div className={style.card_box}>
			<div className={style.pagination}>
				<div className={style.pag_select}>
					<select onChange={(e) => { set_limit(e.target.value) }} defaultValue="6" className={style.select}>
						<option defaultValue="6">6</option>
						<option defaultValue="12">12</option>
						<option defaultValue="24">24</option>
						<option defaultValue="48">48</option>
					</select>
				</div>
				<div className={style.back_next}>
					<button
						onClick={() => { set_page(1) }}>&lt;&lt;
					</button>
					<button
						onClick={() => { prev_page() }}>&lt;
					</button>
					<input type="number"
						onChange={(e) => { set_page(e.target.value) }}
						onKeyDown={(key) => key.key === 'Enter' ? set_page(page) : null}
						value={page}>
					</input>
					<button
						onClick={() => { next_page() }}>&gt;
					</button>
					<button
						onClick={() => { set_page(art_data.pagination.total_pages) }}>&gt;&gt;
					</button>
				</div>
			</div>
			<div className={style.cards}>
				{
					loading ? [0, 1, 2, 3, 4, 5].map((index) => { return <CardSkeleton key={index} /> }) : art_data.data.map((artwork, index) => { return <Card key={index} data={artwork} /> })
				}
			</div>
		</div>
	);
}

export default CardBox;