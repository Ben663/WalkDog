import express from "express";
import './db/mongoose.connect.js'
import cors from 'cors'
import roomRouter from "./routes/roomRouter.js";
import userRouter from './routes/userRouter.js'
import * as url from 'url'
import path from 'path'
const __dirname = url.fileURLToPath(new URL('./', import.meta.url));



const app = express();

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
    res.hasHeader('Access-Control-Allow-Methods', 'Get,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    next();
});
app.use(express.json({ limit: '10mb' }));
app.use(cors());
const publicPath = path.join(__dirname, 'build');
app.use(express.static(publicPath));
app.use('/user', userRouter);
app.use('/room', roomRouter);

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'build', index.html));
});
app.get('/', (_, res) => res.json({ message: 'Welcome To Our API' }));
app.use((_, res) => res.status(404).json({ success: false, message: 'Not Found' }));




export { app };