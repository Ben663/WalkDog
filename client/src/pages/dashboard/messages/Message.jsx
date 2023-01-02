import { useEffect } from 'react';

const Messages = ({ setSelectedLink, link }) => {
	useEffect(() => {
		setSelectedLink(link);
	}, [link, setSelectedLink]);
	return <div>Messages</div>;
};

export default Messages;
