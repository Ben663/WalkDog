import Login from '../components/user/Login';
import NavBar from '../components/NavBar';
import Loading from '../components/Loading';
import BoottomNav from '../components/BottomNav';
// import Notification from '../components/Notification';
// import Room from '../components/rooms/Room'


const Home = () => {
	return (
		<>
			{/* <Notification /> */}
			<Loading />
			<Login />
			<NavBar />
			<BoottomNav />
			{/* <Room /> */}
		</>
	);
};

export default Home;
