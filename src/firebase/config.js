import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig ={
    apiKey: 'AIzaSyCMORKhDqxQ5ndcBa1rifvvIcOWlk-bwu4',
    authDomain: 'your-auth-domain-b1234.firebaseapp.com',
    databaseURL: 'https://your-database-name.firebaseio.com',
    projectId: 'auth-react-native1994',
    storageBucket: 'auth-react-native1994.appspot.com',
    messagingSenderId: '920144316307',
    appId: '1:920144316307:android:31a2c28462e2fc9f890a66',
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};

// -------------
// firebase.initializeApp(config);

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid}`);

//   const snapShot = await userRef.get(); //retreieved the info

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await userRef.set({ //sent information to the db
//         displayName,
//         email,
//         createdAt,
//         ...additionalData
//       });
//     } catch (error) {
//       console.log('error creating user', error.message);
//     }
//   }

//   return userRef;
// };

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);


//   export {firebase};