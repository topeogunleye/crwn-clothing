import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBXfvqdf8604C2jwHkM_fcmhQnY2svr0e0',
  authDomain: 'crown-db-a3682.firebaseapp.com',
  projectId: 'crown-db-a3682',
  storageBucket: 'crown-db-a3682.appspot.com',
  messagingSenderId: '553550700658',
  appId: '1:553550700658:web:e2917e88c0fb3c8fbae2eb',
  measurementId: 'G-9XKTYSTEQH',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
