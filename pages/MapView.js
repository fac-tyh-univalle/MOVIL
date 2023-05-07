import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Pressable, Alert, ScrollView, Text, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {Marker} from 'react-native-maps';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faQuestion } from '@fortawesome/free-solid-svg-icons';
import PlaceCard from '../components/PlaceCard';

export default function App(props) {
  const handlePress = (num) => {
    if (num === 1) {
      props.navigation.goBack();
    }
    else if (num === 2) {
      Alert.alert(
        'Ayuda', 
        'En esta pantalla puedes seleccionar o ver un lugar en el mapa para que disfrutes de dicho lugar.',
        [
          {
            text: 'Ok',
          }
        ],
      );
    }
  };

  const [search, setSearch] = useState('');

  const [marker, setMarker] = useState(null);

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;

    // Si ya existe un marcador, eliminarlo
    if (marker) {
      setMarker(null);
    }

    // Crear un nuevo marcador
    const newMarker = <Marker coordinate={coordinate} />;
    setMarker(newMarker);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Pressable style={styles.backIcon} onPress={() => handlePress(1)}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={25}
            color="#FFFFFF"
            marginRight={15}
          />
        </Pressable>
        <Pressable style={styles.qIcon} onPress={() => handlePress(2)}>
          <FontAwesomeIcon
            icon={faQuestion}
            size={25}
            color="#FFFFFF"
            marginRight={15}
          />
        </Pressable>
      </View>
      <MapView
        onPress={handleMapPress}
        style={styles.map} 
        initialRegion={{
          latitude: -17.375264,
          longitude: -66.159567,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {marker}
      </MapView>
      <View style={styles.carrouselContainer}>
        <ScrollView horizontal={true}>
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
        </ScrollView>
      </View>
      <View style={styles.cobntainer2}>
          <SearchBar
              placeholder="Buscar"
              containerStyle={styles.searchBarContainer}
              inputContainerStyle={styles.searchBarInputContainer}
              inputStyle={styles.searchBarInput}
              value={search}
              onChangeText={setSearch}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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