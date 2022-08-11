import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, RefreshControl, SafeAreaView} from 'react-native';
import colores from '../../styles/colores';
import estilos from '../../styles/estilos';
import MaquinaItem from '../../components/MaquinaItem';
import { fireMaq, fireMaqLen } from '../../utils/controlBD';
import {getAuth} from "firebase/auth";

//tab = pestaña | i <= arrRepiteItems.length
const MaquinaTab = (props) => {
  const [flatCargando, setFlatCargando] = React.useState(false);
  //carga cuenta
  const {email} = getAuth().currentUser;
  //muestra id maq
  const [maquina, setMaquina] = useState (null);
  useEffect (() => { 
    getMaquinas();
  }, [])
  const getMaquinas = async() => {
    const m = await fireMaq(email);
    console.log(m);
    setMaquina(m);
  }
  //tamaño arreglo
  const [maquinaLen, setMaquinaLen] = useState (null);
  useEffect (() => { 
    getMaquinasLen();
  }, [])
  const getMaquinasLen = async() => {
    const m = await fireMaqLen(email);
    console.log(m);
    setMaquinaLen(m);
  }
  //array list
  const arrRepiteItems = []
  for (let i = 0; i < maquinaLen; i++ ) {
    arrRepiteItems.push({
        id: `id: ${i}`,
        nombre: `Maquina: #${i + 1}`,
    });
  }
  return(
    <View
      style={estilos.container}
    >
      <Text>{maquina}</Text>
        <SafeAreaView>
            <FlatList
                refreshControl={
                    <RefreshControl 
                        refreshing={flatCargando}
                        size='large'
                        onRefresh={() => {
                            setFlatCargando(true);
                        }}
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