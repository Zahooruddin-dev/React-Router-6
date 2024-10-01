import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './pages/Home.jsx';
import VanDetail from './pages/Vans/VanDetail.jsx';
import Vans from './pages/Vans/VanList.jsx';
import About from './pages/About.jsx';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './server.js';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout/>}>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/host' element={<Dashboard />} />
					<Route path='/host/income' element={<Income />} />
					<Route path='/host/reviews' element={<Reviews />} />
					<Route path='/vans' element={<Vans />} />
					<Route path='/vans/:id' element={<VanDetail />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
