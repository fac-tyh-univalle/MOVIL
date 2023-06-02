import React from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import CardFavorite from "./Components/CardFavorite";
import FavoriteScreenStyles from "./Styles/FavoriteScreenStyles";
import Footer from "../../components/Footer";
//import { useEffect } from "react";
//import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { useState } from "react";
import { useEffect } from "react";
import PocketBaseService from "../../services/PocketBaseService";
import LocalStorageService from "../../services/LocalStorageService";
import { ScrollView } from "react-native-gesture-handler";
//import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoriteScreen = (props) => {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        var placesFavorites = await LocalStorageService.getPlacesFavorites();
        let records = await PocketBaseService.getFavorites(placesFavorites);
        setPlaces(records);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <View style={FavoriteScreenStyles.mainContainer}>
      <View style={FavoriteScreenStyles.topContainer}>
        <Text style={FavoriteScreenStyles.favoriteTitle}>Favoritos</Text>
      </View>
      <View style={FavoriteScreenStyles.header}>
        <Text style={FavoriteScreenStyles.favoriteSubTitle}>Tus favoritos</Text>
        <Text style={FavoriteScreenStyles.showAllSubtitle}>Ver Todos</Text>
      </View>

      <View style={FavoriteScreenStyles.middlePart}>
        <FlatList
          data={places}
          numColumns={2} // Esto establece el número de columnas
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CardFavorite
              style={FavoriteScreenStyles.cardFavorite}
              title={item.name}
              address={item.address}
              image={item.image}
              //navigation={props.navigation}
            />
          )}
        />
      </View>
      <Footer />
    </View>
  );
};

export default FavoriteScreen;
