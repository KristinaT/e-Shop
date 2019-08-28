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
export const createUserProfileDocument = async (
  userAuth: any,
  additionalData?: object
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);
/** Get Auth service for the app */
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
