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
import HostLayout from './pages/Host/components/Host,.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './server.js';
function App() {
    /**
   * Thought experiment:
   * 
   * Re-write the vans route as a nested route. Because there's no shared
   * UI between /vans and /vans/:id, the parent "vans" route won't have its
   * own `element` prop, just a `path` prop.
   * 
   * Hint: you're not creating a Layout Route (since that's only for
   * shared UI), but you are using another kind of "pathless" route...
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

				</Route>
			</Route>
		</Routes>
	</BrowserRouter>
	);
}

export default App;
