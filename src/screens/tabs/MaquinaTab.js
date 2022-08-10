import React from 'react';
import {View, Text, FlatList, RefreshControl, SafeAreaView} from 'react-native';
import colores from '../../styles/colores';
import estilos from '../../styles/estilos';
import MaquinaItem from '../../components/MaquinaItem';
import { leeDoc, email } from '../../utils/controlBD';

//tab = pestaña | i <= arrRepiteItems.length
const MaquinaTab = (props) => {
  const [flatCargando, setFlatCargando] = React.useState(false);
  
  const arrRepiteItems = []
  for (let i = 0; i <= 4; i++ ) {
    arrRepiteItems.push({
        id: `id: ${i}`,
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