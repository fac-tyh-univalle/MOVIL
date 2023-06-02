import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image, Pressable, Alert } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";
import { Video } from 'expo-av';
import AudioPlayer from "./AudioPlayer";
import LocalStorageService from "../../../services/LocalStorageService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const iconColor = "#FFFFFF";
const iconColorFavorite = "#F23134";

const CardPlace = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [audios, setAudios] = useState([]);
  const route = useRoute();
  let { photos, title, type, description, address, schedule, collectionId, id } = route.params;
  const navigation = useNavigation();

  var pathImage= 'https://magnificent-painter.pockethost.io/api/files/';

  console.log('pito: ', photos)

  useEffect(() => {
    // Comprueba si 'photos' existe antes de intentar filtrarlas
    let images = [];
    let videos = [];
    let audios = [];

    if (photos) {
      images = photos.filter(photo => photo.endsWith('.jpg') || photo.endsWith('.png') || photo.endsWith('.jpeg'));
      videos = photos.filter(photo => photo.endsWith('.mp4'));
      audios = photos.filter(photo => photo.endsWith('.mp3'));
      
      console.log(images);
      console.log(videos);
      console.log(audios);

      setImages(images);
      setVideos(videos);
      setAudios(audios);
    }
  }, []);

  const showAlert = () => {
    Alert.alert(
      "Favoritos",
      "Se añadió a Favoritos",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };
  


  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" color={iconColor} />
          </Pressable>
          <Text style={styles.titleStyle}>{title}</Text>
          <Icon name="favorite-border" color={iconColorFavorite} onPress={() => {
            LocalStorageService.addToFavoritesID(id);
            showAlert();
          }} />
        </View>
        <ScrollView>
          <ScrollView 
            horizontal={true} 
            contentContainerStyle={styles.scrollViewContainer} // Agrega esta línea
          >
            {images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: pathImage + collectionId + "/" + id + "/" + image }}
                style={styles.imageStyle}
              />
            ))}
          </ScrollView>
          <View style={styles.infoStyle}>
            <Text style={styles.categoryStyle}>{type}</Text>
            <Text style={styles.description}>
              {description}
            </Text>
            <Text style={styles.address}>
              Direccion: <Text style={styles.noColor}>{address}</Text>
            </Text>
            <Text style={styles.schedule}>Horario de Atencion: <Text style={styles.noColor} > {schedule}</Text> </Text>
          </View>
          <View style={styles.videoContainer}>
            {videos.map((video, index) => (
              <Video
                key={index}
                source={{ uri: pathImage + collectionId + "/" + id + "/" + video }}
                style={styles.videoStyle}
                resizeMode="contain"
                shouldPlay={false}
                useNativeControls={true}
              />
            ))}
          </View>
          <View style={styles.audioContainer}>
            {audios.map((audio, index) => (
              <AudioPlayer
                key={index}
                uri={pathImage + collectionId + "/" + id + "/" + audio}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const deviceHeight = Math.round(Dimensions.get("window").height);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: deviceHeight,
    alignItems: "center",
    marginTop: 40,
  },
  cardContainer: {
    width: deviceWidth,
    height: deviceHeight,

    backgroundColor: "#111213",

    borderRadius: radius,

    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
    padding: 20,
  },
  imageStyle: {
    width: deviceWidth - 40,
    height: 300,
    borderRadius: radius,
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",

  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
    color: "#fff",
  },
  categoryStyle: {
    fontWeight: "200",
    color: '#9D9797',
  },
  infoStyle: {
    alignContent: "center",
    alignSelf: "center",

    padding: 20,
  },
    description: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "200",
    textAlign: "justify",
    marginTop: 8,
    },
    address: {
    color: "#3CAFE7",
    fontSize: 15,
    fontWeight: "200",
    textAlign: "justify",
    marginTop: 10,
    },
    schedule: {
    color: "#9EFC8E",
    fontSize: 15,
    fontWeight: "200",
    textAlign: "justify",
    marginTop: 10,
    },
  iconLabelStyle: {
    flexDirection: "row",
    marginTop: 10,
  },noColor: {
    color: "#fff",
  },
  scrollViewContainer: {
    alignItems: 'center', // Centra las imágenes verticalmente
    justifyContent: 'center', // Centra las imágenes horizontalmente
  },
  imageStyle: {
    width: deviceWidth - 40,
    height: 300,
    borderRadius: radius,
    opacity: 0.9,
    marginRight: 10, // Agrega un margen a la derecha de cada imagen
    marginLeft: 10, // Agrega un margen a la izquierda de cada imagen
  },
  videoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginLeft: 10,
  },
  videoStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: deviceWidth - 40,
    height: 300,
    borderRadius: radius,
    opacity: 0.9,
    marginRight: 10, // Agrega un margen a la derecha de cada imagen
    marginLeft: 10, // Agrega un margen a la izquierda de cada imagen
  },
  audioContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginLeft: 10,
  },
  audioStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: deviceWidth - 40,
    height: 300,
    borderRadius: radius,
    opacity: 0.9,
    marginRight: 10, // Agrega un margen a la derecha de cada imagen
    marginLeft: 10, // Agrega un margen a la izquierda de cada imagen
  },
});

export default CardPlace;