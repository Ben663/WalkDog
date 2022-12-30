// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAdQvb_FuK_YdGviG5EU-B_RlZjnB_PddA',
	authDomain: 'walk-dog-373012.firebaseapp.com',
	projectId: 'walk-dog-373012',
	storageBucket: 'walk-dog-373012.appspot.com',
	messagingSenderId: '650921243490',
	appId: '1:650921243490:web:1718b880114c13cf38f23b',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
