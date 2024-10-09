import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	doc,
	getDocs,
	getDoc,
	query,
	where,
} from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: 'AIzaSyBEjghBbPpZnJujVYq9ENvEVwc8bjf7X0k',
	authDomain: 'vanlife-a1356.firebaseapp.com',
	projectId: 'vanlife-a1356',
	storageBucket: 'vanlife-a1356.appspot.com',
	messagingSenderId: '825710280807',
	appId: '1:825710280807:web:1e57dfe9a2d1ebb57394c2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const vansCollectionRef = collection(db, 'Vans');

export async function getVans() {
	const snapshot = await getDocs(vansCollectionRef);
	const vans = snapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));
	return vans;
}

export async function getVan(id) {
	const docRef = doc(db, 'Vans', id);
	const snapshot = await getDoc(docRef);
	return {
		...snapshot.data(),
		id: snapshot.id,
	};
}

export async function getHostVans(id) {
	const q = query (vansCollectionRef,where('hostId','==','123'))
	const snapshot = await getDocs(q)
	const vans = snapshot.docs.map(doc => ({
			...doc.data(),
			id: doc.id
	}))
	return vans
}

/* export async function getHostVans(id) {
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
 */
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
}
