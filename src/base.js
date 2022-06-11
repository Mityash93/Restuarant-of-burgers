import Rebase from "re-base";
import firebase from "firebase/app";
require("firebase/database");

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAHXjOwvVp-jldSMAr_XLpK0G7X0_km_m4",
  authDomain: "very-hot-burgers-1de6f.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-1de6f-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
