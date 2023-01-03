/** @format */

import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const userName = process.env.MONGO_USER;
const userPass = process.env.MONGO_PASS;

const URL = `mongodb+srv://${userName}:${userPass}@walkdog.3zgw6et.mongodb.net/WalkDog?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);
try {
	mongoose.connect(URL, (err, mongoDbInstance) => {
		if (err) throw Error('connectin faild : ' + err);
		const { host, port, name } = mongoDbInstance;
		console.log({ host, port, name }, `Good Job MongoDB Is Connected`);
	});
} catch (error) {
	console.log('Houston We Have A Problem');
}
//
