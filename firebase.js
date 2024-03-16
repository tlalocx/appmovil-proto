// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBClMWcYkbNzFFFNINRIv7V88qAUuM05Dw",
  authDomain: "appmovil-proto.firebaseapp.com",
  projectId: "appmovil-proto",
  storageBucket: "appmovil-proto.appspot.com",
  messagingSenderId: "561738896507",
  appId: "1:561738896507:web:25bddaeb6c83866ca17ede",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
