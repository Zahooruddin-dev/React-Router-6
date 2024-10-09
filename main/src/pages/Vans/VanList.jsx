import React from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';
import { getDoc } from 'firebase/firestore/lite';
export default function Vans() {
	const [searchParams, setSearchParams] = useSearchParams();
	const typeFilter = searchParams.get('type');
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [vans, setVans] = React.useState([]);

	React.useEffect(() => {
		async function loadVans() {
			setLoading(true);
			try {
				const data = await getVans();
				setVans(data)
			} catch (err) {
				setError(err)
			} finally {
				setLoading(false)
			}
		}
		loadVans();
	}, []);

	const displayedVans = typeFilter
		? vans.filter((van) => van.type === typeFilter)
		: vans;

	const vanElements = displayedVans.map((van) => (
		<div key={van.id} className='van-tile'>
			<Link
				to={`${van.id}`}
				aria-label={`View details for ${van.name}, 
                     priced at $${van.price} per day`}
				state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
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

	if (loading) {
		return <h1 aria-live="polite">Loading...</h1>

	}

	if(error)
	{        return <h1 aria-live="assertive">There was an error: {error.message}</h1>
}

	return (
		<div className='van-list-container'>
			<h1>Explore our van options</h1>
			<div className='van-list-filter-buttons'>
				<button
					onClick={() => setSearchParams({ type: 'simple' })}
					className={`van-type simple ${
						typeFilter === 'simple' ? 'selected' : ''
					} `}
				>
					simple
				</button>
				<button
					onClick={() => setSearchParams({ type: 'rugged' })}
					className={`van-type rugged ${
						typeFilter === 'rugged' ? 'selected' : ''
					}`}
				>
					rugged
				</button>
				<button
					onClick={() => setSearchParams({ type: 'luxury' })}
					className={`van-type luxury ${
						typeFilter === 'luxury' ? 'selected' : ''
					}`}
				>
					luxury
				</button>
				{typeFilter && (
					<button
						onClick={() => setSearchParams({})}
						className='van-type clear-filters'
					>
						Clear
					</button>
				)}
			</div>
			<div className='van-list'>{vanElements}</div>
		</div>
	);
}
