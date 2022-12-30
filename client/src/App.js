import React from 'react';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Notification from './components/Notification';
import Login from './components/user/Login';
import BoottomNav from './components/BottomNav';


const App = () => {
	return (
		<>
			<Loading />
			<Notification />
			<Login />
			<NavBar />
			<BoottomNav/>
		</>
	);
};

export default App;
