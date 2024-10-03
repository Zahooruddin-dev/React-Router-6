import './App.css';
import Home from './pages/Home.jsx';
import VanDetail from './pages/Vans/VanDetail.jsx';
import Vans from './pages/Vans/VanList.jsx';
import About from './pages/About.jsx';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostVans from './pages/Host/vans/HostVans.jsx';
import HostVansDetails from './pages/Host/vans/HostVansDetails.jsx';
import HostLayout from './components/HostLayout,.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './server.js';
function App() {
	   
  /**
   * Challenge: Add the routes necessary so we can access
   * /host/vans/:id/pricing and /host/vans/:id/photos.
   * 
   * Add stubbed-out components in separate files for
   * these routes (e.g. <h2>Pricing view here</h2>). I already
   * made the `HostVanInfo.jsx`, `HostVanPricing.jsx` and
   * `HostVanPhotos.jsx` files for you, but they're empty.
   * 
   * Don't forget: you'll need to use a special tool from
   * React Router so we can keep the top info (and 
   * eventually the navbar we build) on the page while going
   * from nested route to nested route. This will require some
   * slight changes to HostVanDetail.jsx
   * 
   * Since we don't have the navbar yet, you can test them
   * by manually navigating to e.g. /host/vans/1/pricing.
   */
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />

					<Route path='/vans' element={<Vans />} />
					<Route path='/vans/:id' element={<VanDetail />} />

					<Route path='host' element={<HostLayout />}>
						<Route path='income' element={<Income />} />
						<Route path='host' element={<Dashboard />} />
						<Route path='reviews' element={<Reviews />} />
						<Route path='vans' element={<HostVans />} />
						<Route path='vans/:id' element={<HostVansDetails />} />
					</Route>
					
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
