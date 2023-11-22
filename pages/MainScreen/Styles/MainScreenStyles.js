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
    flex: 0,
    //backgroundColor: 'black',
    height: '65%',
    justifyContent: 'space-between', 
    paddingHorizontal: 16, 
  },
  column: {
    flex: 1, 
    marginRight: 8, 
    //backgroundColor: 'red',
  },
  
});

export default MainScreenStyles