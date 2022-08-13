//imports de dependencias
import { Alert } from 'react-native';
import {doc, getDoc, updateDoc, arrayUnion} from 'firebase/firestore';
import {getAuth} from "firebase/auth";
import { database, db } from '../api/backend';
import { ref, get, child, update } from "firebase/database";

//datos de sesion: getEmail
export const {email} = getAuth().currentUser;

//firestore getNombre
export const fireNombre = async(varEmail) => {
    const docRef = doc(database, "datoUser", varEmail);
    const docSnap = await getDoc(docRef);
    return docSnap.data().nombre;
}

//firestore muestra maquinas array
export const fireMaq = async(varEmail) => {
    const docRef = doc(database, "datoUser", varEmail);
    const docSnap = await getDoc(docRef);
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

//Realtiem control maquina
export const encender = async() => {
  const prendido = 'ON'
  update(ref(db, 'Maquina/'), {
    encendido: prendido
  }).then(() => {
    console.log("ya se subio wii");
  }).catch((error) => {
    console.log(error);
    console.log('regada 5#');
  })
};

//getDepositos 
export const depositos = async() => {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, `Maquina/Depositos`));
  return snapshot.val();
};