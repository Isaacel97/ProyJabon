import { Alert } from 'react-native';
import {doc, getDoc, updateDoc, arrayUnion} from 'firebase/firestore';
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

//firestores agrega maquina
export const agregaMaq = async(varEmail, arrayMaquina) => {
    if (arrayMaquina != null) {
        const maquinaRef = doc(database, "datoUser", varEmail);
        await updateDoc(maquinaRef, {
          maquinas: arrayUnion(arrayMaquina)
        }).then(() => {
          Alert.alert("Maquina agregada", "¡Se agrego maquina con exito!");
        }).catch((error) => {
          Alert.alert("¡Error!", "No se agrego el id, intentelo mas tarde.");
        });
    } else {
        console.log('por suerte no se manda nada');
    };
    
  }