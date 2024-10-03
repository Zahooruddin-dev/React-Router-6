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
import VansPricing from './pages/Host/vans/HostVansPricing.jsx'; 
import VansPhtoto from './pages/Host/vans/HostVansPhoto.jsx';
import VansInfo from './pages/Host/vans/HostVansInfo.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './server.js';
function App() {
	   
  /**
   * Don't forget: you'll need to use a special tool from
   * React Router so we can keep the top info (and 
   * eventually the navbar we build) on the page while going
   * from nested route to nested route. This will require some
   * slight changes to HostVanDetail.jsx
   */
	return (
		<BrowserRouter>
			<Routes>
				<Route path= '/'element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/about' element={<About />} />

					<Route path='/vans' element={<Vans />} />
					<Route path='/vans/:id' element={<VanDetail />} />

					<Route path='host' element={<HostLayout />}>
						<Route path='income' element={<Income />} />
						<Route path='host' element={<Dashboard />} />
						<Route path='reviews' element={<Reviews />} />
						<Route path='vans' element={<HostVans />} />
							<Route path='vans/:id' element={<HostVansDetails />} >
								<Route path='pricing' element={<VansPricing />} />
								<Route path='photos' element={<VansPhtoto />} />
								<Route path='info' element={<VansInfo />} />
							</Route>
					</Route>
					
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
