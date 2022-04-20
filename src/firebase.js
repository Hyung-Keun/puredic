import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyCk83oXKbA9j748LHM6LmWZ0RsJQmt1xQs",
  authDomain: "sparta-react-basic-56099.firebaseapp.com",
  projectId: "sparta-react-basic-56099",
  storageBucket: "sparta-react-basic-56099.appspot.com",
  messagingSenderId: "75829207263",
  appId: "1:75829207263:web:90eda9bad22e6c28d7896a",
  measurementId: "G-9Q5869KWV0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };