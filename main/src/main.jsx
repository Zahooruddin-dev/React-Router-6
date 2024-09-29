import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import About from './About.jsx';
import './index.css';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      </Routes>
		</BrowserRouter>
	</StrictMode>
);
