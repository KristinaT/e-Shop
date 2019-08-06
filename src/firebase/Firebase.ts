import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCpOa9T5r1v8MoI7ap3_evuxJW8V759UEY',
  authDomain: 'eshop-d7f2e.firebaseapp.com',
  databaseURL: 'https://eshop-d7f2e.firebaseio.com',
  projectId: 'eshop-d7f2e',
  storageBucket: '',
  messagingSenderId: '611322898926',
  appId: '1:611322898926:web:165da5e5c1b1cf98'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
console.log(typeof auth, ' auth');
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
