import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBE24_qbDhTmQB0Hmy9rJzeqQcX6-46rMI",
  authDomain: "vaporwave-shop.firebaseapp.com",
  projectId: "vaporwave-shop",
  storageBucket: "vaporwave-shop.appspot.com",
  messagingSenderId: "538273751918",
  appId: "1:538273751918:web:bb2cbf5c8d56c328e8577f"
};

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  export {db, auth};
