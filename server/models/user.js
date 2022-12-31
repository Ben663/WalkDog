import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	name: { type: String, min: 2, max: 50, require: true },
	email: {
		type: String,
		min: 5,
		max: 50,
		require: true,
		unique: true,
		trim: true,
	},
	password: { type: String, require: true },
	photoURL: { type: String, default: '' },
    role: { type: 'String', default: 'basic', enum: ['basic', 'editor', 'admin']},
    active: { type: Boolean, default: true },
},
    { timestamps: true }
);

const User = mongoose.model('users', userSchema);
export default User;



