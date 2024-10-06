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
import NotFound from './pages/NotFound.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './server.js';
function App() {
	
	return (
/* 		<Route path="*" element={<h1>Page not found!</h1>} />
 */		<BrowserRouter>
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
					<Route path='*' element={<NotFound/>}/>

				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
