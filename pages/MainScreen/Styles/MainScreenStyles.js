import { StyleSheet } from "react-native";

const MainScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  topContainer: {
    width: '100%', 
    height: '15%', 
    alignSelf: 'flex-start', 
    alignItems: 'center',
    justifyContent: 'center', 
    paddingLeft: 10, 
  },
  positionCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationTitle: {
    marginTop: 15,
    fontSize: 20,
    color: '#ABABAB',
  },
  text: {
    fontSize: 16, 
    color: 'black', 
    fontWeight: 'bold',
  },
  middlePart: {
    flex: 1, // Esto permite que el contenedor se expanda
    justifyContent: 'flex-start', // Cambia a 'flex-start' para alinear los elementos al principio
    paddingHorizontal: 16,
  },
  column: {
    flexGrow: 1, // Esto permite que el contenedor del ScrollView crezca con el contenido
    // Elimina marginRight si no es necesario, podría afectar el desplazamiento si es muy grande
  },
  
});

export default MainScreenStyles
