import { useEffect } from 'react';

const Requests = ({ setSelectedLink, link }) => {
	useEffect(() => {
		setSelectedLink(link);
	}, [link, setSelectedLink]);
	return <div>Requests</div>;
};

export default Requests;
