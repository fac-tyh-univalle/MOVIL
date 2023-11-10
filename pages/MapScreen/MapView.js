import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import MapScreenStyles from './Styles/MapScreenStyles';
import { View, Pressable, Alert, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {Marker} from 'react-native-maps';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faQuestion } from '@fortawesome/free-solid-svg-icons';
import PlaceCard from './Components/PlaceCard';
import * as Location from 'expo-location';
import Loader from '../../components/Loader';
import PocketBaseService from '../../services/PocketBaseService';


export default function App(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]); // Lista filtrada de lugares
  const [region, setRegion] = useState(null);
  const [search, setSearch] = useState('');
  const [marker, setMarker] = useState(null);
  const mapRef = React.createRef();

  var pathImage= 'https://boring-carpenter.pockethost.io/api/files/';

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(location);

        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });

        setIsLoading(true);

        // Obtén el ID de la categoría desde los parámetros de la ruta
        const { categoryId } = props.route.params;
        
        // Obtén los lugares de la categoría
        let records = await PocketBaseService.getLocationsByCategory(categoryId);
        records = records.map((record) => {
          let image = record.photos.filter((photo) => photo.includes('.jpg' || '.png'));
          return {
            ...record,
            image: image.length > 0 ? pathImage + record.collectionId + "/" + record.id + "/" + image[0] : null,
          }
        });
        
        setPlaces(records);
        setFilteredPlaces(records);

        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  // Este efecto se activará cada vez que el texto de búsqueda cambie
  useEffect(() => {
    if (places.length > 0) {
      // Filtra los lugares basándose en el texto de búsqueda
      const filtered = places.filter(place => 
        place.name.toLowerCase().includes(search.toLowerCase())
      );
  
      // Si sólo se ha encontrado un lugar, mueve el mapa a ese lugar
      if (filtered.length === 1) {
        const place = filtered[0];
        mapRef.current.animateToRegion({
          latitude: place.latitude,
          longitude: place.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }
  
      // Actualiza los lugares filtrados
      setFilteredPlaces(filtered);
    }
  }, [search]);
  


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
        ref={mapRef}
        onPress={handleMapPress}
        style={MapScreenStyles.map} 
        region={region}
        showsUserLocation={true}
      >
        {filteredPlaces.map((place, index) => (
          <Marker
            key={index}
            pinColor="blue" // Esto cambiará el color del marcador a azul
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
            title={place.name}
            onPress={() => { 
              props.navigation.navigate('CardPlace', { 
                photos: place.photos,
                title: place.name,
                type: place.type,
                description: place.description,
                address: place.address,
                schedule: place.schedule,
                collectionId: place.collectionId,
                id: place.id,
              }) 
            }}
          />
        ))}
      </MapView>
      <View style={MapScreenStyles.carrouselContainer}>
        <ScrollView horizontal={true}>
        {
          filteredPlaces && filteredPlaces.map((item, index) => (
            <PlaceCard
              key={index}
              image={item.image}
              title={item.name}
              type={item.type}
              description={item.description}
              address={item.address}
              schedule={item.schedule}
              collectionId={item.collectionId}
              id={item.id}
              photos={item.photos}
              item={item}
            />
          ))
          }
          {isLoading && (
          <Loader/>
          )}
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