// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getReactNativePersistence, initializeAuth} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  databaseURL: "https://fabricajabon-f1d05-default-rtdb.firebaseio.com",
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const database = getFirestore(app);
export const db = getDatabase(app);