import './App.css';
import Home from './pages/Home.jsx';
import VanDetail from './pages/Vans/VanDetail.jsx';
import Vans from './pages/Vans/VanList.jsx';
import About from './pages/About.jsx';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostLayout from './pages/Host/components/Host,.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './server.js';
function App() {
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
					</Route>
					
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
