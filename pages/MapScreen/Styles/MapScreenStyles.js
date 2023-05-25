import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');



const MapScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      width: width,
      height: height,
    },
    topContainer: {
      position: 'relative',
      zIndex: 1,
      flexDirection: 'row',
      width: '100%', 
      height: '10%', 
      alignSelf: 'flex-start', 
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom: 15, 
      marginTop: 25,
    },
    backIcon: {
      width: '10%',
      height: '50%',
      backgroundColor: '#2F3234',
      flexDirection: 'row',
      marginLeft: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', 
    },
    qIcon: {
      width: '10%',
      height: '50%',
      backgroundColor: '#2F3234',
      flexDirection: 'row',
      marginRight: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', 
      right: 0,
    },
    map: {
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
    cobntainer2: { 
      backgroundColor: 'black',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: '10%',
      justifyContent: 'center',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    },
    searchBarContainer: {
      marginTop: 10,
      width: '100%',
      backgroundColor: 'black',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
      paddingHorizontal: 16,
    },
    searchBarInputContainer: {
      backgroundColor: '#333232',
    },
    searchBarInput: {
      color: '#ABABAB',
    },
    carrouselContainer: {
      position: 'absolute',
      bottom: 0,
      marginBottom: 60,
      width: '100%',
      height: '25%',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
  });

export default MapScreenStyles;