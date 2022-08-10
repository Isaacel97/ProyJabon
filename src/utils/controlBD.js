import {doc, getDoc} from 'firebase/firestore';
import {getAuth} from "firebase/auth";
import { database } from '../api/backend';
import { async } from '@firebase/util';

//datos de sesion
export const {email} = getAuth().currentUser;

//firestore nombre
export const fireNombre = async(varEmail) => {
    const docRef = doc(database, "datoUser", varEmail);
    const docSnap = await getDoc(docRef);
    return docSnap.data().nombre;
}

//firestore nombre
export const fireMaq = async(varEmail) => {
    const docRef = doc(database, "datoUser", varEmail);
    const docSnap = await getDoc(docRef);
    return docSnap.data().maquinas;
}