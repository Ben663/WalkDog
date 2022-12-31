import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config();

const URL = process.env.MONGO_URL;
mongoose.set('strictQuery', false)
try {
	mongoose.connect(URL, (err, mongoDbInstance) => {
		if (err) throw Error('connectin faild : ' + err);
		const { host, port, name } = mongoDbInstance;
		console.log({ host, port, name },`Good Job MongoDB Is Connected`);
		
	});
	} catch (error) {
		console.log('Houston We Have A Problem');
	}
	// 