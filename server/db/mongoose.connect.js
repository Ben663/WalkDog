import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config();

const URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@walkdog.3zgw6et.mongodb.net/${process.env.MONGO_CONNECT}?retryWrites=true&w=majority`;
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