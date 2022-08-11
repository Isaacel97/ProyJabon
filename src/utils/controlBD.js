import {doc, getDoc, collection, query, where, getDocs} from 'firebase/firestore';
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

//firestore maquinas
export const fireMaq = async(varEmail) => {
    const docRef = doc(database, "datoUser", varEmail);
    const docSnap = await getDoc(docRef);
    for (let i = 0; i < docSnap.data().maquinas.length; i++){
        console.log('funcion:',docSnap.data().maquinas[i])
    };
    return docSnap.data().maquinas;
}

//firestore tamaño array
export const fireMaqLen = async(varEmail) => {
    const docRef = doc(database, "datoUser", varEmail);
    const docSnap = await getDoc(docRef);
    return docSnap.data().maquinas.length;
}

