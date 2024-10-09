import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getVan } from '../../api'; // Assuming getVan is your API call function
// Removed getDoc since it's not being used

export default function VanDetail() {
	const [van, setVan] = React.useState(null);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const { id } = useParams();
	const location = useLocation();
	console.log(location);

	React.useEffect(() => {
		async function loadVans() {
			setLoading(true);
			try {
				const data = await getVan(id);
				setVan(data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		}
		loadVans();
	}, [id]);

	const search = location.state?.search || '';
	const backText = location.state?.type || 'all';

	if (loading) {
		return <h1 aria-live="polite">Loading...</h1>;
	}

	if (error) {
		return <h1 aria-live="assertive">There was an error: {error.message}</h1>;
	}

	return (
		<div className="van-detail-container">
			<Link to={`..${search}`} relative="path" className="back-button">
				&larr; <span>Back to {backText}</span>
			</Link>
			{van ? (
				<div className="van-detail">
					<img src={van.imageUrl} alt={van.name} />
					<i className={`van-type ${van.type} selected`}>{van.type}</i>
					<h2>{van.name}</h2>
					<p className="van-price">
						<span>${van.price}</span>/day
					</p>
					<p>{van.description}</p>
					<button className="link-button">Rent this van</button>
				</div>
			) : (
				<h2>Loading...</h2>
			)}
		</div>
	);
}
