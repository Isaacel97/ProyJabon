import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, RefreshControl, SafeAreaView} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import colores from '../../../styles/colores';
import estilos from '../../../styles/estilos';
import MaquinaItem from '../../../components/Maquinas/MaquinaItem';
import { fireMaqLen, fireMaq } from '../../../utils/controlBD';
import {getAuth} from "firebase/auth";

//tab = pestaña | i <= arrRepiteItems.length
const MaquinaTab = (props) => {
  //carga cuenta
  const {email} = getAuth().currentUser;
    
  // Controlamos la visibilidad del loader
  const [flatCargando, setFlatCargando] = useState(false);
  //datos array
  const [maquina, setMaquina] = useState (null);
  const [maquinaLen, setMaquinaLen] = useState (null);
  useEffect (() => { 
    getMaquinas();
  }, []);
  useFocusEffect(
		React.useCallback(() => {
			getMaquinas();
		}, [])
	);
  const getMaquinas = async() => {
    setFlatCargando(true);
    const m = await fireMaq(email);
    setMaquina(m);
    const n = await fireMaqLen(email);
    setMaquinaLen(n);
    setFlatCargando(false);
  }

  //array list
  const arrRepiteItems = []
  for (let i = 0; i < maquinaLen; i++ ) {
    arrRepiteItems.push({
      texto: "id: ",
      id: `${maquina[i]}`,
      nombre: `Maquina: #${i + 1}`,
    });
  }
  return(
    <View style={estilos.container}>
      <SafeAreaView>
        <FlatList refreshControl={
          <RefreshControl 
            refreshing={flatCargando}
            size='large'
            onRefresh={() => {getMaquinas()}}
            tintColor={colores.azulMic} //ios
            colors={[colores.azulMic]} // android, perimite varios colores a diferencia de tintcolor de ios
          />
          }
          data={arrRepiteItems}
          renderItem={(item) => (
            <MaquinaItem
              datosMaquina={item.item}
              navigation={props.navigation}/>
          )}
          keyExtractor={(item) => item.id}/>
      </SafeAreaView>
    </View>
)}

export default MaquinaTab;