import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCykGa1rH3T8vq8XA4ZwPYcHKhn4vrYGQg",
  authDomain: "marketplace-sb1.firebaseapp.com",
  projectId: "marketplace-sb1",
  storageBucket: "marketplace-sb1.appspot.com",
  messagingSenderId: "907191994672",
  appId: "1:907191994672:web:e827a600b6c981b24260f5",
};

const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);

export { fireStore };
