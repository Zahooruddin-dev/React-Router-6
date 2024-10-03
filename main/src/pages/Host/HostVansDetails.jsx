import React, { useEffect, useState } from 'react';
import { Outlet, NavLink, useParams } from 'react-router-dom';

export default function HostVansDetails() {
  const { id } = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Ensure the data structure matches what you're expecting
        setVan(data);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, [id]);

  const hostVanEl = van ? (
    <div className='host-van-single' key={van.id}>
      <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
      <div className='host-van-info'>
        <h3>{van.name}</h3>
        <p>${van.price}/day</p>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );

  return (
    <>
      <section>
        <h1 className='host-vans-title'>Your listed van</h1>
        <div className='host-vans-list'>
          <section>{hostVanEl}</section>
        </div>
      </section>
      
      <nav className='host-nav'>
        <NavLink
          to={`/vans/${id}`}
          end
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Details
        </NavLink>
        <NavLink
          to={`/vans/${id}/pricing`}
          end
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Pricing
        </NavLink>
        <NavLink
          to={`/vans/${id}/photos`}
          end
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Photos
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
}
