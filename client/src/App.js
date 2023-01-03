import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/Home';
// import ErrorPage from './pages/dashboard/error/ErorrPage'
import LandingPage from './pages/dashboard/landingPage/LandingPage'
const App = () => {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<LandingPage />}
				/>
				<Route
					path='/home'
					element={<Home />}
				/>
				<Route
					path='/dashboard/*'
					element={<Dashboard />}
				/>
				{/* <Route
					path='*'
					element={<ErrorPage />}
				/> */}
			</Routes>
		</>
	);
};

export default App;
