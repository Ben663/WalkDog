import express from "express";
import './db/mongoose.connect.js'
import cors from 'cors'
import roomRouter from "./routes/roomRouter.js";
import userRouter from './routes/userRouter.js'

const port = process.env.PORT || 5000 

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
    res.hasHeader('Access-Control-Allow-Methods', 'Get,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    next();
});
app.use(express.json({ limit: '10mb' }));
app.use(cors());
app.use('/user', userRouter);
app.use('/room', roomRouter);

app.get('/', (req, res) => res.json({ message: 'Welcome To Our API' }));
app.use((req, res) => res.status(404).json({ success: false, message: 'Not Found' }));

const startServer = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server Is Listening On Port: ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
};
startServer();