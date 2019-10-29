import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // Your web app's Firebase configuration
  apiKey: 'AIzaSyCRUjRxgsnGbdWJrpP7UVHFeS0JEzM2Jw0',
  authDomain: 'burger-queen-6ff61.firebaseapp.com',
  databaseURL: 'https://burger-queen-6ff61.firebaseio.com',
  projectId: 'burger-queen-6ff61',
  storageBucket: 'burger-queen-6ff61.appspot.com',
  messagingSenderId: '494430091091',
  appId: '1:494430091091:web:6b21175389312bf33713a6',
  measurementId: 'G-0K0FDC86YR',
};

firebase.initializeApp(firebaseConfig);
export default firebase;
