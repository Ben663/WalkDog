import { Router } from "express";
import { app } from "../../client/src/firebase/config.jsx";
import {
	getUsers,
	login,
	register,
	updateProfile,
	updateStatus,
} from '../controllers/user.js';
import auth from "../middleware/auth.js";

const userRouter = Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.patch('/updateProfile', auth, updateProfile);
userRouter.get('/', getUsers);
app.patch('/updateStatus/:userId', updateStatus);

export default userRouter;