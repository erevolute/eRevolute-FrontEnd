// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8ivwWj9ce12Xnb_PcGZtC1MCmt-6HeVg",
  authDomain: "erovolute.firebaseapp.com",
  projectId: "erovolute",
  storageBucket: "erovolute.appspot.com",
  messagingSenderId: "763007343202",
  appId: "1:763007343202:web:9a123627db0f550aac0f3b",
  measurementId: "G-TQLC56CTWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;