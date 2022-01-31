/** @format */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

//firebase
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCgLW7rFlQEQM5CBaWIsHQOG4PKewJ9oO8",
  authDomain: "projecthexgreenfire.firebaseapp.com",
  projectId: "projecthexgreenfire",
  storageBucket: "projecthexgreenfire.appspot.com",
  messagingSenderId: "98962373790",
  appId: "1:98962373790:web:3d6acae42bcb8ed2600f8f",
  measurementId: "G-MQQY2Y97JS",
};
firebase.initializeApp(firebaseConfig);
var db = getFirestore();
export { db };

//including modules
const app = createApp(App);
app.use(store);
app.use(router);
app.use(firebase);
app.mount("#app");
