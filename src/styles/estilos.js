import {StyleSheet } from 'react-native';
import colores from './colores'

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },
  logo: {
    width: 290,
    height: 85,
    margin:16,
  },
  textItem:{
    fontSize: 16,
    color: 'black',
    alignSelf: 'flex-start'
  },
  textInputIcon: {
    padding: 8,
    fontSize: 20,
    width: '90%'
  },
  textInputIconContainer: {
    margin: 8,
    width: '95%',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colores.negroMic
  },
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    padding: 8,
  },
  switchText: {
    flex: 1,
    color: colores.azulMic,
  },
  botonTouch: {
    backgroundColor: colores.azulMic,
    margin: 24,
    textAlign: 'center',
    padding:16,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  linkTouch: {
    color: colores.azulMic,
    fontSize: 18,
    textAlign: 'center',
  },
  textBtn: {
    color: 'white',
    fontSize: 18,
  },
  textDatos: {
    paddingStart: 8,
    marginTop: 12,
    fontSize: 20,
    fontWeight: 'bold'
  },
  itemContainer: {
    marginVertical: 4,
    marginTop: 8,
    padding: 8,
    borderWidth: 2,
    borderColor: colores.negroMic,
    borderRadius: 10,
    backgroundColor: colores.blancoFondo,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconItem: {
    width: 64,
    height: 64,
    overflow: 'hidden',
  },
  headerEstilo: {
    headerStyle: {
      backgroundColor: colores.azulMic,
      },
    headerTintColor: 'white',
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 12,
    marginLeft: 20
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: colores.azulMic
  },
  iconMaq: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textBluetooth: {
    fontSize: 20
  },
  containerBlue: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: colores.blancoFondo
  },
  titleBlue: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  containerToggle: {
    paddingVertical: 12,
    flexDirection: 'row'
  },
  switchBlue: {
    width:50,
  },
  subtituloBluetooth: {
    fontSize:18,
    fontWeight: 'bold',
    color: 'gray',
    borderBottomWidth:1,
    borderColor: colores.negroMic,
    marginBottom:10
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth:1,
    borderColor: colores.transparente,
  },
  wrapperPosition:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  Nombre:{
    paddingHorizontal: 20
  },
  });

export default estilos;