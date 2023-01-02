import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
	return (
		<div className='landing-container'>
			<div className='landing-content'>
				<h2>Welcome To Walk Dog</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta saepe
					dolorem consequatur quia ut vitae! Sed enim, a harum possimus labore
					quas amet id eveniet consequatur quia, vel accusamus ipsam!
				</p>
				<div className='link-btn'>
					<Link className='link' to={'/home'}>Start App</Link>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
