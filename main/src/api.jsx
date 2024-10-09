// A function whose only purpose is to delay execution
// for the specified # of milliseconds when used w/ `await`
// e.g. inside an async function:
// await sleep(2000)  => pauses the function for 2 seconds before moving on
function sleep(ms) {
	return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

export async function getVans(id) {
	const url = id ? `/api/vans/${id}` : '/api/vans';
	const res = await fetch(url);
	if (!res.ok) {
		throw {
			message: 'Failed to fetch vans',
			statusText: res.statusText,
			status: res.status,
		};
	}
	const data = await res.json();
	return data.vans;
}

export async function getHostVans(id) {
	const url = id ? `/api/host/vans/${id}` : '/api/host/vans';
	const res = await fetch(url);
	if (!res.ok) {
		throw {
			message: 'Failed to fetch vans',
			statusText: res.statusText,
			status: res.status,
		};
	}
	const data = await res.json();
	return data.vans;
}

export async function loginUser(creds) {
	const res = await fetch('/api/login', {
		method: 'post',
		body: JSON.stringify(creds),
	});
	const data = await res.json();

	if (!res.ok) {
		throw {
			message: data.message,
			statusText: res.statusText,
			status: res.status,
		};
	}

	return data;
}/* 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEjghBbPpZnJujVYq9ENvEVwc8bjf7X0k",
  authDomain: "vanlife-a1356.firebaseapp.com",
  projectId: "vanlife-a1356",
  storageBucket: "vanlife-a1356.appspot.com",
  messagingSenderId: "825710280807",
  appId: "1:825710280807:web:1e57dfe9a2d1ebb57394c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); */