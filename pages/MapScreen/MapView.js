import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import MapScreenStyles from './Styles/MapScreenStyles';
import { View, Pressable, Alert, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {Marker} from 'react-native-maps';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faQuestion } from '@fortawesome/free-solid-svg-icons';
import PlaceCard from './Components/PlaceCard';
import PocketBase from 'pocketbase';

export default function App(props) {
  // const { category } = props.route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
  
        const pb = new PocketBase('https://magnificent-painter.pockethost.io');  

        let url = 'https://magnificent-painter.pockethost.io/api/files/';
        let records = await pb.collection('location').getFullList({
          sort: '-created',
        })

        records = records.filter((record) => {

          return record.status == "active" && record.category_id[0] == category;
        });

        records = records.map((record) => { 
          return {
            ...record,
            // url del backend + id de la coleccion + id del registro + nombre de la imagen
            image: record.photos ? url + record.collectionId + "/" + record.id + "/" + record.photos[0] : null,
          }
        })

        setPlaces(records);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    })()
  }, [])


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
    <View style={MapScreenStyles.container}>
      <View style={MapScreenStyles.topContainer}>
        <Pressable style={MapScreenStyles.backIcon} onPress={() => handlePress(1)}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={25}
            color="#FFFFFF"
            marginRight={15}
          />
        </Pressable>
        <Pressable style={MapScreenStyles.qIcon} onPress={() => handlePress(2)}>
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
        style={MapScreenStyles.map} 
        initialRegion={{
          latitude: -17.375264,
          longitude: -66.159567,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {marker}
      </MapView>
      <View style={MapScreenStyles.carrouselContainer}>
        <ScrollView horizontal={true}>
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
        </ScrollView>
      </View>
      <View style={MapScreenStyles.cobntainer2}>
          <SearchBar
              placeholder="Buscar"
              containerStyle={MapScreenStyles.searchBarContainer}
              inputContainerStyle={MapScreenStyles.searchBarInputContainer}
              inputStyle={MapScreenStyles.searchBarInput}
              value={search}
              onChangeText={setSearch}
          />
      </View>
    </View>
  );
}