import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SearchBar, Icon } from "react-native-elements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMugSaucer,
  faLocationDot,
  faWhiskeyGlass,
  faCartShopping,
  faHotel,
  faBurger,
  faStar,
  faSchool,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import CardFavorite from "./Components/CardFavorite";
import FavoriteScreenStyles from "./Styles/FavoriteScreenStyles";
import Footer from "../../components/Footer";

const FavoriteScreen = (props) => {
  const [search, setSearch] = React.useState("");

  const handlePress = () => {
    props.navigation.navigate("Categories");
  };

  const handlePress2 = () => {
    props.navigation.navigate("MapView");
  };

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
        <View style={FavoriteScreenStyles.column}>

            <CardFavorite />
            <CardFavorite />
        </View>
        <View style={FavoriteScreenStyles.column}>

            <CardFavorite />
            <CardFavorite />
        </View>
      </View>
      <Footer />
    </View>
  );
};
 

export default FavoriteScreen;
