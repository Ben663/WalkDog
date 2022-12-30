import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config();

const URL = process.env.MONGO_URL;
mongoose.set('strictQuery', false)
try {
    mongoose.connect(
			URL,
			{ useNewUrlParser: true, useUnifiedTopology: true },
			() => console.log(`Good Job MongoDB Is Connected`)
		);
} catch (error) {
    console.log('Houston We Have A Problem');
}