import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function Vans() {
	const [searchParams, setSearchParams] = useSearchParams();
	const typeFilter = searchParams.get('type');
	console.log(typeFilter);
	const [vans, setVans] = React.useState([]);
	React.useEffect(() => {
		fetch('/api/vans')
			.then((res) => res.json())
			.then((data) => setVans(data.vans));
	}, []);
	const displayedVans = typeFilter
		? vans.filter((van) => van.type === typeFilter)
		: vans;
	const vanElements = displayedVans.map((van) => (
		<div key={van.id} className='van-tile'>
			<Link
				to={`/vans/${van.id}`}
				aria-label={`View details for ${van.name}, 
                     priced at $${van.price} per day`}
			>
				<img src={van.imageUrl} alt={`Image of ${van.name}`} />
				<div className='van-info'>
					<p>{van.name}</p>
					<p>
						${van.price}
						<span>/day</span>
					</p>
				</div>
				<i className={`van-type ${van.type} selected`}>{van.type}</i>
			</Link>
		</div>
	));
	/**
	 * Challenge: add links to filter the vans by type. Use a hard-coded
	 * `to` string like we just practiced. The types are "simple",
	 * "luxury", and "rugged".
	 *
	 * For now, give the Links a className of `van-type simple` (and
	 * manually replace "simple" with "luxury" and "rugged" for
	 * the Links that filter by those types.)
	 *
	 * Include a Link to clear the filters. Its className should be
	 * `van-type clear-filters`
	 */

	return (
		<div className='van-list-container'>
			<h1>Explore our van options</h1>
			<div className='van-list-filter-buttons'>
				<Link to={'?type=simple'} className='van-type simple'>
					simple
				</Link>
				<Link to={'?type=rugged'} className='van-type rugged'>
					rugged
				</Link>
				<Link to={'?type=luxury'} className='van-type luxury'>
					luxury
				</Link>
				<Link to={'.'} className='van-type clear-filters'>
					Clear
				</Link>
			</div>
			<div className='van-list'>{vanElements}</div>
		</div>
	);
}
