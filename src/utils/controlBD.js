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

//firestore getApellido
export const fireApellido = async(varEmail) => {
  const docRef = doc(database, "datoUser", varEmail);
  const docSnap = await getDoc(docRef);
  return docSnap.data().apellido;
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
          Alert.alert("¡Error!", error);
        });
    }else{
      Alert.alert("Dato invalido","Favor de agregar un ID valido")
    }   
  };

//Realtiem control maquina
export const encender = async(varID) => {
  if (varID != null) {
    const prendido = 'ON'
    await update(ref(db, ('maquinas/'+varID)), {
      encendido: prendido
    }).then(() => {
      Alert.alert(
        'Inicio proceso',
        'Comenzando con mezcla de ingredientes' ,
        [{
          text: 'Ok',
          onPress: () => {},
          style: 'default',
        }]);
    }).catch((error) => {
      Alert.alert('¡ERROR!', 'Problemas de conexion ', error);
    })
  }
};

//getDepositos 
export const depositos = async(varID) => {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, 'maquinas/'+varID+'/depositos'));
  return snapshot.val();
};