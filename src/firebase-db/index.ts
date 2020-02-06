import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyACCca_npHb4uVQYZdT9wUJ0rv94GF7XTY',
  authDomain: 'vue-test-2f4aa.firebaseapp.com',
  databaseURL: 'https://vue-test-2f4aa.firebaseio.com',
  projectId: 'vue-test-2f4aa',
  storageBucket: 'vue-test-2f4aa.appspot.com',
  messagingSenderId: '326989887535',
  appId: '1:326989887535:web:af734443b29c8ad9d06eda',
  measurementId: 'G-2KYZQ5R0P9',
};

export default firebase
  .initializeApp(firebaseConfig)
  .firestore();
