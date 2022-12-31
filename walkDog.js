import { app } from './server/app.js'

const port = process.env.PORT || 5000; 

const startServer = async () => {
	try {
		app.listen(port, () => {
			console.log(`Server Is Listening On Port: ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};
startServer();