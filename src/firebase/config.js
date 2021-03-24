  
import  firebase from 'firebase'
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

  // const Fire=firebase.initializeApp(firebaseConfig);
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () =>{ auth.signInWithPopup(provider);
}

const provider1 = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook= () => auth.signInWithPopup(provider1);



export {firebase};

// export {firebase};

