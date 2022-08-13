import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, RefreshControl, SafeAreaView} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import colores from '../../styles/colores';
import estilos from '../../styles/estilos';
import MaquinaItem from '../../components/MaquinaItem';
import { fireMaqLen, fireMaq } from '../../utils/controlBD';
import {getAuth} from "firebase/auth";


//tab = pestaña | i <= arrRepiteItems.length
const MaquinaTab = (props) => {
  //carga cuenta
  const {email} = getAuth().currentUser;
    
  // Controlamos la visibilidad del loader
  const [flatCargando, setFlatCargando] = React.useState(false);
  //datos array
  const [maquina, setMaquina] = useState (null);
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
    setFlatCargando(false);
  }
  //tamaño arreglo
  const [maquinaLen, setMaquinaLen] = useState (null);
  useEffect (() => { 
    getMaquinasLen();
  }, [])
  const getMaquinasLen = async() => {
    const m = await fireMaqLen(email);
    setMaquinaLen(m);
  }
  //array list
  const arrRepiteItems = []
  for (let i = 0; i < maquinaLen; i++ ) {
    arrRepiteItems.push({
        id: `id: ${maquina[i]}`,
        nombre: `Maquina: #${i + 1}`,
    });
  }
  return(
    <View
      style={estilos.container}
    >
        <SafeAreaView>
            <FlatList
                refreshControl={
                    <RefreshControl 
                        refreshing={flatCargando}
                        size='large'
                        onRefresh={{getMaquinas, getMaquinasLen}}
                        tintColor={colores.azulMic} //ios
                        colors={[colores.azulMic]} // android, perimite varios colores a diferencia de tintcolor de ios
                    />
                }
                data={arrRepiteItems}
                renderItem={(item) => (
                    <MaquinaItem
                        datosMaquina={item.item}
                        navigation={props.navigation}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    </View>
  )
}

export default MaquinaTab;