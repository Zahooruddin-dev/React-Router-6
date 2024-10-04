import React, { useEffect, useState } from 'react';
import { Outlet, NavLink, useParams, Link } from 'react-router-dom';

export default function HostVansDetails() {
	const { id } = useParams();
	const [van, setVan] = useState(null);
  const activeStyle={
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  }
	useEffect(() => {
		fetch(`/api/host/vans/${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data); // Ensure the data structure matches what you're expecting
				setVan(data.vans);
			})
			.catch((err) => console.error('Error fetching data:', err));
	}, [id]);

	return van ? (
		<section>
			<Link to='..' relative='path' className='back-button'>
				&larr; <span>Back to all vans</span>
			</Link>

			<div className='host-van-detail-layout-container'>
				<div className='host-van-detail'>
					<img src={van.imageUrl} />
					<div className='host-van-detail-info-text'>
						<i className={`van-type van-type-${van.type}`}>{van.type}</i>
						<h3>{van.name}</h3>
						<h4>${van.price}/day</h4>
					</div>
				</div>
				<nav className='host-van-detail-na'>
					<NavLink
						to={`../vans/${id}/info`}
						end
            className={({ isActive }) => (isActive ? activeStyle : null)}
            >
						Details
					</NavLink>
					<NavLink
						to={`../vans/${id}/pricing`}
						end
            className={({ isActive }) => (isActive ? activeStyle : null)}
            >
						Pricing
					</NavLink>
					<NavLink
						to={`../vans/${id}/photos`}
						end
            className={({ isActive }) => (isActive ? activeStyle : null)}
            >
						Photos
					</NavLink>
				</nav>
				<Outlet context={{van}}/>
			</div>
		</section>
	) : (
		<p>Loading...</p>
	);
}
