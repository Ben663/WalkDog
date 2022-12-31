import Login from '../components/user/Login';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import Notification from '../components/Notification';
import BoottomNav from '../components/BottomNav';
import Room from '../components/rooms/Room'


const Home = () => {
	return (
		<>
			<Loading />
			<Notification />
			<Login />
			<NavBar />
			<BoottomNav />
			<Room />
		</>
	);
};

export default Home;
